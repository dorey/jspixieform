###
This module is carried over from model.inputParser.coffee

It converts a flat array into a nested array where grouped questions
are bunched together.

The output os a JSON serializable structure like this:

[
  {
    "type": "group",
    "name": "grp1",
    "$kuid": "aaa",
    "__rows": [
      {
        "type": "group",
        "name": "grp2",
        "$kuid": "bbb",
        "__rows": [
          {
            "type": "text",
            "name": "q1",
            "$kuid": "ccc"
          },
          {
            "type": "text",
            "name": "q2",
            "$kuid": "ddd"
          }
        ]
      }
    ]
  }
]
###

$aliases = require('./aliases')


class ParsedStruct
  constructor: (@type, @atts={})->
    @contents = []
  push: (item)->
    @contents.push(item)
    ``
  export: ->
    arr = []
    for item in @contents
      if item instanceof ParsedStruct
        item = item.export()
      arr.push(item)
    Object.assign({}, @atts, {type: @type, __rows: arr})


rowGrouper = (rows)->
  counts = {
    open: {}
    close: {}
  }
  count_att = (opn_cls, att)->
    counts[opn_cls][att]?=0
    counts[opn_cls][att]++
    ``
  grpStack = [new ParsedStruct('survey')]

  _pushGrp = (type='group', item)->
    count_att('open', type)
    grp = new ParsedStruct(type, item)
    _curGrp().push(grp)
    grpStack.push(grp)

  _popGrp = (closedByAtts, type)->
    count_att('close', type)
    _grp = grpStack.pop()
    if _grp.type isnt closedByAtts.type
      throw new Error("mismatched group/repeat tags")
    ``

  _curGrp = ->
    _l = grpStack.length
    if _l is 0
      throw new Error("unmatched group/repeat")
    grpStack[_l-1]

  for item in rows
    _groupAtts = $aliases.q.testGroupable(item.type)

    if _groupAtts
      if _groupAtts.begin
        _pushGrp(_groupAtts.type, item)
      else
        _popGrp(_groupAtts, item.type)
    else
      _curGrp().push(item)

  if grpStack.length isnt 1
    throw new Error(JSON.stringify({
        message: "unclosed groupable set",
        counts: counts 
      }))
  _curGrp().export().__rows

module.exports =
  rowGrouper: rowGrouper

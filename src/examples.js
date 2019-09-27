import {pd} from 'pretty-data';
import {jspixieform} from './jspixieform.js'
import {squashNodes} from './squashNodes';
import {diffLines} from 'diff';

import $ from 'jquery';

function prettyXml (xml) {
  return pd.xml(xml);
}

let fixtures = require('./fixtures');

export const examples = [];

class Example {
  constructor ({xml, restructured, json, index}) {
    if (restructured === undefined) {
      this.failed = true;
      return false;
    }
    this.xml = xml;

    this.json = JSON.stringify(restructured);
    this.features = [];
    [
      [/geo/, 'geo'],
      [/select_one\"/, 'select_one'],
      [/select_multiple\"/, 'select_multiple'],
      [/namespaces/, 'namespaces'],
      [/repeat/, 'repeat'],
      [/intent/, 'intent'],
      [/select_one_from_file/, 'select_one_from_file'],
      [/select_multiple_from_file/, 'select_multiple_from_file'],
      [/choice_filter/, 'choice_filter'],
      [/hint/, 'hint'],
      [/some_text/, 'some_text'],
      [/calculat/, 'calculate'],
    ].forEach(([regex, name])=>{
      if (this.json.match(regex)) {
        this.features.push(name);
      }
    })

    this.index = index;
    let options = {};
    let $content = $('<div>', {html: xml}).children().eq(0);
    let $instance = $('instance', $content);
    let $instanceChild = $instance.children().eq(0);
    options.id_string = $instanceChild.attr('id');
    options.uuid = true;
    options.nodeName = $content.find('instance').children().eq(0).get(0).nodeName.toLowerCase();

    this.generated_xml = prettyXml(jspixieform(this.json, options));

    try {
      this.json_pp = JSON.stringify(JSON.parse(this.json), null, 2)
    } catch (err) {
      this.json_pp = JSON.stringify(JSON.parse({'error': 'could not pretty print json'}))
    }
    this.xml_pp = pd.xml(`${xml}`);
    this.xmlmin = pd.xmlmin(`${xml}`);
    this.lines = [];
    this.scoreY = 0;
    this.scoreN = 0;
    this.hasDiff = false;
    this.outOf = this.xml_pp.split('/n').length;
    let xml1 = this.xml_pp;

    // figure out xmlns issues
    xml1 = xml1.toLowerCase();

    // figure out capitalization issues (after separating from DOM)
    xml1 = xml1.replace(/.*xmlns.*\n/g, '');

    // labels are wrapped in 1 space in pyxform. was this a workaround?
    xml1 = xml1.replace(/label> /g, 'label>');

    // a weird spacing issue on #36
    xml1 = xml1.replace(/ text /g, '   text');

    // does an element with no label and a translated hint work?
    'nope not yet'

    // /geos/repeat example (#4) doesn't squash the '<label></label>'
    if (xml1.includes('/geos/repeat')) {
      xml1 = xml1.replace(/<label><\/label>/g, '<label/>');
    }

    let xml2 = this.generated_xml;

    // again, figure out xmlns issues
    xml2 = xml2.replace(/.*xmlns.*\n/g, '').toLowerCase();

    diffLines(xml1, xml2).forEach(({count, value, added, removed}, ln)=>{
      let eq = (!added && !removed);
      let l1, l2;
      if (added) {
        l1 = value.replace(/\n$/, '');
      } else if (removed) {
        l2 = value.replace(/\n$/, '');
      } else {
        l1 = l2 = value.replace(/\n$/, '');
      }
      this.lines.push({
        lineNumber: ln,
        lines: [l1, l2],
        empties: [!l1, !l2],
        eq: eq,
      });
      if (eq) {
        this.scoreY += count;
      } else {
        this.scoreN += count;
        this.hasDiff = true;
      }
    });
    this.outOf = this.scoreY + this.scoreN;
    this.score = this.scoreY / this.outOf;
    examples.push(this);
  }
}

fixtures.forEach((params, index)=> {
  params.index = index;
  new Example(params);
})

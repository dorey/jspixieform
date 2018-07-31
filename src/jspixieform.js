import _ from 'underscore';
import $ from 'jquery';
import { OrderedMap } from 'immutable';

import { rowGrouper } from './rowGrouper'
import { squashNodes } from './squashNodes';

import {
  createElement,
  setHtml,
  outerHtml,
  setAttribute,
  removeAttribute,
  bindElem,
  appendChild,
} from './dom-placeholders';

function createSelectItem({label, value}){
  let item = createElement('item');
  let el = createElement('label');
  setHtml(el, label);
  appendChild(item, el);
  el = createElement('value');
  setHtml(el, value);
  appendChild(item, el);
  return item;
}


const namespaces = new OrderedMap([
  ["xmlns", "http://www.w3.org/2002/xforms"],  
  ["xmlns:enk", "http://enketo.org/xforms"],
  ["xmlns:esri", "http://esri.com/xforms"],
  ["xmlns:ev", "http://www.w3.org/2001/xml-events"],
  ["xmlns:h", "http://www.w3.org/1999/xhtml"],
  ["xmlns:jr", "http://openrosa.org/javarosa"],
  ["xmlns:naf", "http://nafundi.com/xforms"],
  ["xmlns:orx", "http://openrosa.org/xforms"],
  ["xmlns:xsd", "http://www.w3.org/2001/XMLSchema"],
]);


class Valued {
  constructor (data) {
    this._data = data;
    this.name = data.name;
    this.key = this._data.name;
    this.type = this._data.type;
  }
  get translatedValues () {
    if (!this.__translatedValues) {
      this.__translatedValues = [];
      Object.keys(this._data).forEach((key)=>{
        let val = this._data[key];
        if (val instanceof TranslatedValue) {
          this.__translatedValues.push(val);
        }
      });
    }
    return this.__translatedValues;
  }
  ancestors () {
    let ancestors = [];
    let ptr = this;
    while (ptr._parent) {
      ptr = ptr._parent;
      ancestors.push(ptr);
    }
    return ancestors;
  }
  expandPaths (str, toFn=false) {
    // toFn || throw new Error('toFn must be defined')
    return str.replace(/\$\{([^\}]+)\}/g,
        (st, $name, pos, orig)=> toFn($name)
    );
  }
  getForm () {
    let ptr = this;
    while (ptr._parent) {
      ptr = ptr._parent;
    }
    return ptr;
  }
  get path () {
    if (!this.__path) {
      let ancestors = this.ancestors().reverse();
      this.__path = [
        '',
        ...ancestors.map((a)=> a.name),
        this.name,
      ].join('/');
    }
    return this.__path;
  }
  getTranslation (field, translation) {
    let txid = translation.$id;
    if (translation === undefined) {
      return new Error('Must supply a translation with an id: `$id`')
    }
    if (this._data[field]) {
      return this._data[field].txid(txid);
    } else {
      log('field not found', field, this);
    }
  }
  has (field) {
    if (this.isTranslated(field)) {
      return Object.keys(field).length > 0;
    }
    return (field in this._data) && this._data[field];
  }
  get (field) {
    let val = this._data[field];
    let isTranslated = _.isObject(val);
    // if (isTranslated) {
    //   throw new Error('cannot get untranslated value for this field');
    // }
    return val;
  }
  isTranslated (field) {
    return this._data[field] instanceof TranslatedValue
  }
}

class TranslatedValue {
  constructor (values, {row, field, survey}) {
    this._values = values;
    // Object.assign(this, values);
    this._context = {row, field, survey};
  }
  replace (...args) {
    log('careful', this);
    return this._values[Object.keys(this._values)[0]].replace(...args)
  }
  txid (txid) {
    return this._values[txid];
  }
}

class XPathStructure {
  constructor (values, {row, field, survey}) {
    this.values = values;
    this._context = {row, field, survey};
  }
}

class Row extends Valued {
  getSelectList () {
    return this.getForm().choices[this.get('type__list_name')]
  }
  toExport (_export, parent) {
    if (!this._parent) {
      console.error('no parent ' + this.get('name'))
    }
    let dest = parent ? parent.elem : _export.instance0;
    let parentPath = parent ? parent.path : _export.path;
    let _elem = createElement(`${this.get('name')}`);
    if (this.get('default')) {
      setHtml(_elem, this.get('default'));
    }

    let bindEl = bindElem();
    let relevant = this.get('bind:relevant') || this.get('relevant');
    let bodyParent = parent ? parent.body : _export.body;
    let bodyWrap;

    let hintButNoLabel = false;
    if (this.get('label')) {
      this.body = createElement('label');
    } else if (this.get('hint')) {
      hintButNoLabel = true;
      this.body = createElement('hint');
    } else {
      // when neither label nor hint exists, use a label
      this.body = createElement('label');
    }

    let appendLabelAndHintToModel = (row, el) => {

    }
    let appendListToModel = (row, bodyWrap) => {
      let _list = row.getSelectList();
      if (_list) {
        _list.forEach(({value, label})=>{
          appendChild(bodyWrap, createSelectItem({
            label,
            value,
          }));
        });
      }
    }
    switch (this.type) {
      case 'select_one':
        bodyWrap = createElement('select1');
        appendChild(bodyWrap, this.body);
        appendListToModel(this, bodyWrap);
        break;
      case 'select_multiple':
        bodyWrap = createElement('select');
        let elLabel = this.get('label');
        let elHint = this.get('hint');
        if (elLabel) {
          let lbl = createElement('label');
          setHtml(lbl, elLabel);
          appendChild(bodyWrap, lbl);
        }
        if (elHint) {
          let hint = createElement('hint');
          setHtml(hint, elHint);
          appendChild(bodyWrap, hint);
        }
        appendListToModel(this, bodyWrap);
        break;
      default:
        bodyWrap = createElement('input');
        appendChild(bodyWrap, this.body);
    }
    setAttribute(bodyWrap, 'ref', this.path);

    if (relevant) {
      relevant = this.expandPaths(relevant,
        str => ` ${this.getForm().pathFor(str)} `
      );
    }

    setAttribute(bindEl, 'nodeset', this.path);
    switch (this.type) {
      case 'note':
        setAttribute(bindEl, 'readonly', 'true()');
        setAttribute(bindEl, 'type', 'string');
        break;
      case 'select_multiple':
        setAttribute(bindEl, 'type', 'select');
        break;
      case 'calculate':
        removeAttribute(bindEl, 'nodeset');
        let _calc = this.get('calculation');
        _calc = this.expandPaths(_calc,
          (str)=> ` ${this.getForm().pathFor(str)} `
        )
        setAttribute(bindEl, 'calculate', _calc);
        setAttribute(bindEl, 'nodeset', this.path);
        setAttribute(bindEl, 'readonly', 'true()');
        setAttribute(bindEl, 'type', 'string');
        if (_calc && _calc.indexOf('enclosed') !== -1) {
          removeAttribute(bindEl, 'readonly');
        }
        break;
      case 'integer':
        setAttribute(bindEl, 'type', 'int');
        break;
      case 'select_one':
        setAttribute(bindEl, 'type', 'select1');
        break;
      case 'text':
        if (relevant) {
          setAttribute(bindEl, 'relevant', relevant);
        }
        setAttribute(bindEl, 'type', 'string');
        break;
      case 'geoshape':
      case 'geopoint':
      case 'geotrace':
        setAttribute(bindEl, 'type', this.type);
        break;
    }
    appendChild(dest, _elem);
    _export.binds.push(bindEl);

    if (this.get('label')) {
      if (this.isTranslated('label')) {
        let _translationPath = `/translations/${this.get('name')}:label`;
        setAttribute(this.body, 'ref', `jr:itext('${_translationPath}')`)
      } else {
        setHtml(this.body,
          this.expandPaths(this.get('label'),
              (str)=> `<output value=" ${this.getForm().pathFor(str)} "></output> `
            )
          );
      }
    } else if (hintButNoLabel) {
      if (this.isTranslated('hint')) {
        console.error('Cannot currently handle translated hints when no label present');
      } else {
        setHtml(this.body, this.get('hint'));
      }
    }

    switch (this.type) {
      case 'calculate':
        break;
      default:
        appendChild(bodyParent, bodyWrap);
    }
  }
}

class Group extends Valued {
  constructor (data) {
    super(data);
    this.rows = [];
  }
  toExport (_export, parent) {
    let dest = parent ? parent.elem : _export.instance0;
    let parentPath = parent ? parent.path : _export.path;
    // this.path = `${parentPath}/${this.get('name')}`;
    // _export.byName[this.get('name')] = this;
    this.elem = createElement(this.get('name'));
    if (this.get('type') === 'repeat') {
      setAttribute(this.elem, 'jr:template', '');
    }
    appendChild(dest, this.elem);

    let bodyWrap = createElement('group')
    if (this.get('intent')) {
      let _intent = this.expandPaths(this.get('intent'), (str)=> {
        return ` ${this.getForm().pathFor(str)} `;
      });
      setAttribute(bodyWrap, 'intent', _intent);
    }
    setAttribute(bodyWrap, 'ref', this.path);
    let label = this.get('label');
    let labelEl = createElement('label');
    if (label) {
      label = this.expandPaths(label || '');
    }
    setHtml(labelEl, label || '');
    appendChild(bodyWrap, labelEl);
    if (this.get('type') === 'repeat') {
      this.body = createElement('repeat');
      appendChild(bodyWrap, this.body);
      setAttribute(this.body, 'nodeset', this.path);
    } else {
      this.body = bodyWrap;
    }
    if (!this.isMeta) {
      appendChild(_export.body, bodyWrap);
    }
    this.rows.forEach((row) => 
      row.toExport(_export, this)
    );
  }
  get isGroup () {
    return true;
  }
}

function initRow (row, form, parent=null) {
  for (let field in row) {
    if (row.hasOwnProperty(field)) {
      if (field === '__rows') {
        continue;
      }
      let value = row[field];
      if (_.isArray(value)) {
        row[field] = new XPathStructure(value, {row, field, form});
      } else if (_.isObject(value)) {
        row[field] = new TranslatedValue(value, {row, field, form});
      }
    }
  }
  let item;
  if ('__rows' in row) {
    let _rows = row.__rows;
    delete row.__rows;
    item = new Group(row);
    _rows.forEach(function(_r){
      item.rows.push(initRow(_r, form, item));
    });
  } else {
    item = new Row(row);
  }
  item._parent = parent || form;
  form.registerRow(item);
  return item;
}


class Form {
  constructor ({ survey, choices, settings, translations }) {
    this.survey = survey;
    this.byName = {};
    this.translations = translations;
    this.translateds = [];
    this.grouped = rowGrouper(this.survey).map(el => {
      return initRow(el, this, null);
    });
    this.choices = choices;
    this.settings = settings || {};
    this.version = this.settings.version || null;
    this.name = this.settings.name;
  }
  registerRow (row) {
    let _name = row.get('name');
    this.byName[row.get('name')] = row;
    row.translatedValues.forEach((val)=>{
      this.translations.forEach((tx)=>{
        let txval = val.txid(tx.$id);
        if (txval) {
          let txdata = {
            lang: tx.name,
            id: `/translations/${_name}:label`,
            value: txval,
          }
          this.translateds.push(txdata)
        }
      });
    });
  }
  pathFor (name) {
    if (this.byName[name]) {
      return this.byName[name].path;
    }
  }
  addMeta (name, details) {
    if (!this.meta) {
      this.meta = new Group({
        name: 'meta',
        __rows: [],
      });
      this.meta._parent = this;
      this.byName['meta'] = this.meta;
      this.meta.isMeta = true;
      this.grouped.push(this.meta);
    }
    let _row = new Row({
      name,
      ...details,
    });
    _row._parent = this.meta;
    this.byName[_row.get('name')] = _row;
    this.meta.rows.push(_row);
  }
  forEach (fn) {
    this.grouped.forEach((item)=>{
      fn.call(null, item);
    });
  }
}


class XFormExport {
  constructor (_options) {
    this._options = _options;
    this.head = createElement('h:head');
    this.title = createElement('h:title');
    this.model = createElement('model');
    this.instance = createElement('instance');
    this.itext = createElement('itext');
    this.instance0 = createElement(`${_options.nodeName}`);
    this.instance0.innerHTML = '';
    setAttribute(this.instance0, 'id', _options.id_string);
    if (_options.version) {
      setAttribute(this.instance0, 'version', _options.version);
    }
    // this.path = `/${_options.nodeName}`;
    this.body = createElement('h:body');
    this.meta = createElement('meta');
    this.content = createElement('h:html');
    this.namespaces = [];
    // contents of binds will get appended to head on export
    this.binds = [];
  }
  setNamespaces (namespaces) {
    namespaces.forEach((ns, key)=>
      setAttribute(this.content, key, ns)
    );
  }
  setTitle (title) {
    setHtml(this.title, title);
  }
  appendTranslations (t1) {
    let langs = new OrderedMap();
    t1.forEach((tx)=>{
      if (!langs.get(tx.lang)) {
        langs = langs.set(tx.lang, []);
      }
      langs.get(tx.lang).push(tx);
    });
    langs.forEach((langList, langName)=>{
      let $tEl = createElement('translation');
      setAttribute($tEl, 'lang', langName);
      langList.forEach((tx)=>{
        let $txEl = createElement('text');
        setAttribute($txEl, 'id', tx.id);
        let $val = createElement('value');
        setHtml($val, tx.value);
        appendChild($txEl, $val);
        appendChild($tEl, $txEl);        
      });
      appendChild(this.itext, $tEl);
    });
  }
  export ({squashFields, translateds}) {
    appendChild(this.head, this.title);
    appendChild(this.head, this.model);
    if (translateds && translateds.length > 0) {
      appendChild(this.model, this.itext);
      this.appendTranslations(translateds.reverse());
    }
    appendChild(this.model, this.instance);
    appendChild(this.instance, this.instance0);
    this.binds.forEach( el =>{
      appendChild(this.model, el);
    });
    appendChild(this.content, this.head);
    appendChild(this.content, this.body);
    let xml = outerHtml(this.content);
    xml = xml.replace(/field__/g, '');
    xml = squashNodes([
      ...squashFields,
      'bind',
      'output',
      'label',
      // 'instanceid', 'q', 'done', 'input', 'bind',
    ], xml);
    return `<?xml version="1.0"?>\n${xml}\n`;
  }
}

export function jspixieform (json, options={}) {
  // replace directional quote characters
  let _params = JSON.parse(
        json.replace(/[‘’]/g, `'`)
            .replace(/[“”]/g, `\\"`)
      );
  let form = new Form(_params);
  if ( options.nodeName ) {
    form.name = options.nodeName;
  }
  if ( options.uuid ) {
    form.addMeta('instanceID', {type: 'calculate', calculation: `concat('uuid:', uuid())`})
  }
  let idString = options.id_string;
  let instanceNodeName = options.nodeName;
  if ( form.version ) {
    options.version = form.version
  }
  let fields = new XFormExport(options);
  form.forEach(( item ) => {
    item.toExport(fields, null);
  });
  fields.setTitle('pyxform_autotesttitle');
  fields.setNamespaces(namespaces);
  return fields.export({
    translateds: form.translateds,
    squashFields: Object.keys(form.byName)
  });
}

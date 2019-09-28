import { JSDOM } from 'jsdom'
import { expect } from 'chai'

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const jsdom = new JSDOM(`<html><body><div id="app"></div></body></html>`);
// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document

let _window = jsdom.window;

_window.expect = expect;

// could probably be simplified by just doing
// Object.assign(global, jsdom.window);
let extendables = {
  document: _window.document,
  window: _window,
  navigator: _window.navigator,
  XMLHttpRequest: _window.XMLHttpRequest,
  screen: _window.screen,
};

Object.assign(global, extendables);

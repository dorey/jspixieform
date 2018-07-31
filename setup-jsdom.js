import { jsdom } from 'jsdom'
import { expect } from 'chai'

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const DEFAULT_HTML = '<html><body><div id="app"></div></body></html>'

// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document
global.document = jsdom(DEFAULT_HTML)

// Set up a mock window with config
global.window = document.defaultView
global.window.expect = expect

// Allow for things like window.location
global.navigator = window.navigator
global.XMLHttpRequest = window.XMLHttpRequest
global.screen = window.screen

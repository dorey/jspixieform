/* global describe, it */

'use strict';

const assert = require('power-assert'),
  { jspixieform } = require('../src/jspixieform.js');

describe('jspixieform({jsonRepresenataionOfSurvey}, [options]).then(...)', () => {
  describe('Arguments', () => {
    it('jspixieform( jsonStringRepresentationOfForm )', () => {
      return jspixieform(JSON.stringify({survey:[{type: 'note', label:'hi'}]})).then((result) => {
        assert.deepEqual(result, 123);
      });
    });
  });
});

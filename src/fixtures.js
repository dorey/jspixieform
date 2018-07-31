module.exports = [
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <area id=\"pyxform_autotest_id_string\">\n          <geoshape1>38.253094215699576 21.756382658677467;38.25021274773806 21.756382658677467;38.25007793942195 21.763892843919166;38.25290886154963 21.763935759263404;38.25146813817506 21.758421137528785</geoshape1>\n          <result/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </area>\n      </instance>\n      <bind nodeset=\"/area/geoshape1\" type=\"geoshape\"/>\n      <bind calculate=\"enclosed-area( /area/geoshape1 )\" nodeset=\"/area/result\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/area/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/area/geoshape1\">\n      <label>Draw your shape here...</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "default": "38.253094215699576 21.756382658677467;38.25021274773806 21.756382658677467;38.25007793942195 21.763892843919166;38.25290886154963 21.763935759263404;38.25146813817506 21.758421137528785", 
          "type": "geoshape", 
          "name": "geoshape1", 
          "label": "Draw your shape here..."
        }, 
        {
          "calculation": "enclosed-area(${geoshape1})", 
          "type": "calculate", 
          "name": "result"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "default": "38.253094215699576 21.756382658677467;38.25021274773806 21.756382658677467;38.25007793942195 21.763892843919166;38.25290886154963 21.763935759263404;38.25146813817506 21.758421137528785", 
          "type": "geoshape", 
          "name": "geoshape1", 
          "label": "Draw your shape here..."
        }, 
        {
          "calculation": "enclosed-area(${geoshape1})", 
          "type": "calculate", 
          "name": "result"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <custom_namespaces id=\"pyxform_autotest_id_string\">\n          <q/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </custom_namespaces>\n      </instance>\n      <bind nodeset=\"/custom_namespaces/q\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/custom_namespaces/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/custom_namespaces/q\">\n      <label>Q</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "settings": {
        "namespaces": "esri=\"http://esri.com/xforms\" enk=\"http://enketo.org/xforms\" naf=\"http://nafundi.com/xforms\""
      }, 
      "survey": [
        {
          "type": "note", 
          "name": "q", 
          "label": "Q"
        }
      ]
    }, 
    "restructured": {
      "settings": {
        "namespaces": "esri=\"http://esri.com/xforms\" enk=\"http://enketo.org/xforms\" naf=\"http://nafundi.com/xforms\""
      }, 
      "survey": [
        {
          "type": "note", 
          "name": "q", 
          "label": "Q"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <test_loop id=\"pyxform_autotest_id_string\">\n          <for-block jr:template=\"\">\n            <input/>\n            <done/>\n          </for-block>\n          <meta>\n            <instanceID/>\n          </meta>\n        </test_loop>\n      </instance>\n      <bind nodeset=\"/test_loop/for-block/input\" relevant=\"( /test_loop/for-block/done ='no')\" type=\"string\"/>\n      <bind nodeset=\"/test_loop/for-block/done\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/test_loop/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <group ref=\"/test_loop/for-block\">\n      <label>Oh HAI</label>\n      <repeat nodeset=\"/test_loop/for-block\">\n        <input ref=\"/test_loop/for-block/input\">\n          <label>HI HI</label>\n        </input>\n        <input ref=\"/test_loop/for-block/done\">\n          <label>DONE?</label>\n        </input>\n      </repeat>\n    </group>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "begin_repeat", 
          "name": "for-block", 
          "label": "Oh HAI"
        }, 
        {
          "label": "HI HI", 
          "type": "text", 
          "name": "input", 
          "bind:relevant": "(${done}='no')"
        }, 
        {
          "type": "text", 
          "name": "done", 
          "label": "DONE?"
        }, 
        {
          "type": "end_repeat"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "begin_repeat", 
          "name": "for-block", 
          "label": "Oh HAI"
        }, 
        {
          "label": "HI HI", 
          "type": "text", 
          "name": "input", 
          "bind:relevant": "(${done}='no')"
        }, 
        {
          "type": "text", 
          "name": "done", 
          "label": "DONE?"
        }, 
        {
          "type": "end_repeat"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <geos id=\"pyxform_autotest_id_string\">\n          <repeat jr:template=\"\">\n            <point/>\n            <point_note/>\n            <trace/>\n            <trace_note/>\n            <shape/>\n            <shape_note/>\n          </repeat>\n          <meta>\n            <instanceID/>\n          </meta>\n        </geos>\n      </instance>\n      <bind nodeset=\"/geos/repeat/point\" type=\"geopoint\"/>\n      <bind nodeset=\"/geos/repeat/point_note\" readonly=\"true()\" type=\"string\"/>\n      <bind nodeset=\"/geos/repeat/trace\" type=\"geotrace\"/>\n      <bind nodeset=\"/geos/repeat/trace_note\" readonly=\"true()\" type=\"string\"/>\n      <bind nodeset=\"/geos/repeat/shape\" type=\"geoshape\"/>\n      <bind nodeset=\"/geos/repeat/shape_note\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/geos/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <group ref=\"/geos/repeat\">\n      <label></label>\n      <repeat nodeset=\"/geos/repeat\">\n        <input ref=\"/geos/repeat/point\">\n          <label>Record Geopoint</label>\n        </input>\n        <input ref=\"/geos/repeat/point_note\">\n          <label> Point <output value=\" /geos/repeat/point \"/> </label></input>\n        <input ref=\"/geos/repeat/trace\">\n          <label>Record a Geotrace</label>\n        </input>\n        <input ref=\"/geos/repeat/trace_note\">\n          <label> Trace: <output value=\" /geos/repeat/trace \"/> </label></input>\n        <input ref=\"/geos/repeat/shape\">\n          <label>Record a Geoshape</label>\n        </input>\n        <input ref=\"/geos/repeat/shape_note\">\n          <label> Shape: <output value=\" /geos/repeat/shape \"/> </label></input>\n      </repeat>\n    </group>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "begin_repeat", 
          "name": "repeat"
        }, 
        {
          "type": "geopoint", 
          "name": "point", 
          "label": "Record Geopoint"
        }, 
        {
          "type": "note", 
          "name": "point_note", 
          "label": "Point ${point}"
        }, 
        {
          "type": "geotrace", 
          "name": "trace", 
          "label": "Record a Geotrace"
        }, 
        {
          "type": "note", 
          "name": "trace_note", 
          "label": "Trace: ${trace}"
        }, 
        {
          "type": "geoshape", 
          "name": "shape", 
          "label": "Record a Geoshape"
        }, 
        {
          "type": "note", 
          "name": "shape_note", 
          "label": "Shape: ${shape}"
        }, 
        {
          "type": "end_repeat"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "begin_repeat", 
          "name": "repeat"
        }, 
        {
          "type": "geopoint", 
          "name": "point", 
          "label": "Record Geopoint"
        }, 
        {
          "type": "note", 
          "name": "point_note", 
          "label": "Point ${point}"
        }, 
        {
          "type": "geotrace", 
          "name": "trace", 
          "label": "Record a Geotrace"
        }, 
        {
          "type": "note", 
          "name": "trace_note", 
          "label": "Trace: ${trace}"
        }, 
        {
          "type": "geoshape", 
          "name": "shape", 
          "label": "Record a Geoshape"
        }, 
        {
          "type": "note", 
          "name": "shape_note", 
          "label": "Shape: ${shape}"
        }, 
        {
          "type": "end_repeat"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <geo_alias id=\"pyxform_autotest_id_string\">\n          <location/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </geo_alias>\n      </instance>\n      <bind nodeset=\"/geo_alias/location\" type=\"geopoint\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/geo_alias/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/geo_alias/location\">\n      <label>GPS</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "geopoint", 
          "name": "location", 
          "label": "GPS"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "geopoint", 
          "name": "location", 
          "label": "GPS"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <geo id=\"pyxform_autotest_id_string\">\n          <location/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </geo>\n      </instance>\n      <bind nodeset=\"/geo/location\" type=\"geopoint\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/geo/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/geo/location\">\n      <label>GPS</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "geopoint", 
          "name": "location", 
          "label": "GPS"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "geopoint", 
          "name": "location", 
          "label": "GPS"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <intent_test id=\"pyxform_autotest_id_string\">\n          <pregrp/>\n          <xgrp>\n            <xgrpx_q1/>\n            <ygrpy_q2/>\n          </xgrp>\n          <postgrp/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </intent_test>\n      </instance>\n      <bind nodeset=\"/intent_test/pregrp\" type=\"string\"/>\n      <bind nodeset=\"/intent_test/xgrp/xgrpx_q1\" type=\"string\"/>\n      <bind nodeset=\"/intent_test/xgrp/ygrpy_q2\" type=\"int\"/>\n      <bind nodeset=\"/intent_test/postgrp\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/intent_test/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/intent_test/pregrp\">\n      <label>Pregroup text</label>\n    </input>\n    <group intent=\"ex:org.redcross.openmapkit.action.QUERY(osm_file= /intent_test/pregrp )\" ref=\"/intent_test/xgrp\">\n      <label>XGroup questions</label>\n      <input ref=\"/intent_test/xgrp/xgrpx_q1\">\n        <label>XGroup Q1</label>\n      </input>\n      <input ref=\"/intent_test/xgrp/ygrpy_q2\">\n        <label>XGroup Q2</label>\n      </input>\n    </group>\n    <input ref=\"/intent_test/postgrp\">\n      <label>Post group note</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "pregrp", 
          "label": "Pregroup text"
        }, 
        {
          "intent": "ex:org.redcross.openmapkit.action.QUERY(osm_file=${pregrp})", 
          "type": "begin_group", 
          "name": "xgrp", 
          "label": "XGroup questions"
        }, 
        {
          "type": "text", 
          "name": "xgrpx_q1", 
          "label": "XGroup Q1"
        }, 
        {
          "type": "integer", 
          "name": "ygrpy_q2", 
          "label": "XGroup Q2"
        }, 
        {
          "type": "end_group"
        }, 
        {
          "type": "note", 
          "name": "postgrp", 
          "label": "Post group note"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "pregrp", 
          "label": "Pregroup text"
        }, 
        {
          "intent": "ex:org.redcross.openmapkit.action.QUERY(osm_file=${pregrp})", 
          "type": "begin_group", 
          "name": "xgrp", 
          "label": "XGroup questions"
        }, 
        {
          "type": "text", 
          "name": "xgrpx_q1", 
          "label": "XGroup Q1"
        }, 
        {
          "type": "integer", 
          "name": "ygrpy_q2", 
          "label": "XGroup Q2"
        }, 
        {
          "type": "end_group"
        }, 
        {
          "type": "note", 
          "name": "postgrp", 
          "label": "Post group note"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <pyxform_autotestname id=\"pyxform_autotest_id_string\">\n          <pregrp/>\n          <xgrp>\n            <xgrpx_q1/>\n            <ygrpy_q2/>\n          </xgrp>\n          <postgrp/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </pyxform_autotestname>\n      </instance>\n      <bind nodeset=\"/pyxform_autotestname/pregrp\" type=\"string\"/>\n      <bind nodeset=\"/pyxform_autotestname/xgrp/xgrpx_q1\" type=\"string\"/>\n      <bind nodeset=\"/pyxform_autotestname/xgrp/ygrpy_q2\" type=\"int\"/>\n      <bind nodeset=\"/pyxform_autotestname/postgrp\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/pyxform_autotestname/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/pyxform_autotestname/pregrp\">\n      <label>Pregroup text</label>\n    </input>\n    <group ref=\"/pyxform_autotestname/xgrp\">\n      <label>XGroup questions</label>\n      <input ref=\"/pyxform_autotestname/xgrp/xgrpx_q1\">\n        <label>XGroup Q1</label>\n      </input>\n      <input ref=\"/pyxform_autotestname/xgrp/ygrpy_q2\">\n        <label>XGroup Q2</label>\n      </input>\n    </group>\n    <input ref=\"/pyxform_autotestname/postgrp\">\n      <label>Post group note</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "pregrp", 
          "label": "Pregroup text"
        }, 
        {
          "type": "begin_group", 
          "name": "xgrp", 
          "label": "XGroup questions"
        }, 
        {
          "type": "text", 
          "name": "xgrpx_q1", 
          "label": "XGroup Q1"
        }, 
        {
          "type": "integer", 
          "name": "ygrpy_q2", 
          "label": "XGroup Q2"
        }, 
        {
          "type": "end_group"
        }, 
        {
          "type": "note", 
          "name": "postgrp", 
          "label": "Post group note"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "pregrp", 
          "label": "Pregroup text"
        }, 
        {
          "type": "begin_group", 
          "name": "xgrp", 
          "label": "XGroup questions"
        }, 
        {
          "type": "text", 
          "name": "xgrpx_q1", 
          "label": "XGroup Q1"
        }, 
        {
          "type": "integer", 
          "name": "ygrpy_q2", 
          "label": "XGroup Q2"
        }, 
        {
          "type": "end_group"
        }, 
        {
          "type": "note", 
          "name": "postgrp", 
          "label": "Post group note"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <osm id=\"pyxform_autotest_id_string\">\n          <osm_road/>\n          <osm_building/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </osm>\n      </instance>\n      <bind nodeset=\"/osm/osm_road\" type=\"binary\"/>\n      <bind nodeset=\"/osm/osm_building\" type=\"binary\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/osm/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <upload mediatype=\"osm/*\" ref=\"/osm/osm_road\">\n      <label>Road</label>\n    </upload>\n    <upload mediatype=\"osm/*\" ref=\"/osm/osm_building\">\n      <label>Building</label>\n      <tag key=\"name\">\n        <label>Name</label>\n      </tag>\n      <tag key=\"addr:city\">\n        <label>City</label>\n      </tag>\n    </upload>\n  </h:body>\n</h:html>\n", 
    "json": {
      "settings": {}, 
      "translations": [
        null
      ], 
      "osm": [
        {
          "list name": "building_tags", 
          "name": "name", 
          "label": "Name"
        }, 
        {
          "list name": "building_tags", 
          "name": "addr:city", 
          "label": "City"
        }
      ], 
      "translated": [
        "label"
      ], 
      "survey": [
        {
          "type": "osm", 
          "name": "osm_road", 
          "label": [
            "Road"
          ]
        }, 
        {
          "type": "osm building_tags", 
          "name": "osm_building", 
          "label": [
            "Building"
          ]
        }
      ], 
      "schema": "1"
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <osm id=\"pyxform_autotest_id_string\">\n          <osm_road/>\n          <osm_building/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </osm>\n      </instance>\n      <bind nodeset=\"/osm/osm_road\" type=\"binary\"/>\n      <bind nodeset=\"/osm/osm_building\" type=\"binary\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/osm/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <upload mediatype=\"osm/*\" ref=\"/osm/osm_road\">\n      <label>Road</label>\n    </upload>\n    <upload mediatype=\"osm/*\" ref=\"/osm/osm_building\">\n      <label>Building</label>\n      <tag key=\"name\">\n        <label>Name</label>\n      </tag>\n      <tag key=\"addr:city\">\n        <label>City</label>\n      </tag>\n    </upload>\n  </h:body>\n</h:html>\n", 
    "json": {
      "settings": {}, 
      "translations": [
        null
      ], 
      "osm": [
        {
          "list_name": "building_tags", 
          "name": "name", 
          "label": "Name"
        }, 
        {
          "list_name": "building_tags", 
          "name": "addr:city", 
          "label": "City"
        }
      ], 
      "translated": [
        "label"
      ], 
      "survey": [
        {
          "type": "osm", 
          "name": "osm_road", 
          "label": [
            "Road"
          ]
        }, 
        {
          "type": "osm building_tags", 
          "name": "osm_building", 
          "label": [
            "Building"
          ]
        }
      ], 
      "schema": "1"
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <pyxform_autotestname id=\"pyxform_autotest_id_string\">\n          <n1/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </pyxform_autotestname>\n      </instance>\n      <bind nodeset=\"/pyxform_autotestname/n1\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/pyxform_autotestname/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/pyxform_autotestname/n1\">\n      <label>Note 1</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "note", 
          "name": "n1", 
          "label": "Note 1"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "note", 
          "name": "n1", 
          "label": "Note 1"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start=1,end=10,step=1", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start=1 , end=10 , step=1", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"2\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start = 1 , end = 10 , step = 2", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start=1;end=10;step=1", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start=1 end=10 step=1", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"14\" ref=\"/data/level\" start=\"3\" step=\"2\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "Start=3 End=14 STEP=2", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"20\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "end=20", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"int\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"10\" ref=\"/data/level\" start=\"1\" step=\"1\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <level/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/level\" type=\"decimal\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <range end=\"5.0\" ref=\"/data/level\" start=\"0.5\" step=\"0.5\">\n      <label>Scale</label>\n    </range>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translated": [
        "label"
      ], 
      "translations": [
        null
      ], 
      "schema": "1", 
      "survey": [
        {
          "type": "range", 
          "name": "level", 
          "parameters": "start=0.5 end=5.0 step=0.5", 
          "label": [
            "Scale"
          ]
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <aliases id=\"pyxform_autotest_id_string\">\n          <q1/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </aliases>\n      </instance>\n      <bind nodeset=\"/aliases/q1\" type=\"select1\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/aliases/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/aliases/q1\">\n      <label>Question 1</label>\n      <item>\n        <label>Yes</label>\n        <value>yes</value>\n      </item>\n      <item>\n        <label>No</label>\n        <value>no</value>\n      </item>\n    </select1>\n  </h:body>\n</h:html>\n", 
    "json": {
      "choices": {
        "yn": [
          {
            "value": "yes", 
            "label": "Yes"
          }, 
          {
            "value": "no", 
            "label": "No"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "yn", 
          "type": "select_one", 
          "name": "q1", 
          "label": "Question 1"
        }
      ]
    }, 
    "restructured": {
      "choices": {
        "yn": [
          {
            "value": "yes", 
            "label": "Yes"
          }, 
          {
            "value": "no", 
            "label": "No"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "yn", 
          "type": "select_one", 
          "name": "q1", 
          "label": "Question 1"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <aliases id=\"pyxform_autotest_id_string\">\n          <q1/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </aliases>\n      </instance>\n      <bind nodeset=\"/aliases/q1\" type=\"select1\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/aliases/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/aliases/q1\">\n      <label>Question 1</label>\n      <item>\n        <label>Yes</label>\n        <value>yes</value>\n      </item>\n      <item>\n        <label>No</label>\n        <value>no</value>\n      </item>\n    </select1>\n  </h:body>\n</h:html>\n", 
    "json": {
      "choices": {
        "yn": [
          {
            "value": "yes", 
            "label": "Yes"
          }, 
          {
            "value": "no", 
            "label": "No"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "yn", 
          "type": "select_one", 
          "name": "q1", 
          "label": "Question 1"
        }
      ]
    }, 
    "restructured": {
      "choices": {
        "yn": [
          {
            "value": "yes", 
            "label": "Yes"
          }, 
          {
            "value": "no", 
            "label": "No"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "yn", 
          "type": "select_one", 
          "name": "q1", 
          "label": "Question 1"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <valid_choices id=\"pyxform_autotest_id_string\">\n          <l1choice/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </valid_choices>\n      </instance>\n      <bind nodeset=\"/valid_choices/l1choice\" type=\"select1\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/valid_choices/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/valid_choices/l1choice\">\n      <label>select one from list l1</label>\n      <item>\n        <label>choice 1</label>\n        <value>c1</value>\n      </item>\n      <item>\n        <label>choice 2</label>\n        <value>c2</value>\n      </item>\n    </select1>\n  </h:body>\n</h:html>\n", 
    "json": {
      "choices": {
        "l1": [
          {
            "value": "c1", 
            "label": "choice 1"
          }, 
          {
            "value": "c2", 
            "label": "choice 2"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "l1", 
          "type": "select_one", 
          "name": "l1choice", 
          "label": "select one from list l1"
        }
      ]
    }, 
    "restructured": {
      "choices": {
        "l1": [
          {
            "value": "c1", 
            "label": "choice 1"
          }, 
          {
            "value": "c2", 
            "label": "choice 2"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "l1", 
          "type": "select_one", 
          "name": "l1choice", 
          "label": "select one from list l1"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <invalidcols id=\"pyxform_autotest_id_string\">\n          <q1/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </invalidcols>\n      </instance>\n      <bind nodeset=\"/invalidcols/q1\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/invalidcols/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/invalidcols/q1\">\n      <label>label</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "q1", 
          "label": "label"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "q1", 
          "label": "label"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <data id=\"pyxform_autotest_id_string\">\n          <s2xyz/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </data>\n      </instance>\n      <bind nodeset=\"/data/s2xyz\" type=\"select\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/data/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select ref=\"/data/s2xyz\">\n      <label>select multiple from xyz</label>\n      <item>\n        <label>Xx</label>\n        <value>xx</value>\n      </item>\n      <item>\n        <label>Yy</label>\n        <value>yy</value>\n      </item>\n      <item>\n        <label>Zz</label>\n        <value>zz</value>\n      </item>\n    </select>\n  </h:body>\n</h:html>\n", 
    "json": {
      "choices": {
        "xyz": [
          {
            "value": "xx", 
            "label": "Xx"
          }, 
          {
            "value": "yy", 
            "label": "Yy"
          }, 
          {
            "value": "zz", 
            "label": "Zz"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "xyz", 
          "type": "select_multiple", 
          "name": "s2xyz", 
          "label": "select multiple from xyz"
        }
      ]
    }, 
    "restructured": {
      "choices": {
        "xyz": [
          {
            "value": "xx", 
            "label": "Xx"
          }, 
          {
            "value": "yy", 
            "label": "Yy"
          }, 
          {
            "value": "zz", 
            "label": "Zz"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "xyz", 
          "type": "select_multiple", 
          "name": "s2xyz", 
          "label": "select multiple from xyz"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <ecsv id=\"pyxform_autotest_id_string\">\n          <city/>\n          <neighbourhoods/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </ecsv>\n      </instance>\n      <instance id=\"cities\" src=\"jr://file-csv/cities.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <instance id=\"neighbourhoods\" src=\"jr://file-csv/neighbourhoods.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <bind nodeset=\"/ecsv/city\" type=\"select1\"/>\n      <bind nodeset=\"/ecsv/neighbourhoods\" type=\"select\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/ecsv/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/ecsv/city\">\n      <label>City</label>\n      <itemset nodeset=\"instance('cities')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select1>\n    <select ref=\"/ecsv/neighbourhoods\">\n      <label>Neighbourhoods</label>\n      <itemset nodeset=\"instance('neighbourhoods')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <ecsv id=\"pyxform_autotest_id_string\">\n          <city/>\n          <neighbourhoods/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </ecsv>\n      </instance>\n      <instance id=\"cities\" src=\"jr://file-csv/cities.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <instance id=\"neighbourhoods\" src=\"jr://file-csv/neighbourhoods.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <bind nodeset=\"/ecsv/city\" type=\"select1\"/>\n      <bind nodeset=\"/ecsv/neighbourhoods\" type=\"select\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/ecsv/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/ecsv/city\">\n      <label>City</label>\n      <itemset nodeset=\"instance('cities')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select1>\n    <select ref=\"/ecsv/neighbourhoods\">\n      <label>Neighbourhoods</label>\n      <itemset nodeset=\"instance('neighbourhoods')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <ecsv id=\"pyxform_autotest_id_string\">\n          <city/>\n          <neighbourhoods/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </ecsv>\n      </instance>\n      <instance id=\"cities\" src=\"jr://file-csv/cities.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <instance id=\"neighbourhoods\" src=\"jr://file-csv/neighbourhoods.csv\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <bind nodeset=\"/ecsv/city\" type=\"select1\"/>\n      <bind nodeset=\"/ecsv/neighbourhoods\" type=\"select\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/ecsv/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/ecsv/city\">\n      <label>City</label>\n      <itemset nodeset=\"instance('cities')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select1>\n    <select ref=\"/ecsv/neighbourhoods\">\n      <label>Neighbourhoods</label>\n      <itemset nodeset=\"instance('neighbourhoods')/root/item[city= /ecsv/city ]\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "choice_filter": "city=${city}", 
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "select_one_from_file cities.csv", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "choice_filter": "city=${city}", 
          "type": "select_multiple_from_file neighbourhoods.csv", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <exml id=\"pyxform_autotest_id_string\">\n          <city/>\n          <neighbourhoods/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </exml>\n      </instance>\n      <instance id=\"cities\" src=\"jr://file/cities.xml\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <instance id=\"neighbourhoods\" src=\"jr://file/neighbourhoods.xml\">\n        <root>\n          <item>\n            <name>_</name>\n            <label>_</label>\n          </item>\n        </root>\n      </instance>\n      <bind nodeset=\"/exml/city\" type=\"select1\"/>\n      <bind nodeset=\"/exml/neighbourhoods\" type=\"select\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/exml/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/exml/city\">\n      <label>City</label>\n      <itemset nodeset=\"instance('cities')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select1>\n    <select ref=\"/exml/neighbourhoods\">\n      <label>Neighbourhoods</label>\n      <itemset nodeset=\"instance('neighbourhoods')/root/item\">\n        <value ref=\"name\"/>\n        <label ref=\"label\"/>\n      </itemset>\n    </select>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "select_one_from_file cities.xml", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.xml", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "select_one_from_file cities.xml", 
          "name": "city", 
          "label": "City"
        }, 
        {
          "type": "select_multiple_from_file neighbourhoods.xml", 
          "name": "neighbourhoods", 
          "label": "Neighbourhoods"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <itext>\n        <translation lang=\"french\">\n          <text id=\"/translations/n1:label\">\n            <value>bonjour</value>\n          </text>\n        </translation>\n        <translation lang=\"english\">\n          <text id=\"/translations/n1:label\">\n            <value>hello</value>\n          </text>\n        </translation>\n      </itext>\n      <instance>\n        <translations id=\"transl\">\n          <n1/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </translations>\n      </instance>\n      <bind nodeset=\"/translations/n1\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/translations/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/translations/n1\">\n      <label ref=\"jr:itext('/translations/n1:label')\"/>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translations": [
        {
          "$id": "tfxc", 
          "name": "english"
        }, 
        {
          "$id": "tVXn", 
          "name": "french"
        }
      ], 
      "survey": [
        {
          "type": "note", 
          "name": "n1", 
          "label": {
            "tVXn": "bonjour", 
            "tfxc": "hello"
          }
        }
      ]
    }, 
    "restructured": {
      "translations": [
        {
          "$id": "tfxc", 
          "name": "english"
        }, 
        {
          "$id": "tVXn", 
          "name": "french"
        }
      ], 
      "survey": [
        {
          "type": "note", 
          "name": "n1", 
          "label": {
            "tVXn": "bonjour", 
            "tfxc": "hello"
          }
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <quoth id=\"pyxform_autotest_id_string\" version=\"q('-')p\">\n          <smart_single_quoted/>\n          <smart_double_quoted/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </quoth>\n      </instance>\n      <bind nodeset=\"/quoth/smart_single_quoted\" type=\"select1\"/>\n      <bind nodeset=\"/quoth/smart_double_quoted\" relevant=\"selected( /quoth/smart_single_quoted , 'xxx')\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/quoth/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <select1 ref=\"/quoth/smart_single_quoted\">\n      <label>'single-quoted'</label>\n      <item>\n        <label>'Xxx'</label>\n        <value>xxx</value>\n      </item>\n      <item>\n        <label>\"Yyy\"</label>\n        <value>yyy</value>\n      </item>\n    </select1>\n    <input ref=\"/quoth/smart_double_quoted\">\n      <label>\"double-quoted\"</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "settings": {
        "version": "q(\u2018-\u2019)p"
      }, 
      "choices": {
        "xyz": [
          {
            "value": "xxx", 
            "label": "\u2018Xxx\u2019"
          }, 
          {
            "value": "yyy", 
            "label": "\u201cYyy\u201d"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "xyz", 
          "type": "select_one", 
          "name": "smart_single_quoted", 
          "label": "\u2018single-quoted\u2019"
        }, 
        {
          "relevant": "selected(${smart_single_quoted}, \u2018xxx\u2019)", 
          "type": "text", 
          "name": "smart_double_quoted", 
          "label": "\u201cdouble-quoted\u201d"
        }
      ]
    }, 
    "restructured": {
      "settings": {
        "version": "q(\u2018-\u2019)p"
      }, 
      "choices": {
        "xyz": [
          {
            "value": "xxx", 
            "label": "\u2018Xxx\u2019"
          }, 
          {
            "value": "yyy", 
            "label": "\u201cYyy\u201d"
          }
        ]
      }, 
      "survey": [
        {
          "type__list_name": "xyz", 
          "type": "select_one", 
          "name": "smart_single_quoted", 
          "label": "\u2018single-quoted\u2019"
        }, 
        {
          "relevant": "selected(${smart_single_quoted}, \u2018xxx\u2019)", 
          "type": "text", 
          "name": "smart_double_quoted", 
          "label": "\u201cdouble-quoted\u201d"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <pyxform_autotestname id=\"pyxform_autotest_id_string\">\n          <snowman/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </pyxform_autotestname>\n      </instance>\n      <bind nodeset=\"/pyxform_autotestname/snowman\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/pyxform_autotestname/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/pyxform_autotestname/snowman\">\n      <label>\u2603</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "snowman", 
          "label": "\u2603"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "snowman", 
          "label": "\u2603"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <test_l1 id=\"pyxform_autotest_id_string\">\n          <some_text/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </test_l1>\n      </instance>\n      <bind nodeset=\"/test_l1/some_text\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/test_l1/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/test_l1/some_text\">\n      <hint>a hint</hint>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "some_text", 
          "hint": "a hint"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "some_text", 
          "hint": "a hint"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <itext>\n        <translation default=\"true()\" lang=\"default\">\n          <text id=\"/img_test/display_img_test:label\">\n            <value form=\"image\">jr://images/img_test.jpg</value>\n          </text>\n        </translation>\n      </itext>\n      <instance>\n        <img_test id=\"pyxform_autotest_id_string\">\n          <display_img_test/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </img_test>\n      </instance>\n      <bind nodeset=\"/img_test/display_img_test\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/img_test/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/img_test/display_img_test\">\n      <label ref=\"jr:itext('/img_test/display_img_test:label')\"/>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "translation_list": null, 
      "schema": "1", 
      "survey": [
        {
          "media::image": "img_test.jpg", 
          "type": "note", 
          "name": "display_img_test"
        }
      ], 
      "settings": {}
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <issue96 id=\"pyxform_autotest_id_string\">\n          <var/>\n          <label/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </issue96>\n      </instance>\n      <bind nodeset=\"/issue96/var\" type=\"string\"/>\n      <bind nodeset=\"/issue96/label\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/issue96/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/issue96/var\">\n      <label>Ignored</label>\n    </input>\n    <input ref=\"/issue96/label\">\n      <label><output value=\" /issue96/var \"/> text </label></input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "text", 
          "name": "var", 
          "label": "Ignored"
        }, 
        {
          "type": "note", 
          "name": "label", 
          "label": "  ${var}  text"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "text", 
          "name": "var", 
          "label": "Ignored"
        }, 
        {
          "type": "note", 
          "name": "label", 
          "label": "  ${var}  text"
        }
      ]
    }
  }, 
  {
    "xml": "<?xml version=\"1.0\"?>\n<h:html xmlns=\"http://www.w3.org/2002/xforms\" xmlns:enk=\"http://enketo.org/xforms\" xmlns:esri=\"http://esri.com/xforms\" xmlns:ev=\"http://www.w3.org/2001/xml-events\" xmlns:h=\"http://www.w3.org/1999/xhtml\" xmlns:jr=\"http://openrosa.org/javarosa\" xmlns:naf=\"http://nafundi.com/xforms\" xmlns:orx=\"http://openrosa.org/xforms\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <h:head>\n    <h:title>pyxform_autotesttitle</h:title>\n    <model>\n      <instance>\n        <testxmlstructure id=\"pyxform_autotest_id_string\">\n          <q/>\n          <meta>\n            <instanceID/>\n          </meta>\n        </testxmlstructure>\n      </instance>\n      <bind nodeset=\"/testxmlstructure/q\" readonly=\"true()\" type=\"string\"/>\n      <bind calculate=\"concat('uuid:', uuid())\" nodeset=\"/testxmlstructure/meta/instanceID\" readonly=\"true()\" type=\"string\"/>\n    </model>\n  </h:head>\n  <h:body>\n    <input ref=\"/testxmlstructure/q\">\n      <label>Q</label>\n    </input>\n  </h:body>\n</h:html>\n", 
    "json": {
      "survey": [
        {
          "type": "note", 
          "name": "q", 
          "label": "Q"
        }
      ]
    }, 
    "restructured": {
      "survey": [
        {
          "type": "note", 
          "name": "q", 
          "label": "Q"
        }
      ]
    }
  }, 
  {}
];
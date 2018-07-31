import React from 'react'
import ReactDOM from 'react-dom'

import { log } from './log';

import { examples } from './examples'
import { pd } from 'pretty-data';

import injectPreviewStyles from './inject-preview-styles';

injectPreviewStyles();

let curFeature;
if (window.location.hash && window.location.hash.match(/^\#/)) {
  curFeature = window.location.hash.match(/^\#(.*)$/)[1];
}

class EqualLine extends React.Component {
  render () {
    let n = this.props.n;
    let eq = this.props.eq;
    if (eq) {
      return (
          <p className={`line line--${eq ? 'eq' : 'neq'}`} key={n}>
            <span>{'  '}{this.props.lines[0].split(/\n/).join('\n  ')}</span>
          </p>
        );
    } else {
      return (
          <div>
            {this.props.empties[0] ||
              <p className={`line line--neq line--neql`} key={`l${n}`}>
                <span>
                  {'> '}{this.props.lines[0].split(/\n/).join('\n> ')}
                </span>
              </p>
            }
            {this.props.empties[1] || 
              <p className={`line line--neq line--neqr`} key={`r${n}`}>
                <span>
                  {'< '}{this.props.lines[1].split(/\n/).join('\n< ')}
                </span>
              </p>
            }
          </div>
        );
    } 
  }
}

class Example extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    let leftStyle = {width: '49%', float: 'left'};
    let rightStyle = {width: '49%', float: 'left'};
    let clearBoth = {clear: 'both', width: '100%'};
    let featureTag = {backgroundColor: '#ddd', padding: '2px 5px', borderRadius: '4px', margin: '0 2px', color: '#666'};
    let pStyle = {position: 'absolute', top: 5, left: 5, position: 'relative'};
    return (
        <div style={clearBoth} key={`item${this.props.index}`} id={`item${this.props.index}`}>
          <p style={pStyle}>#{this.props.index+1}. {this.props.features.map((feature)=>{
            return (
              <span key={feature} style={featureTag} onClick={()=>{
                window.location.hash=feature;
              }}>
                {feature}
              </span>
            );
          })}</p>
          <code style={leftStyle}>
            <pre>
              {this.props.json_pp}
            </pre>
          </code>
          <code style={rightStyle}>
            <pre key={'y'}>
              {this.props.lines.map((line, n) => <EqualLine key={line.lineNumber} n={line.lineNumber} {...line} />)}
            </pre>
          </code>
        </div>
      );
  }
}
let _examples = [...examples];

function filterByIndex(n) {
  let expIndex = -1 + n;
  let _ex = _examples.filter((ex)=>{
    return ex.index === expIndex;
  })[0];
  _examples = [_ex];
}
// example:
// filterByIndex(34);

let tot = 0, outOf = 0, done = 0;
_examples.forEach(function(ex){
  outOf += ex.outOf;
  tot += ex.scoreY;
  if (ex.hasDiff) {
    done += 1;
  }
});

done = examples.length - done;

let features = [];
let successfulExamples = [];
let failedExamples = [];
_examples.forEach((example)=>{
  example.features.forEach((ft)=>{
    if (features.indexOf(ft) === -1) {
      features.push(ft);
    }
  });
});

if (curFeature && features.indexOf(curFeature) === -1) {
  curFeature = false;
}

_examples.forEach((example)=>{
  let list = example.hasDiff ? failedExamples : successfulExamples;
  if (!curFeature || example.features.indexOf(curFeature) !== -1) {
    list.push(example);
  }
});

ReactDOM.render(
  <div>
    <h1>Testing equivalence of JS pyxform rewrite to original Python pyxform</h1>
    <h4>{Math.floor(1000 * tot / outOf)/10}% of lines are equivalent</h4>
    <h4>{done} forms are passing completely (out of {examples.length}), included at the <a href='#completed'>bottom</a> of the page</h4>
    {failedExamples.length > 0 &&
      <div id='still-failing' key={'stillfailing'}>
        <h3>#still-failing</h3>
        <hr />
        {
          failedExamples.map((example, n) => <Example {...example} key={`index-${n}`} />)
        }
      </div>
    }
    {successfulExamples.length > 0 &&
      <div id='completed' key={'completed'}>
        <h3>#completed</h3>
        <hr />
        {
          successfulExamples.map((example, n) => <Example {...example} key={`index-${n}`} />)
        }
      </div>
    }
  </div>,
  document.getElementById("app")
)

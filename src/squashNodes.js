/*
This simple function exists so that we can reach parity between the pyxform
tests and the output of jspixieform conversion.

It won't be necessary if we move away from using the DOM for representation
of the XML tree, since we don't need most of the features of the DOM in this
library because we are only exporting an XML representation, and not doing
more complex stuff like searching, etc. within the XML document.

`squashNodes` is a basic way to remove empty TextContent from nodes in an
string representation of an XML tree.

Eg.
  <MyNode></MyNode>

is changed to

  <MyNode/>


*/
export function squashNodes (nodes, str) {
  nodes.forEach(function(node){
    let reStr = `(.*)<${node}([^<]*)></${node}>(.*)`;
    let matches = str.match(
        new RegExp(reStr, "i")
      )
    while (matches) {
      let [inp, prec, attrs, post] = matches;
      str = `${prec}<${node}${attrs}/>${post}`;
      matches = str.match(
              new RegExp(reStr)
            )
    }
  });
  return str;
}

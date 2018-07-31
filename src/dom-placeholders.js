// DOM placeholder functions
export function createElement(elType) {
  // we prepend `field__` to any elements to get around the DOM's tendency to
  // change the behavior of elements which it expects. E.g. <input>
  return {
    el: document.createElement(`field__${elType}`)
  };
}
export function setHtml (elem, html) {
  elem.el.innerHTML = html;
}
export function outerHtml (elem) {
  return elem.el.outerHTML;
}
export function setAttribute(elem, key, val) {
  elem.el.setAttribute(key, val);
}
export function removeAttribute(elem, key) {
  elem.el.removeAttribute(key);
}
export function bindElem() {
  return createElement('bind');
}
export function appendChild(elem, child) {
  elem.el.appendChild(child.el);
}

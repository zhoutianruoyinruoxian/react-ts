
  export function createSVG(tag:string, attrs?:any) {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (let attr in attrs) {
      if (attr === 'append_to') {
        const parent = attrs.append_to;
        parent.appendChild(elem);
      } else if (attr === 'innerHTML') {
        elem.innerHTML = attrs.innerHTML;
      } else {
        elem.setAttribute(attr, attrs[attr]);
      }
    }
    return elem;
  }
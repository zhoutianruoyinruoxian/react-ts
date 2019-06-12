export function urlParse() {
  const q = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v);
  return q;
}
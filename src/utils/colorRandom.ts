export default function colorRandom() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
}
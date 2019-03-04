
const test = (title) => {
  if (typeof title === 'number') {
    const a = Number(title.toString().split('').reverse().join(''));
    return a;
  } else if (typeof title === 'string') {
    return title.split('').reverse().join('');
  }
  throw new Error(`title should be 'number' or 'string`);
};
export default test;



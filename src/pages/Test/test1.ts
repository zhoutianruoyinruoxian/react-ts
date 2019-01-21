const title: number = 222;
interface Fooprop {
  <Title>(title: Title): any;
}
const test:Fooprop = (title) => {
  if (typeof title === 'number') {
    return title.toString.call(111) + '1';
  }
  if (typeof title === 'string') {
    return { title };
  }
  throw new Error(`title should be 'number' or 'string`);
}


export default test(title);

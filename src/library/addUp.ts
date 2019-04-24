type I = number | string;

function addUp(list: Array<I>) {
  let all: I;
  return list.map((o, i) => {
    if (i === 0) {
      all = o;
    }
    if (i >= 0) {
      (all as string) += o;
    }
    return all;
  })
}
export default addUp;

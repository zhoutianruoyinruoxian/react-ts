export default function arrayIncrease(number) {
  return [...Array(number).keys()];
}

Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i < this; i++) {
    yield i;
  }
}

/**
 * @desc 作用与上面的方法一致，上面采用的是genorator函数实现，这个是普通方法实现
 */
Number.prototype[Symbol.iterator] = function () {
  let i = 0;
  return {
    next: () => {
      if (i < this) {
        return { value: i++, done: false }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}


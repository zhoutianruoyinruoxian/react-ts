import _ from 'lodash';
import { narray } from '../type';

/**
 * @desc 冒泡排序算法
 */
export default function bubbleSort(array: narray = []): narray {
  let arr = _.clone(array);
  let len = arr.length;
  let count = 0;
  console.time('two');
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
        let temp = arr[j + 1];        //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.timeEnd('two');
  console.log(count, 'two');
  return arr;
}

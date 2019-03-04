import _ from 'lodash';
import { narray } from '../type';

/**
 * @desc 选择排序算法
 */
export default function bubbleSort(array: narray = []): narray {
  let arr: narray = _.clone(array);
  let len: number = arr.length;
  let count = 0;
  console.time('选择排序');
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      count++;
      if (arr[minIndex] > arr[j]) { // 相邻元素两两对比
        minIndex = j; // 将最小数索引存起来
      }
    }
    let temp = arr[i]; // 将第i个元素与最小数元素交换
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序');
  console.log(count, 'one');
  return arr;
}

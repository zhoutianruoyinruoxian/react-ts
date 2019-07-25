/**
* @desc `斐波那契数列`
*/

/**
 * @desc 普通递归实现
 * @param n 
 */
function a(n) {
  if (n === 1 || n === 2) return 1;
  return a(n - 1) + a(n - 2);
}

/**
 * @desc 尾递归优化后的实现，性能大幅提升
 * @param {number} n 获取数列第n个位置的值
 */
export default function fibonacci(n: number) {
  return b(n);
}

function b(n: number, a1 = 1, a2 = 1): number {
  if (n === 1 || n === 2) return a2;
  return b(n - 1, a2, a1 + a2);
}


export default class LinkedList {
  constructor() {
    this.length = 0; // 列表项的长度
    this.head = null; // 第一个节点的引用
  }

  append(element) {//向列表尾部添加一个新的项
    const node = new LinkNode(element);
    if (this.head === null) { //如果链表为空则存在head上作为第一项
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {// 获取链表最后一项
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) {//向列表的特定位置插入一个新的项
    //检查越界值
    if (position > -1 && position <= this.length) {
      let node = new LinkNode(element);
      let current = this.head;
      let previous;
      let index = 0;
      if (position === 0) {//在第一个位置添加
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;

  }
  remove(element) {//从列表中移除一项

  }
  removeAt(position) {//从列表的特定位置移除一项
    //检查越界值
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      //移除第一项
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }
  indexOf(element) {//返回元素在列表中的索引。如果列表中没有该元素则返回-1
  }
  isEmpty() {//如果链表中不包含任何元素，返回 true ，如果链表长度大于0则返回 false

  }
  size() {//返回链表包含的元素个数。与数组的 length 属性类似

  }
  toString() {//由于列表项使用了 Node 类，就需要重写继承自JavaScript对象默认的toString 方法，让其只输出元素的值。

  }
  print() { }
}
class LinkNode { // Node 类表示要加入列表的项
  constructor(element) {
    this.element = element;
    this.next = null;
  }
};
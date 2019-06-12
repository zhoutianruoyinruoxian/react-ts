import _assert from './publicFunction/assert';

/**
 * @desc 断言参数必须存在的方法
 * @param {any} key 
 */
function necessary(key: any) {
  _assert(typeof key !== undefined, `paramter '${key}' is required but not found!`);
}

/**
 * @desc 断言参数必须为函数的方法
 * @param {any} fun 
 */
function isFunction(fun: any) {
  _assert(typeof fun === 'function', `paramter '${fun}' should be 'function' but get '${typeof fun}'!`);
}

function xor(a: boolean, b: boolean) {
  return a == !b;
}

type Key = number;

interface Fun {
  (key?: Key): any
}

class TreeNode {
  key: Key;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(key: Key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}


export default class BinarySearchTree {
  root: TreeNode = null;

  insert(key: Key) {
    necessary(key);
    const treeNode = new TreeNode(key);
    if (this.root === null) {
      this.root = treeNode;
    } else {
      this.insertNode(this.root, treeNode);
    }
  }

  /**
   * @desc 如果树非空，需要找到插入新节点的位置。因此，在调用 insertNode 方法时要通过参数
    传入树的根节点和要插入的节点。
    如果新节点的键小于当前节点的键（现在，当前节点就是根节点）（行 {4} ），那么需要检
    查当前节点的左侧子节点。如果它没有左侧子节点（行 {5} ），就在那里插入新的节点。
    如果有左侧子节点，需要通过递归调用 insertNode 方法（行 {7} ）继续找到树的下一层。
    在这里，下次将要比较的节点将会是当前节点的左侧子节点。
    如果节点的键比当前节点的键大，同时当前节点没有右侧子节点（行 {8} ），就在那里插
    入新的节点（行 {9} ）。如果有右侧子节点，同样需要递归调用 insertNode 方法，但是要
    用来和新节点比较的节点将会是右侧子节点
   */
  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(key: Key) {
    necessary(key);
    return !!this.searchNode(this.root, key);
  }

  private searchNode(node: TreeNode, key: Key) {
    if (node === null) return false;
    if (key < node.key) return this.searchNode(node.left, key);
    if (key > node.key) return this.searchNode(node.right, key);
    if (key === node.key) return node;
  }

  remove(key: Key) {
    necessary(key);
    this.root = this.removeNode(this.root, key);
  }

  private removeNode(node: TreeNode, key: Key) {
    if (node === null) return null;
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    if (key === node.key) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // if (node.left === null) {
      //   node = node.right;
      //   return node;
      // }
      // if (node.right === null) {
      //   node = node.left;
      //   return node;
      // }

      if (xor(!!node.left, !!node.right)) {//与上述注释代码为同一逻辑
        node = node.left || node.right;
        return node;
      }
      const minRightKey = this.minNode(node.right);
      node.key = minRightKey;
      node.right = this.removeNode(node.right, minRightKey);
      return node;
    }
  }

  min() {
    return this.minNode(this.root);
  }

  max() {
    return this.maxNode(this.root);
  }

  private minNode(node: TreeNode) {
    if (node === null) return null;
    while (node.left !== null) {
      // while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  private maxNode(node: TreeNode) {
    if (node === null) return null;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  inOrderTraverse(callback: Fun) { //中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
    isFunction(callback);
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(node: TreeNode, callback: Fun) { // 中序遍历私有方法，主函数
    if (node === null) return;
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key); // 为什么callback要写在中间，因为中序遍历所有的节点都需要先遍历输出左边的子节点，再输出自己的节点，再遍历输出右边的子节点，所以callback函数输出的就是从小到大的节点
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback: Fun) {//先序遍历是以优先于后代节点的顺序访问每个节点的。先序遍历的一种应用是打印一个结构化的文档。
    isFunction(callback);
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(node: TreeNode, callback: Fun) {
    if (node === null) return;
    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback: Fun) {//后序遍历则是先访问节点的后代节点，再访问节点本身。后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小。
    isFunction(callback);
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(node: TreeNode, callback: Fun) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}

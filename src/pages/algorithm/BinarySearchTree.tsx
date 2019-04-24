import * as React from 'react';
import BinarySearchTree from 'src/library/dataStructure/BinarySearchTree';

export default function (props) {
  const tree = new BinarySearchTree();
  var arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
  arr.forEach(o => tree.insert(o));
  tree.inOrderTraverse((key) => { console.log(key) });
  console.log(tree.min(),'min');
  console.log(tree.max(),'max');
  console.log(tree, 22)
  return (
    <div>

    </div>
  )
};

import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import LinkList from './LinkList';
import BinarySearchTree from './BinarySearchTree';
import { Button } from 'antd';
import './style.scss';

const { useState } = React;

export default function (props) {
  const { match } = props;
  console.log(props);
  return (
    <div>
      <div className="algorithm-nav">
        <Button><NavLink to={`${match.path}/LinkList`}>链表</NavLink></Button>
        <Button><NavLink to={`${match.path}/BinarySearchTree`}>二叉树</NavLink></Button>
      </div>
      <div>
        <Route path={`${match.path}/LinkList`} component={LinkList} />
        <Route path={`${match.path}/BinarySearchTree`} component={BinarySearchTree} />
      </div>

    </div>
  )
}
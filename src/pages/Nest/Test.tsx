import React, { Component } from 'react';
import { Button } from 'antd';
import api from 'api';

const { addCat, getCat } = api;

export default class NestTest extends Component {
  state = {
    id: 0,
    res: undefined,
  };

  add = () => {
    let { id } = this.state;
    ++id;
    addCat({ name: `a${id}`, age: 3, breed: 0 });
    this.setState({
      id,
    })
  }

  getAll = () => {
    getCat().then(res => {
      this.setState({
        res
      })
    })
  }

  render() {
    const { res } = this.state;
    return (
      <div>
        <Button onClick={this.add}>添加</Button>
        <Button onClick={this.getAll}>获取所有</Button>
        <p>{JSON.stringify(res)}</p>
      </div>
    )
  }
}
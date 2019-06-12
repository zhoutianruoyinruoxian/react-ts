import React, { Component } from 'react';
import Derived from './Derived';
import { Button } from 'antd';
export default class test extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  createMarkup() {
    const text = '<div style="color:red;">2222</div>';
    return {__html: 'First &middot; Second'};
  }

  render() {
    const { count } = this.state;
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()}>
        {/* 
        <p>You clicked {count} times</p>
        <Button className="aaa" onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</Button>
        <Derived count={count} /> */}
      </div>
    )
  }
}


import React, { Component } from 'react';
import { Input } from 'antd';
import { InputFormat } from '@';

export default class Derived extends Component<any> {
  state = {
    value: '',
  }
  // static getDerivedStateFromProps(nextProps, state) {
  //   console.log(333, nextProps, state)
  //   return null;
  // }

  a = () => {
    this.forceUpdate()
  }
  render() {
    const { count } = this.props;
    return (
      <div>{count}

        <input placeholder="aaa"
          prefix={'sss'}
          //  value={this.state.value}
          onChange={(e) => { console.log(e.nativeEvent); this.setState({ value: e.target.value }) }}
        />
        <Input placeholder="aaa"
          //  value={this.state.value}
          onChange={(e) => { console.log(e.nativeEvent); this.setState({ value: e.target.value }) }}
        />
      </div>
    );
  }
}
import React, { FC, Component } from 'react';
import {Input} from 'antd';

const Aaa: FC<any> = () => {
  return (
    <div>
      444
    </div>
  )
}

export default class AsyncComponent extends Component {
  DIV:any;
  componentDidMount(){
    console.log(this.DIV,7777)
  }
  render() {
    return (
      <Input ref={ref => this.DIV = ref}/>
    )
  }
};

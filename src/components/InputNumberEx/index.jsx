/**
 * @desc 将input输出的字符串转为数字(不能转数字就原样输出)(格式化成1,000,000格式)
 */

import React from 'react';
import { Input } from 'antd';
import { format } from 'util';
// import './style.scss';

export default (props) => {
  const { className, value, ...args } = props;
  const change = (o) => {
    const value = o.target.value;
    let val = parseInt(value.replace(/,/g, ''));
    val = isNaN(val) ? value : val;
    props.onChange && props.onChange(val);
  }
  const format = (value) => {
    if (!value) return value;
    let val = parseInt(value.toString().replace(/,/g, ''));
    if (isNaN(val)) return value;
    return val.toLocaleString();
  }
  return (
    <Input
      className={`${className || ''} input-number`}
      value={format(value)}
      {...args}
      onChange={change}
    />
  )
}
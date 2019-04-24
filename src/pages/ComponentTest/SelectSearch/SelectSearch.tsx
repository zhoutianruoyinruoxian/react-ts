import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { SelectProps, } from 'antd/lib/select';
import { SelectSearch as SelectX, SelectSearchObj } from '@';
import { Content, Section } from 'src/containers';


interface Options {
  text: string | number;
  id: number;
}
class SelectSearch extends SelectX<Options>{ }

export default class InputFormatTest extends Component {
  state = {
    mode: 'default',
    value: undefined,
    valueOne: undefined,
    valueTwo: undefined,
  }

  onChange: SelectProps['onChange'] = (value) => {
    this.setState({
      value,
    })
  }
  onChangeOne: SelectProps['onChange'] = (valueOne) => {
    this.setState({
      valueOne,
    })
  }

  CheckBox = (e) => {
    this.setState({
      mode: e.target.checked ? 'multiple' : 'default',
      // valueOne: undefined,
      // value: undefined,
    })
  }

  generatorData = (num: number): Options[] => Array(num).fill(null).map((o, i) => ({ text: 'text' + i, id: i }))

  render() {
    const { valueOne, valueTwo, value, mode } = this.state;
    
    return (
      <Content style={{ textAlign: 'left' }}>
        <div style={{ whiteSpace: 'pre', fontSize: '16px' }}>
          该组件用于支持搜索的，数据量较大的选择框<br></br>
        </div>
        <Checkbox onChange={this.CheckBox}>是否多选</Checkbox>
        <Section
          title="最简单的例子"
        >
          <label>选择index: </label>
          <SelectSearch
            mode={mode}
            value={value}
            allowClear
            defaultActiveFirstOption={false}
            style={{ width: '200px' }}
            options={this.generatorData(1000)}
            optionMap={{
              children: 'text',
              value: 'id',
              key: 'id',
            }}
            placeholder="请选择"
            onChange={this.onChange}
          />
          <span>选择出来的值：{JSON.stringify(value)}</span>
        </Section>
        <Section
          title="加强版的组件(SelectSearchObj)，类型变成输入T[]输出T（多选为T[]）而不再是单一的value"
        >
          <label>选择index: </label>
          <SelectSearchObj
            value={valueOne}
            mode={mode}
            allowClear
            defaultActiveFirstOption={false}
            style={{ width: '200px' }}
            options={this.generatorData(1000)}
            optionMap={{
              children: 'text',
              value: 'id',
              key: 'id',
            }}
            placeholder="请选择"
            onChange={this.onChangeOne}
          />
          <span>选择出来的值：{JSON.stringify(valueOne)}</span>
        </Section>
      </Content>
    )
  }
}

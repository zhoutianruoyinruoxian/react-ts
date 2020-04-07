import React, { Component } from 'react';
import { Form, Input, Button, Col } from 'antd';
import Check from './Check';
import { BindForm } from '@';
const { Item } = BindForm;

export default class FormTest extends Component<any, any> {
  form: any = React.createRef();
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.form, 2222)
  }
  componentDidMount() {
    console.log(this.form, 2111)
  }

  valid = (form) => {
    // const { form } = this.props;
    console.log(form, 77666)
    form.validateFieldsAndScroll((errors, values) => {
      console.log(errors, values, 11111)
    });
  }

  add = form => {
    const list = [{ a: 1 }, { a: 4 }];
    form.setFieldsValue({ list })
  }
  formOnChange = (changedValues, allValues) => {
    console.log(changedValues, allValues, 777)
  }
  render() {
    return (
      <BindForm
        ref={this.form}
        onChange={this.formOnChange}
      >{
          (form) => {
            const list = form.getFieldValue('list') || [];
            // const list = [1,2,3,4];
            console.log(form.getFieldsValue(), list, 12312)
            return (
              <>
                <Item
                  form={form}
                  dataIndex="a"
                  label="测试"
                  required
                  rules={[{
                    max: 3,
                    message: '不能大于3个长度'
                  },
                  {
                    pattern: /^\d/,
                    message: '正则不通过'
                  }]}
                  decorator={
                    <Input />
                  }
                >

                </Item>
                {/* <Col span={24}> */}
                <Item
                  form={form}
                  dataIndex="b"
                  label="测试"
                  required
                  rules={[{
                    max: 3,
                    message: '不能大于3个长度'
                  },
                  {
                    pattern: /^\d/,
                    message: '正则不通过'
                  }]}
                  decorator={
                    <Input />
                  }
                >

                </Item>
                {/* <Item
                  form={form}
                  dataIndex="list"
                  label="测试"
                  required
                  initialValue={null}
                  decorator={
                    <Input type="hidden" />
                  }
                > */}
                  {list.map((o, index) => (
                    <Item
                      key={index}
                      form={form}
                      dataIndex={`list[${index}].a`}
                      label={`list.${index}`}
                      required
                      decorator={
                        <Input />
                      }
                    />))}
                {/* </Item> */}
                {/* </Col> */}
                <Button onClick={() => this.add(form)}>添加</Button>
                <Button onClick={() => this.valid(form)}>验证</Button>
                {/* <Check /> */}
              </>
            )
          }
        }
      </BindForm>
    )
  }
}

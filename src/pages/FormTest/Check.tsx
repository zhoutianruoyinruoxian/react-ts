import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const { Item } = Form;
class FormTest extends Component<any, any> {
  state = {
    initialValue: '12',
  }
  componentWillReceiveProps() {
    // console.log(22222)
  }
  change = () => {
    this.setState({
      initialValue: '4'
    })
  }
  clear = () => {
    this.props.form.resetFields(['testInput1','testInput2'])
    // this.props.form.setFieldsValue({ testInput: undefined })
    console.log(this.props.form.getFieldValue('testInput1'),222)
  }
  render() {
    const { initialValue } = this.state;
    const { form } = this.props;
    return (
      <>
        <Form>
          <Item
            label="测试"
          >{
              form.getFieldDecorator('testInput1', {
                initialValue,

              })(
                <Input />)
            }
          </Item>
          <Item
            label="测试"
          >{
              form.getFieldDecorator('testInput2', {
                initialValue,

              })(
                <Input />)
            }
          </Item>
        </Form>
        <Button onClick={this.change}>修改默认值</Button>
        <Button onClick={this.clear}>修改默认值</Button>
      </>
    )
  }
}

export default Form.create()(FormTest)

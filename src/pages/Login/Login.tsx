import * as React from 'react';
const { useState, useEffect } = React;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './style.scss';

const { Item } = Form;
interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

type Props = {
  onClick(e: MouseEvent): void;
  color: string;
};

const initialState = {
  clicksCount: 0,
  fff: 55
};

type State = Readonly<typeof initialState>;

class LoginForm extends React.Component<UserFormProps, State>{

  readonly state: State = initialState;

  componentDidMount() {
    interface IA {
      name: string;
      age: number;
      b(): void;
      // d():void;
    }
    class A implements IA {
      name: string;
      age = 6;
      constructor(name: string) {
        this.name = name;
      }
      private a() {
        console.log(this)
      }
      b() {
        console.log(this, 111)
      }
      c() {
        this.a()
      }
    }
    class B {
      d() {

      }
    }
    let a = new A('55555');
    // // let b = new B();
    // // a = b
    // A.b()
    let b: IA = {
      name: "zh",
      age: 66,
      b() {
        console.log('222')
      },

      // d(){
      //   console.log('222')
      // }
    }

    console.log(a, b)

    interface ClockConstructor {
      new(hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
      tick();
    }


    class DigitalClock implements ClockInterface {
      constructor(h: number, m: number) { }
      tick() {
        console.log("beep beep");
      }
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new ctor(hour, minute);
  }
    const K: ClockInterface = createClock(DigitalClock,11, 22)

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-section">
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
        >
          <Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </Item>
          <Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Item>
          <Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            <a href="">立即注册</a>
          </Item>
        </Form>
      </div>
    );
  }
}
const Login = Form.create({})(LoginForm);
export default Login;
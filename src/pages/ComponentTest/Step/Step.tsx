import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { Step } from '@';
import { Content, Section } from 'src/containers';


export default class StepTest extends PureComponent {
  state = {
    step: 0,
    data: ['步骤1', '步骤2', '步骤3', '4', '5']
  }

  prev = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }

  next = () => {
    this.setState({
      step: this.state.step + 1,
    })
  }

  render() {
    const { data, step } = this.state;
    return (
      <Content style={{ textAlign: 'left' }}>
        <Section
          title="一个步骤条"
        >
          <Step
            step={step}
            data={data}
          />
          <Button type="primary" disabled={step == 0} onClick={this.prev}>上一步</Button>
          <Button type="primary" disabled={step == data.length - 1} onClick={this.next}>下一步</Button>
        </Section>
      </Content>
    )
  }
}
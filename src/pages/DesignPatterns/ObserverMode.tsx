import React, { Component, PureComponent } from 'react';
import { Checkbox, Button } from 'antd';
import { SelectProps, } from 'antd/lib/select';
import { SelectSearch as SelectX, SelectSearchObj } from '@';
import { Content, Section } from 'src/containers';
import { ObserverList, extend, Subject } from 'src/library/DesignPatterns/ObserverMode';

export default class ObserverMode extends PureComponent {

  componentDidMount() {
    const controlCheckbox = document.getElementById("mainCheckbox");
    const addBtn = document.getElementById("addNewObserver");
    const container = document.getElementById("observersContainer");
    extend(new Subject(),controlCheckbox);
  }

  render() {
    return (
      <Content
        style={{ textAlign: 'left' }}
      >
        <div>
          <h1>观察者模式</h1>
          <p>观察者模式是这样一种设计模式。一个被称作被观察者的对象，维护一组被称为观察者的对象，这些对象依赖于被观察者，
          被观察者自动将自身的状态的任何变化通知给它们。<br></br>
            当一个被观察者需要将一些变化通知给观察者的时候，它将采用广播的方式，这条广播可能包含特定于这条通知的一些数据。<br></br>
            当特定的观察者不再需要接受来自于它所注册的被观察者的通知的时候，被观察者可以将其从所维护的组中删除。</p>
        </div>
        <Section
          title="最简单的例子"
        >
          <button id="addNewObserver">Add New Observer checkbox</button>
          <input id="mainCheckbox" type="checkbox" />
          <div id="observersContainer"></div>
        </Section>

      </Content>
    )
  }
}
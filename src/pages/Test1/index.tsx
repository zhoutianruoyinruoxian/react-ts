import React, { Component } from 'react';
import './style.scss';

export default class Test1 extends Component {

  componentDidMount() {
    abstract class Ani {
      eat() {
        console.log('eating...')
      }
      sound() { }
    }
    class Dog extends Ani {
      sound() {
        console.log('汪汪汪...')
      }
    }
    class Cat extends Ani {
      sound() {
        console.log('miaomiaomiao...')
      }
    }
    function aniSound(ani: Ani) {
      ani.sound();
    }
    console.log(new Dog(), 111)
    aniSound(new Dog())
    aniSound(new Cat())

    function A() {
      this.a = 1
    }
    A.prototype.b = function () {
      console.log(2)
    }

    /**
     * @desc 自定义一个`_new`方法，实现了`new`的功能
     */
    function _new(constructor: Function, ...arg: any) {
      let target: any = {};
      const result = constructor.apply(target, arg);
      target.__proto__ = constructor.prototype;
      return (typeof result === 'object' || typeof result === 'function') ? result : target;
    }

    console.log(_new(A), 333)

    function cloneDeep(obj: object) {
      let target = {};
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (Object.prototype.toString.call(obj[i]) === '[object Object]') {
            target[i] = cloneDeep(obj[i])
          } else {
            target[i] = obj[i]
          }
        }
      }
      return target;
    }
    let demo: any = {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: {
          d: 4
        }
      }
    }
    const aaa = cloneDeep(demo);
    demo.c.c = 5;
    console.log(aaa, demo, 333)
  }

  render() {
    return (
      <div className="bg" >

        {/* <div className="test1"> */}
        {/* zhoutian
    </div> */}
      </div>
    )
  }
}
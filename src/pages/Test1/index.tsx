import * as React from 'react';
import './style.scss';

export default function Test1(props) {
  //   function a () {
  //     for (let i = 0; i < 5; i++) {
  //         setTimeout(function () {
  //             console.log(i)
  //         }, 0)
  //         console.log(i)
  //     }
  // }

  // a()

  const id = {
    'i': 0,
    'have': 0,
    'a': 0,
    book: 0,
    good: 0,
  };

  function check(string, name) {
    console.time(name);
    const res = string.split(' ').every(o => id[o]);
    console.log(res);
    return res;

    console.timeEnd(name);
  }
  check('I have a book', 'short')
  check('I have a book I have a book I have a book I have a book I have a book I have a book I have a book I have a book I have a book I have a book I have a book I have a book', 'long')
  return (
    <div className="bg">

      {/* <div className="test1"> */}
      {/* zhoutian
    </div> */}
    </div>
  )
}
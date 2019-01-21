import * as React from 'react';

import test from './test';

console.log(test('444'), 333)
const { useState, useEffect } = React;

export default function () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(2);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


// interface Fooprop {
//   name: string;
//   x: number;
//   y: number;
// }
// // declare function Another(prop: { name: string });



// export default function Test(props: Fooprop) {

//   return (<div>{test}</div>);
// }
import React, { useState } from 'react';
import test from './test.ts';

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

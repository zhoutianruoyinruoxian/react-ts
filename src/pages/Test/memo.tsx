import React from 'react';

function test(props) {
  return (<div>{props.title}</div>)
}

export default React.memo(test);
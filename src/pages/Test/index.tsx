import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import loadable from '@loadable/component';
import './style.scss';
import ProxyTest from './ProxyTest';

const AsyncComponent = React.lazy(() => import('./AsyncComponent'));
// console.log(AsyncComponent, 444)
export default function Test() {
  const InputEL = useRef(null);
  const [a, seta]: [any, any] = useState({ a: 1 });

  useEffect(() => {
    async function a() {
      console.log(1);
      // await console.log(2);
      console.log(3);
      // await new Promise((resolve)=>{console.log(333),resolve()})
      console.log(5);
    }
    function b() {
      console.log('start')
      a();
      console.log('end')
    }
    b()
  }, [])

  const handleClick = () => {
    console.log(InputEL,333)
    InputEL.current.focus()

  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProxyTest/>
        <AsyncComponent />
        <Input ref={InputEL} />
        <Button onClick={handleClick}>确定</Button>
      </Suspense>
    </div>
  )
}

// export default class Test extends Component<any, any> {
//   state = {
//     a: 1,
//   }

//   componentDidMount() {
//     this.setState({
//       a: 2
//     })
//   }
//   componentDidUpdate() {
//     this.setState({
//       a: 3
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.a}
//       </div>
//     )
//   }
// }
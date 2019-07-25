import React, { FC, useEffect } from 'react';
import api from 'api';
const ProxyTest: FC<any> = () => {

  useEffect(() => {
    api.company().then(res => {

    })
    api.api().then(res => {

    })
  }, [])

  return (<div>proxy</div>)
}

export default ProxyTest;
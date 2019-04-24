import * as React from 'react';
// import one from '../../utils/algorithm/one';
// import two from '../../utils/algorithm/two';
import LinkedList from 'src/library/dataStructure/linkList';

export default class Home extends React.Component {
  render() {
    var list = new LinkedList();
    list.append(15);
    list.append(10);
    console.log(list)
    var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    return (
      <div>

        <div>{arr.join('-')}</div>
        {/* <div>one:{one(arr).join('-')}</div>
        <div>two:{two(arr).join('-')}</div> */}

      </div>
    )
  }
}
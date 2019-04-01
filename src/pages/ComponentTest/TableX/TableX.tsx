import React, { Component } from 'react';
import { TableX } from '@';
import { TableProps, ColumnProps, SorterResult, TableCurrentDataSource } from 'antd/lib/table';


interface Item {
  a: number,
  b: string
}


export default class TableXTest extends Component {


  render() {
    const columns: ColumnProps<Item>[] = [
      {
        key: 'a',
        dataIndex: 'a',
        title: '测试列',
        sorter: (a, b) => a.a - b.a,
      },
      {
        key: 'b',
        dataIndex: 'b',
        title: '作者',
        filters: [
          {
            text: '开启',
            value: '2'
          },
          {
            text: '关闭',
            value: '4'
          }
        ]
      }
    ]
    const list: Item[] = Array(20).fill(null).map((o, i) => ({ a: i, b: 'zt' }))
    return (
      <TableX
        dataSource={list}
        columns={columns}
      />
    )
  }
}

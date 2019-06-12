/**
 * @desc 
 * @api `open` 为同步方法
 * @api `onCancel`  为异步方法
 * @api `onOk`  为异步方法（适用于发送请求，完成后再关闭窗口的情况）
 * `confirmLoading` 参数由外部传入
 */


import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

const initState = {
  visible: false,
}

interface IModalProps extends ModalProps {
}

type Istate = Readonly<typeof initState>
type Iprops = Readonly<IModalProps>

export default class ModalX extends PureComponent<Iprops, Istate>{
  readonly state: Istate = initState;
  Modal: Modal;

  static defaultProps: IModalProps = {
    maskClosable: true,
    closable: true,
    centered: true,
  }

  open = () => {
    this.setState({
      visible: true,
    })
  }

  close = () => {
    this.setState({
      visible: false,
    })
  }

  onCancel = async (e: React.MouseEvent<any, MouseEvent>) => {
    const { onCancel } = this.props;
    onCancel && await onCancel(e);
    this.setState({
      visible: false,
    })
  }

  onOk = async (e: React.MouseEvent<any, MouseEvent>) => {
    const { onOk } = this.props;
    onOk && await onOk(e);//如果ok操作失败（不如ajax请求失败，则返回promise.reject状态，后面的步骤就不会执行）
    this.setState({
      visible: false,
    })
  }

  render() {
    const { visible } = this.state;
    const { ...arg } = this.props;
    return (
      <Modal
        {...arg}
        ref={ref => this.Modal}
        visible={visible}
        onCancel={this.onCancel}
        onOk={this.onOk}
      />
    )
  }
}
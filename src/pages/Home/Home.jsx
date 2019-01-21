import React, { Component } from 'react';
import 'src/redux';
import './style.scss';
import { connect } from 'react-redux';
import { mapMutations } from 'src/redux';

const mapStateToProps = (state, router) => {
  return {
    title: state.app.title,
  };
};

const mapDispatchToProps = () => {
  return {
    changeTitle: mapMutations.app.changeTitle,
  };
};

// const mapDispatchToProps2 = mapDispatchToPropsInit((mutations)=>{

// });
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      // title: store.getState().title,
    };
  }

  componentDidMount() {

  }

  click = () => {
    this.props.changeTitle('4444');
  }
  click2 = () => {
    // this.props.changeTitle('哈哈哈');
  }

  render() {
    const { title } = this.props;
    return (
      <div className="home bip">
        <p>{title}</p>
        <button onClick={this.click}>点击</button>
      </div>
    );
  }
}

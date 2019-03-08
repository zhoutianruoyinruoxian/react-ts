import * as React from 'react';
import 'src/redux';
import './style.scss';
import { connect } from 'react-redux';
import { mapMutations } from '../../redux';

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
 class Home extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      // title: store.getState().title,
    };
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(){
console.log(45454545)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

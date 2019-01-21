import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layout-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

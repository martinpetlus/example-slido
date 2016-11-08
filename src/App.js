import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;

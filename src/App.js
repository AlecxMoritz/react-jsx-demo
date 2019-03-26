import React, { Component } from 'react';
import './App.css';

const styles = {
    backgroundColor : 'purple'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      title : 'React Is Cool'
    }
  }

  handleClick = () => {
    this.setState({
      title : 'React is Awesome!'
    })
  }

  render() {
    const paragraph = <p>React React React React React React React React</p>

    return (
      <div style={ styles } className="div">
          <h2 className="app">{ this.state.title }</h2>
          <hr /> 
          <button onClick={ this.handleClick }>Click Me!</button>
          { paragraph }
      </div>
    );
  }
}

export default App;
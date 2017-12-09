import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component added to DOM : Mounting
// Component removed from DOM : Unmounting
class App extends Component{
  constructor(){
    super();
  }
  render(){
    return <h1>Hello There!</h1>
  }

}

export default App;

import React, { Component } from 'react';

class NestedDateAndComponentsAccess extends Component{
  render(){
    return <Button>I <Heart /> React</Button>; // This Button is a Component
  }
}
// Accessing nested data (Here: I, React) and Components(Here: <Heart />) using props.children
const Button = (props) => <button>{props.children}</button>

class Heart extends Component{
  render(){
    return <span>&hearts;</span>
  }
}

export default NestedDateAndComponentsAccess;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StateChange extends Component{
  constructor(){
    super();
    this.state = {
      txt: 'This is the state text'
    }
  }
  update( e ){ // e here is an event object
    this.setState({txt: e.target.value});
  }
  render(){
    return (
      <div>
      <h1>{this.state.txt}</h1>
      <input type="text" onChange={this.update.bind(this)}/>
      </div>
    );
  }
}

export default StateChange;

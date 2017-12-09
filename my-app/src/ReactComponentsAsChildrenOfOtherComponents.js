import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactComponentsAsChildrenOfOtherComponents extends Component{
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
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

// Stateless Function
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default ReactComponentsAsChildrenOfOtherComponents;

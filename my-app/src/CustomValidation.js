import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomValidation extends Component{
  render(){
    return <Title text="Custom Validation Check " />
  }
}
const Title = (props) => <h1> Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`Missing ${propName}`);
    }
    if(props[propName].length <6){
      return new Error (`${propName} was too short`)
    }
  }
}

export default CustomValidation;

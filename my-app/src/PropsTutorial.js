import React, { Component } from 'react';
import PropTypes from 'prop-types'; // prop-types are defined outside React from React15 onwards

class PropsTutorial extends Component{
  render(){
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

// Defining properties that we will be looking in our Components by using PropTypes
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

// Setting default props value
App.defaultProps = {
  txt: "This is the default Text",
  cat: 2
}

export default PropsTutorial;

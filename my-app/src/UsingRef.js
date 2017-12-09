import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UsingRef extends Component{
  constructor(){
    super();
    this.state = {a: 'A initial State',
                  b: 'B initial State'}
  }
  update(){
    this.setState({ // ref in general returns the node which we are referencing
      //a: ReactDOM.findDOMNode(this.a).value, // It works only if there is single field being returned by render function
      a: this.a.refs.input.value,
      b: this.b.value // If ref="b" is used, this.refs.b.value
    });
  }
  render(){
    return (
      <div>
        <Input
        //ref="a" //Normal ref
        ref = { component => this.a = component } // Using ref as callback for component
        update={this.update.bind(this)} />
        {this.state.a}
        <hr/>
        <input
        type="text"
        //ref="b" // Normal ref
        ref = { node => this.b = node} // Using ref as callback for node
        onChange={this.update.bind(this)}/>
        {this.state.b}

      </div>
    )
    }
  }

class Input extends Component{
  render(){
    return <div>
            <input
            type="text"
            ref="input" // No need for this if single element is being returned
            //ref={ node => this.input = node}// If this is used, then a: this.a.input.value
            onChange={this.props.update}/>
           </div>
  }
}

export default UsingRef;

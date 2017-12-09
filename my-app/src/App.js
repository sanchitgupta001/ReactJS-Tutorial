import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component added to DOM : Mounting
// Component removed from DOM : Unmounting
class App extends Component{
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  render(){
    console.log('render');
    return < button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  // componentWillReceiveProps (When component receives new props)
  // shouldComponentUpdate (Before rendering, after receiving new props or state)
  // componentWillUpdate (Before rendering, after receiving new props or state)
  // componentDidUpdate (After component's updates are flushed to DOM)
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
}

class Wrapper extends Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;

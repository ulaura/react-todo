import React, { Component } from 'react';
import Input from './Input';

class ToDo extends Component {
  state = {
    value: ''
  };

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Silly ToDo App</h1>
        <p>Enter an Item To Do Here:</p>
        <Input value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default ToDo;
import React, { Component } from 'react';
import Input from './Input';

class ToDo extends Component {

  render() {
    return (
      <div>
        <h1>Silly ToDo App</h1>
        <p>Enter an Item To Do Here:</p>
        <Input />
      </div>
    );
  }
}

export default ToDo;
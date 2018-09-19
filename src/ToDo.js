import React, { Component } from 'react';
import Input from './Input';
import ListItems from './ListItems';

class ToDo extends Component {
  state = {
    value: '',
    itemToDo: []
  };

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    this.setState((prevState) => {
      return {itemToDo: prevState.itemToDo.concat(this.state.value)}
      // callback to make console.log run right after setState with
      // new data in itemToDo
    }, () => console.log(this.state.itemToDo));

    event.preventDefault();
  }

  handleClear = (event) => {
    this.setState({itemToDo: []});
  }

  render() {
    return (
      <div>
        <h1>Silly ToDo App</h1>
        <p>Enter an Item To Do Here:</p>
        {/* TODO: Clear the input field after clicking submit */}
        <Input 
          value={this.state.value} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />
        <ListItems 
          items={this.state.itemToDo} 
          handleClear={this.handleClear}
        />

      </div>
    );
  }
}

export default ToDo;
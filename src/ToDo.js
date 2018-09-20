import React, { Component } from 'react';
import './ToDo.css';
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
    event.preventDefault();
    this.setState((prevState) => {
      return {value: '', itemToDo: prevState.itemToDo.concat(this.state.value)}
      // callback to make console.log run right after setState with
      // new data in itemToDo and to see that value is back to ''.
    }, () => console.log('item: ', this.state.itemToDo, "value: ", this.state.value));
  }

  handleClear = (event) => {
    this.setState({itemToDo: []});
  }

  render() {
    return (
      <div className="container">
        <div className="innerContents">
          <h1>Silly To-Do App</h1>
          <p>Enter an Item To Do Here:</p>
          {/* Remember to pass value as a prop to the component Input 
              so it actually clears when you submit
          */}
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
      </div>
    );
  }
}

export default ToDo;
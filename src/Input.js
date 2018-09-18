import React, { Component } from 'react';

class Input extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default Input;
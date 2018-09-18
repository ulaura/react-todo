import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" onChange={this.props.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default Input;
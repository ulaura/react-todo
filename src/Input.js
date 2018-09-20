import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {/* Remember to pass value as a prop to the component Input 
            so it actually clears when you submit
        */}
        <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default Input;
import React, { Component } from 'react';

class Item extends Component {
  // this component has internal state to
  // deal with controlling the check box
  state = {
    checked: false
  }

  handleChecked = (event) => {
    this.setState({checked: event.target.checked})
  }

  render() {
    const item = this.props.item;
    return (
      <div>
        <span style=
          {this.state.checked
            ? {textDecoration: "line-through"} 
            : null 
          }>
          {item}
        </span>
        <input 
          type="checkbox" 
          checked={this.state.checked} 
          onChange={this.handleChecked}
        />
      </div>
    );
  }
}

export default Item;
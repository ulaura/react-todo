import React, { Component } from 'react';

class Item extends Component {
  // this component has internal state to
  // deal with controlling the checkbox
  state = {
    checked: false
  }

  handleChecked = (event) => {
    this.setState({checked: event.target.checked})
  }

  render() {
    const item = this.props.item;
    return (
      <div className="generatedList">
        <span 
          className="item"
          style=
          {this.state.checked
            ? {textDecoration: "line-through"} 
            : null 
          }>
          {item}
        </span>
        <span className="checkbox">
          <input 
            type="checkbox" 
            checked={this.state.checked} 
            onChange={this.handleChecked}
          />
        </span>
      </div>
    );
  }
}

export default Item;
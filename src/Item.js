import React, { Component } from 'react';

class Item extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        {item}
        <input type="checkbox" />
      </div>
    );
  }
}

export default Item;
import React, { Component }from 'react';
import Item from './Item';

class ListItems extends Component {
  render() {
    const items = this.props.items;
    const list = items.length > 0 ? (
      items.map((item, index) => {

        return (
         <Item key={index} item={item} />
        );
      })
    ) : null;
  
    return (
      <div>
        {list}
        {/* If a list is produced, this clear button will appear */}
        {list ? <button onClick={this.props.handleClear}>Clear</button> : null}
      </div>
    );
  }

}

export default ListItems;
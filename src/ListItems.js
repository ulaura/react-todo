import React, { Component }from 'react';
import Item from './Item';

class ListItems extends Component {
  render() {
    const items = this.props.items;
    const list = items.length > 0 ? (
      items.map((item, index) => {
        return <Item key={index} item={item} />
      })
    ) : null;
  
    return (
      <div>
        {/* If list exists, this compenent will render */}
        {list 
          ? (
            <div className="listItems">
              <div className="listHeader">
                <span className="itemHeader">Item:</span>
                <span className="doneHeader">Done?</span> 
              </div>
              <div>
                <span>{list}</span>
              </div>
              <button 
                className="clearButton"
                onClick={this.props.handleClear}
              >
                Clear
              </button>
            </div>
          ) : null}
      </div>
    );
  }

}

export default ListItems;
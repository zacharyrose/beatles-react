  /*import React from 'react';

class ShoppingCart extends React.Component {


  getInitialState: function() {

    return {
      items: [],
      total: 0,
      shipping: 0
    };
  },

  addItem: function(e, item) {
    this.state.items.push(item);
    this.forceUpdate();

    this.countTotal();
  },

  removeItem: function(e, itemId) {
    var itemIndexInArray;

    this.state.items.some(function(item, index) {
      if(item.id === itemId) {
        itemIndexInArray = index;
        return true;
      }
    });

    this.state.items.splice(itemIndexInArray, 1);
    this.forceUpdate();

    this.countTotal();
  },

  countTotal: function() {
    var total = 0;

    this.state.items.forEach(function(item, index) {
      total += item.price;
    });

    this.setState({
      total: total
    })
  },



}
*/

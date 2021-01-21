import React, { Component } from 'react';
import { render } from 'react-dom';
import Order from '../../components/Order/Order';

class Orders extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <>
          <Burger />
          <div>Build Controls</div>
        </>
      </div>
    );
  }
}

import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBulder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <Burger />
      </Aux>
    );
  }
}

export default BurgerBulder;

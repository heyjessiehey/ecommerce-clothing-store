import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemCount } from "../redux/cart/cart.selectors";

import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <Shoppingicon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  // passing a whole reducer state into the selector
  itemCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

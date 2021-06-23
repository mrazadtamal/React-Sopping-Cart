import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const coursePrice = cart.reduce(
    (sum, course) => sum + Number(course.price),
    0
  );
  const tax = coursePrice / 10;
  return (
    <div>
      <h1>Total Item : {cart.length}</h1>
      <h3>Price : {coursePrice}</h3>
      <h3>Tax : {tax}</h3>
      <h3>Grand Total : {coursePrice + tax}</h3>
      <button>Place Order</button>
    </div>
  );
};

export default Cart;

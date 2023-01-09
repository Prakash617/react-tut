import React from "react";
import Cart from "./Cart";

const CardLayout = () => {
  return (
    <div>
      <div className="card container">
        <h5 className="card-header">Cart Order</h5>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />

        <div className="d-flex justify-content-around">
          <div >
            <button type="button" className="btn btn-outline-danger">
              Empty
            </button>
          </div>
          <div>
            <p className="text-success">$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;

import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product: { id, img, title, price } }) => {
  // const {img, title, amount} = props.product;
  // const displayalert = (message,e) => {
  //   alert(`${message} I am alerts ${e.type}`);
  
  // };
  //   console.log('props',title)
  //   console.log({.title})
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link className="nav-link p-0 m-0"  to={`product/${id}`}>
        <img src={img} className="card-img-top h-60  w-full" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-black">{title}</h5>
          <p className="card-text text-danger">{price}</p>
          <span className="text-danger text-decoration-line-through ">
            Rs.455
          </span>
          <span className="fs-6 fw-lighter text-secondary  mx-3">-37%</span>
          {/* <a
          href="/"
          onClick={(e) => displayalert("hello",e )}
          className="btn btn-primary"
        >
          Show alert
        </a> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

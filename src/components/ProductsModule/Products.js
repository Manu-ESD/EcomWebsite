import React from "react";
import { ReactDOM } from "react";
import "./Products.css";

function Products() {
  return (
    <>
      <div className="ProductCard">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85mJDfjNGzqbQYsutwUfvjMvAHKDfSMx7QA&usqp=CAU" />
        <h3>Product Name</h3>
        <p>Product details and description</p>
        <div className="Buttonbox">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Products;

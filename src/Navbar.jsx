import React from "react";
import "bootstrap";
import { CartFill } from "react-bootstrap-icons";
import CartItems from "./Cartitems";

const Navbar = ({ handleRemoveitem, total, cartitem }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <div className="navbar-brand">Shopping Cart</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">
                Home
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">About</div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <div className="dropdown-item">All Products</div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="dropdown-item">Popular Items</div>
                </li>
                <li>
                  <div className="dropdown-item">New Arrivals</div>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <div
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="bi-cart-fill me-1">
                <CartFill />
              </i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartitem.length}
              </span>
            </div>
            <CartItems
              handleRemoveitem={handleRemoveitem}
              total={total}
              cartitem={cartitem}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

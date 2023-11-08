import { StarFill } from "react-bootstrap-icons";

const Cart = ({cart,addCart}) => {

    
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className={
            cart.sale ? "badge bg-dark text-white position-absolute" : ""
          }
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {cart.sale}
        </div>
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={cart.img} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{cart.title}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div>{cart.rating ? <StarFill /> : ""}</div>
              <div>{cart.rating ? <StarFill /> : ""}</div>
              <div>{cart.rating ? <StarFill /> : ""}</div>
              <div>{cart.rating ? <StarFill /> : ""}</div>
              <div>{cart.rating ? <StarFill /> : ""}</div>
            </div>
            {/* <!-- Product price--> */}
            <span
              className={
                cart.oldprice ? "text-muted text-decoration-line-through" : ""
              }
            >
            {cart.oldprice}
            </span>
            {cart.newprice}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a onClick={addCart} className="btn btn-outline-dark mt-auto">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import Cartlists from "./Cartlists";


const CartItems = ({handleRemoveitem,total,cartitem}) => {


  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Added Cart Items
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {
            cartitem.length > 0 ? <div className="modal-body">
                <ol className="list-group list-group-numbered">
            {
              cartitem.map((item,index)=>{
                 return <Cartlists handleRemoveitem={handleRemoveitem} key={index} item={item}/>
                 
              })
            }</ol>
            </div> : <h3 className="text-center">No items in cart</h3>
          }
          <div className="modal-footer"> <h4>Total : &#36; {total}</h4>  </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

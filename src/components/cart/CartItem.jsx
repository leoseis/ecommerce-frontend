import React from "react";

const BASE_URL = "http://127.0.0.1:8001"; // Change if your backend is hosted elsewhere

const CartItem = ({ item }) => {
  const product = item.product || {}; // safely handle missing product
  const imageUrl = product.image
    ? `${BASE_URL}${product.image}`
    : "/placeholder.png";
  const name = product.name || "Unnamed Product";
  const price = product.price || 0;
  const quantity = item.quantity || 1;

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-3 text-center">
          <img
            src={`${BASE_URL}${product.image}`}
            alt={name}
            className="img-fluid rounded-start"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            <p className="card-text mb-1">
              <strong>Price:</strong> ₦{price.toLocaleString()}
            </p>
            <p className="card-text mb-1">
              <strong>Quantity:</strong> {quantity}
            </p>
            <p className="card-text">
              <strong>Total:</strong> ₦{(price * quantity).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

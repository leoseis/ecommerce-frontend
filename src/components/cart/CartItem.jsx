import React, { useState } from 'react';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  // Example static item (replace later with props)
  const item = {
    product: {
      name: "Sample Product",
      price: 50,
      image: "https://via.placeholder.com/80",
    },
  };

  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // simulate update delay
  };

  const handleRemove = () => {
    alert("Removed from cart");
  };

  return (
    <div className="col-md-12">
      <div
        className="cart-item d-flex align-items-center mb-3 p-3"
        style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}
      >
        <img
          src={item.product.image}
          alt="Product"
          className="img-fluid"
          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
        />
        <div className="ms-3 flex-grow-1">
          <h5 className="mb-1">{item.product.name}</h5>
          <p className="mb-0 text-muted">${item.product.price}</p>
        </div>

        <div className="d-flex align-items-center">
          <input
            type="number"
            min="1"
            className="form-control me-3"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: '70px' }}
          />
          <button
            className="btn btn-sm mx-2"
            onClick={handleUpdate}
            style={{ backgroundColor: '#4b3bcb', color: 'white' }}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

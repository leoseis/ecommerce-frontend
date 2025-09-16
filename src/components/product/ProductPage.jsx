import ProductPagePlaceHolder from "./ProductPagePlaceHolder";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../api";
import api from "../../api";
// import { toast } from "react-toastify";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inCart, setInCart] = useState(false);

  const cart_code = localStorage.getItem("cart_code");

  // Fetch product details
  useEffect(() => {
    setLoading(true);
    api.get(`/product_detail/${slug}/`)
      .then((res) => {
        setProduct(res.data);
        setSimilarProducts(res.data.similar_products);
        setLoading(false);

        // Check if product is already in cart
        if (res.data.id) {
          api
            .get(`product_in_cart?cart_code=${cart_code}&product_id=${res.data.id}`)
            .then((res) => {
              setInCart(res.data.product_in_cart);
            })
            .catch((err) => console.log(err.message));
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [slug, cart_code]);

  // Add item to cart
  function add_item() {
    if (!product?.id) {
      console.error("Product ID not available yet");
      // toast.error("Product not loaded yet");
      return;
    }

    const newItem = { cart_code: cart_code, product_id: product.id };

    api.post("add_item/", newItem)
      .then((res) => {
        console.log(res.data);
        setInCart(true);
        // toast.success("Product added to cart");
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        // toast.error("Failed to add item");
      });
  }

  if (loading) {
    return <ProductPagePlaceHolder />;
  }

  return (
    <div>
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`${BASE_URL}${product.image}`}
                alt={product.name || "Product"}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span>{`$${product.price}`}</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={add_item}
                  disabled={inCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Product added to cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={similarProducts} />
    </div>
  );
};

export default ProductPage;

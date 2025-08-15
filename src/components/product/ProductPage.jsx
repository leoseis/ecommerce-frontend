import ProductPagePlaceHolder from "./ProductPagePlaceHolder"
import RelatedProducts from "./RelatedProducts"
import { BASE_URL } from "../../api"
import api from "../../api"




const ProductPage = () => {
  return (
  <div>
    <ProductPagePlaceHolder/>
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                // src={`${BASE_URL}${product.image}`}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder"></h1>
              <div className="fs-5 mb-5">
                <span>{`$`}</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick
                  disabled
                >
                  <i className="bi-cart-fill me-1"></i>
                  "Add to cart"
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts  />
    </div>
  )
}

export default ProductPage

import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../api"; // adjust the path based on your structure


// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8001";

const HomeCard = ({ product }) => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
      <Link to={`/products/${product.slug}`}>
        <div className={styles.card}>
          <div className={styles.cardImgWrapper}>
            <img src={`${BASE_URL}${product.image}`} 
            className={styles.cardImgTop}
            alt={product.name} />
          </div>
          <div className={styles.cardBody}>
            <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
            <h6 className={styles.cardText}>{`N${product.price}`}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;

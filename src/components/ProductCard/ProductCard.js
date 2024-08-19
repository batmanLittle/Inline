import "./ProductCard.css";
import like from "../../images/like.svg";
import rating from "../../images/rating.svg";
import basket from "../../images//basket.svg";
import plus from "../../images//plus.svg";
import basketMobile from "../../images//basket-mobile.svg";

function ProductCard({ product }) {
  return (
    <div className="product-card" key={product.id}>
      <img
        className="product-card__img"
        alt={product.alt}
        src={product.image}
      />
      <button className="product-card__button-like">
        <img className="product-card__img" alt="лайк" src={like} />
      </button>
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p className="product-card__info-supplier">{product.supplier}</p>
        <h3 className="product-card__info-price">
          {product.price}
          <span className="product-card__info-volume">/ {product.volume}</span>
        </h3>
        <img className="product-card__info-rating" alt="рейтинг" src={rating} />
      </div>
      <button className="product-card__basket">
        <img alt="корзина" src={basket} />
      </button>
      <button className="product-card__basket-mobile">
        В корзину
        <div className="product-card__basket-img">
          <img alt="плюс" src={plus} />
          <img alt="корзина" src={basketMobile} />
        </div>
      </button>
    </div>
  );
}

export default ProductCard;

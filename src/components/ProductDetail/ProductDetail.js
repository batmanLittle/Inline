import Button from "../Button/Button";
import "./ProductDetail.css";
import InfoText from "../InfoText/InfoText";

function ProductDetail({ windowWidth, supplier, imageSrc, textContent }) {
  return (
    <div className="product-detail">
      <div className="product-detail__container">
        <InfoText
          classText={"product-detail__text"}
          text={windowWidth > 500 ? textContent.partial : textContent.bold}
          bold={windowWidth <= 500}
        />
        <h3 className="product-detail__supplier">{supplier}</h3>
        <div className="product-detail__block">
          <img
            src={imageSrc}
            alt={`поставщик ${supplier.toLowerCase()}`}
            className="product-detail__photo"
          />
          <div className="product-detail__buttons">
            <Button
              text={"Сертификаты"}
              classButton={"product-detail__button"}
            />
            <Button
              text={"О поставщике"}
              classButton={"product-detail__button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

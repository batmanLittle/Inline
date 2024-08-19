import "./Main.css";
import Description from "../Description/Description";
import ProductList from "../ProductList/ProductList";
import { products } from "../../utils/textData";

function Main({ windowWidth, swiperRef }) {
  return (
    <main className="main">
      <Description windowWidth={windowWidth} />
      <ProductList
        windowWidth={windowWidth}
        swiperRef={swiperRef}
        products={products}
        title={"С этим товаром покупают"}
      />
    </main>
  );
}

export default Main;

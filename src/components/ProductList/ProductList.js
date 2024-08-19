import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";

function ProductList({ windowWidth, swiperRef, products, title }) {
  if (windowWidth > 900) {
    return (
      <section className="product-list">
        <div className="product-list__container">
          <h2 className="product-list__title">{title}</h2>
          <div className="product-list__cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  SwiperCore.use([Autoplay]);

  return (
    <section className="product-list">
      <div className="product-list__container">
        <h2 className="product-list__title">{title}</h2>
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="product-list__cards"
          spaceBetween={16}
          slidesPerView={1.22}
          speed={900}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1.32,
              spaceBetween: 10,
            },
            501: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 22,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductList;

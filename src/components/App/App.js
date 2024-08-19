import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Reviews from "../Reviews/Reviews";
import ProductDetail from "../ProductDetail/ProductDetail";
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { textContent } from "../../utils/textData";
import tomatoSupplier from "../../images/tomato-supplier.png";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main windowWidth={windowWidth} swiperRef={swiperRef} />
            </>
          }
        />
        <Route
          path="/отзывы"
          element={
            <>
              <Header />
              <Reviews />
            </>
          }
        />
        <Route
          path="/откуда"
          element={
            <>
              <Header />
              <ProductDetail
                windowWidth={windowWidth}
                supplier="Наталья и Юрий Лейшан"
                imageSrc={tomatoSupplier}
                textContent={textContent}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

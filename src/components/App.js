import React from "react";
import "./App.css";
import Header from "./HeaderModule/Header";
import Hero from "./HeroModule/Hero";
import Explore from "./ExploreModule/Explore";
import Products from "./ProductsModule/Products";
import Review from "./ReviewModule/Review";
import Footer from "./FooterModule/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Explore></Explore>
      <div className="ProductsDiv">
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
      </div>
      <Review></Review>
      <Footer></Footer>
    </>
  );
}

export default App;

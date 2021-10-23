import React from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";



import Products from "../components/Products";

import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
     <Navbar />

     <Slider />
      <Categories />
      <Products/>
      <Footer />
    

    </div>
  );
};

export default Home;

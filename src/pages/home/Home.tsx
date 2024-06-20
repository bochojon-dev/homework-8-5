import React from "react";
import Hero from "../../components/hero/Hero";
import Seedra from "../../components/seedra/Seedra";
import Story from "../../components/story/Story";
import Products from "../../components/products/Products";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Seedra />
      <Story />
      <Products />
    </>
  );
};

export default Home;

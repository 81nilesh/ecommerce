import React, { useContext } from "react";
import Layout from "../../coponents/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../coponents/heroSection/HeroSection";
import Filter from "../../coponents/filter/Filter";
import ProductCard from "../../coponents/productCard/ProductCard";
import Track from "../../coponents/track/Track";
import Testimonial from "../../coponents/testimonial/Testimonial";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;

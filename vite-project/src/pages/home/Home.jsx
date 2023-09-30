import { useContext } from "react";
import Layout from "../../coponents/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../coponents/heroSection/HeroSection";
import Filter from "../../coponents/filter/Filter";
import ProductCard from "../../coponents/productCard/ProductCard";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
    </Layout>
  );
}

export default Home;

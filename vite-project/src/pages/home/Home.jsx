import { useContext } from "react";
import Layout from "../../coponents/layout/Layout";
import MyContext from "../../context/data/myContext";
import HeroSection from "../../coponents/heroSection/HeroSection";
import Filter from "../../coponents/filter/Filter";
import ProductCard from "../../coponents/productCard/ProductCard";
import Testimonial from "../../coponents/testimonial/Testimonial";
import Track from "../../coponents/track/Track";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className=" bg-gray-300 p-5" onClick={() => addCart()}>
          add
        </button>
        <button className=" bg-gray-300 p-5" onClick={() => deleteCart()}>
          del
        </button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;

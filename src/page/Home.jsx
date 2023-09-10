import {  useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../component/Sliders";
import Itemall from "../component/Itemall";
import { useInView } from "framer-motion";


const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="w-[100%]">
        <Sliders />
        <div ref={ref} className=" w-[100%] items-center flex justify-center mx-[auto] mb-[60px]">
          <h1 
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s "
          }}
          className="text-[36px] relative layoutcontent text-center">
            Tin Tức Tổng Hợp
          </h1>
        </div>

      <Itemall/>

       
      </div>
    </>
  );
};

export default Home;

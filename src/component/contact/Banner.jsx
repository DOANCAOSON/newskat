import { useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        backgroundImage:
          "url(https://phela.vn/wp-content/uploads/2022/01/banner-1.jpg)",
      }}
      className="w-[100%] h-[339px] flex justify-center item-center bg-no-repeat bg-cover bg-center"
    >
      <div
        ref={ref}
        style={{
          transform: isInView
            ? "none"
            : "translateY(-80px)",
          opacity: isInView ? 1 : 0,
          transition:
            "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="p-[40px] m-[auto] rounded-md bg-backgroundopacity"
      >
        <div className="flex items-center w-[511px] text-color">
          <div className="mr-[6px] text-[16px] ">
            Lorem ipsum
          </div>
          <div className="h-[1px] w-[80%] bg-color"></div>
        </div>
        <div className="text-[64px]  text-color  opacity-[1]">
          Một chút về Ô Trà
        </div>
      </div>
    </div>
  );
};

export default Banner;

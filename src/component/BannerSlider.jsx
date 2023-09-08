import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LazyMotion, m } from "framer-motion";
import sliders1 from "../images/sldiers1.png";
import sliders4 from "../images/sliders4.png";
import sliders3 from "../images/sliders3.jpg";
import Slidertexxt from "./Slidertexxt";

const BannerSlider = () => {
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [current, setCurrent] = useState(0);
  const [isButtonDisabled, setButtonDisabled] =
    useState(false);

  useEffect(() => {
    // Mark that the first load has occurred
    setIsFirstLoad(false);
  }, []);

  const images = [
    {
      id: "1",
      img: sliders1,
      title: "Auntie Anne's Season Menu 1",
      name: "리치 티에이",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱 1",
    },
    {
      id: "2",
      img: sliders4,
      title: "Auntie Anne's Season Menu 2",
      name: "리치 티에드",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱2",
    },

    {
      id: "3",
      img: sliders3,
      title: "Auntie Anne's Season Menu 3",
      name: "리치 티에이드",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱3",
    },
  ];

  const handleSlide = (status) => {
    if (!isButtonDisabled) {
      if (status === "next") {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % images.length
        );
        setCurrent(
          (prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
        ref.current = "next";
      }
      if (status === "prev") {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
        setCurrent(
          (prevIndex) => (prevIndex + 1) % images.length
        );

        ref.current = "prev";
      }
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
        return () => {
          setButtonDisabled(false);
        };
      }, 501);
    }
  };

  const src = () => {
    if (ref.current === "next") {
      const nextIndex =
        (currentIndex - 1 + images.length) % images.length;
      return images[nextIndex].img;
    }
    if (ref.current === "prev") {
      const prevIndex = (currentIndex + 1) % images.length;
      return images[prevIndex].img;
    }
    return images[images.length - 1].img;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide("next");
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex w-[100%]  h-[100vh] relative">
      <button
        className="text-[#000] bg-slate-400 rounded-full px-[20px] py-[10px] absolute bottom-5 left-[40%]  z-20"
        onClick={() => handleSlide("next")}
      >
        Next Slide
      </button>
      <button
        className="text-[#000]  bg-slate-400 rounded-full px-[20px] py-[10px] absolute  bottom-5 left-[53%]  z-20"
        onClick={() => handleSlide("prev")}
      >
        Prev Slide
      </button>
      <div className="app w-[50%] h-[100%]">
        <div className="slide" style={{ zIndex: 1 }}>
          <img src={src()} alt={`Slide ${currentIndex}`} />
        </div>
        <div className="slide" style={{ zIndex: 2 }}>
          <motion.img
            key={currentIndex}
            initial={{
              y: isFirstLoad
                ? 0
                : ref.current === "prev"
                ? -1000
                : 1000,
            }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            src={images[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
      <div className="w-[50%] h-[100%] relative bg-[#005ad5] ">
        <Slidertexxt
          images={images}
          currentIndex={currentIndex}
          ref1={ref}
          isFirstLoad={isFirstLoad}
        />
      </div>
    </div>
  );
};

export default BannerSlider;

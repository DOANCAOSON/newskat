import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${
        isVisible ? "" : "hidden" 
      } fixed bottom-10 right-2 sm:bottom-10  sm:right-5 lg:right-[300px] lg:bottom-[100px] z-[8000]`}
    >
      <div
        onClick={scrollToTop}
        className="scroll-button bg-backgroundopacityTOP  rounded-lg "
      >
        <BiChevronUp className="text-[32px] text-color" />
      </div>
    </div>
  );
};

export default ScrollToTop;

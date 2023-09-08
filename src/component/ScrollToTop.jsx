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
      style={{
        position: "fixed",
        bottom: 100,
        right: 100,
        zIndex: 1000,
      }}
      className={`scroll-to-top ${
        isVisible ? "" : "hidden"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="scroll-button bg-backgroundopacity"
      >
        <BiChevronUp className="text-[32px]" />
      </button>
    </div>
  );
};

export default ScrollToTop;

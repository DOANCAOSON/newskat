import { useRef } from "react";
import { useInView } from "framer-motion";

function ContactBaner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-[100%] h-[402px] flex">
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-[850px] text-center text-colorBlack text-[36px] mx-auto mt-[76px]"
      >
        Lorem ipsum dolor sit amet consectetur. Consequat volutpat diam massa
        justo nunc.
      </div>
    </div>
  );
}

export default ContactBaner;

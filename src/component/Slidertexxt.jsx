import { AnimatePresence, motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
const item = {
  hidden: {
    y: "-100%",
    opacity: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
      delay: 0.3,
    },
  },
};
const Slidertexxt = ({ images, currentIndex, ref1 }) => {
  return (
    <div className="text-left w-[433px] absolute top-20 left-20">
      <AnimatePresence initial={false}>
      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={
          images[currentIndex].title ? "visible" : "hidden"
        }
        variants={container}
      >
        <span
          style={{
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          <motion.div
            variants={item}
            key={images[currentIndex].title}
            className="text-[28px]"
          >
            {images[currentIndex].title}
          </motion.div>
        </span>
        {images[currentIndex].name
          .split(" ")
          .map((word, index) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
                textWrap: "nowrap",
              }}
              key={word}
            >
              <motion.div
                variants={item}
                transition={{ duration: 1, delay: 1.2 }}
                key={images[currentIndex].name}
                className="text-[56px] text-[#ffb500] w-[217px] textw"
              >
                {word}
              </motion.div>
            </span>
          ))}
        <motion.div
          initial={{
            y: ref1.current === "prev" ? -70 : -70,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={images[currentIndex].description}
          className="text-[18px] text-[#ffb500]"
        >
          {images[currentIndex].description}
        </motion.div>
      </motion.div>
      </AnimatePresence>
      
    </div>
  );
};

export default Slidertexxt;

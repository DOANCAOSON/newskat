import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    axios
      .get("https://admin.channelcharn.us/api/list-categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log(categories);
  return (
    <div className=" w-[100%] h-[auto]">
      <div ref={ref} className="w-[100%] bg-headerbackgrou py-4">
        <div
          style={{
            transform: isInView ? "none" : "translateY(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
          }}
        >
          <div className="flex items-center  text-center justify-between w-[100%] md:w-[100%] lg:w-[1200px]  pt-[12px] m-auto text-[#333333] ">
            <div className="flex justify-center w-[100%] md:w-[100%] lg:w-[10%]">
              <div>
                <div className="w-[100%] h-[100%] rounded-full text-[32px] text-color text-center ">
                  <Link to='/'>UsExpress</Link>
                  <div>
                    <div className="mt-[20px] items-center grid grid-cols-2 md:grid-cols-4 lg:hidden  justify-end  gap-x-[50px] gap-y-[40px] sm:gap-[80px]  lg:gap-[80px] text-[18px] font-medium   ">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/tintuc/${category?.sort}/${category?.name}`}
                          className="btnheader"
                        >
                          {category.name}
                        </Link>
                      ))}
                      <div className="rounded-lg bg-bgwhite text-colorBlack">
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center hidden  md:hidden lg:flex  justify-end gap-[80px] text-[18px] font-medium  text-color ">
              {categories.map((category) => (
                <Link
                  className="btnheader layoutcontent"
                  key={category.id}
                  to={`/tintuc/${category?.sort}/${category?.name}`}
                >
                  {category.name}
                </Link>
              ))}
              <div className="px-[20px] py-[8px] rounded-lg bg-bgwhite text-colorBlack cursor-pointer hover:bg-btn hover:text-texthover ease-in duration-300  ">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

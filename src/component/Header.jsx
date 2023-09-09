import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/Logo.png";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://admin.channelcharn.us/api/list-categories"
      )
      .then((response) => {
        setCategories(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className=" w-[100%] h-[auto]">
      <div className="w-[100%] bg-headerbackgrou py-4">
        <div className="">
          <div className="flex items-center  text-center justify-between w-[100%] md:w-[100%] lg:w-[1200px]  pt-[12px] m-auto text-[#333333] ">
            <div className="flex justify-center w-[100%] md:w-[100%] lg:w-[10%]">
              <Link to="/">
                <div className="w-[100%] h-[100%] rounded-full text-[32px] text-color text-center ">
                  {/* <img src={logo} alt={logo} /> */}
                  UsExpress
                  <div>
                    <div className="mt-[20px] items-center grid grid-cols-2 md:grid-cols-4 lg:hidden  justify-end gap-[80px] text-[18px] font-medium  text-color ">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to="/tintuc"
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
              </Link>
            </div>
            <div className="items-center hidden  md:hidden lg:flex  justify-end gap-[80px] text-[18px] font-medium  text-color ">
              {categories.map((category) => (
                <Link key={category.id} to="/tintuc">
                  {category.name}
                </Link>
              ))}
              <div className="px-[20px] py-[8px] rounded-lg bg-bgwhite text-colorBlack">
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

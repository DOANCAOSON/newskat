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
      {/* fixed top-0 left-0 right-0 z-[1000] */}
      <div className="w-[100%] bg-headerbackgrou py-4">
        <div className="">
          <div className="flex items-center  text-center justify-between w-[1200px] pt-[12px] m-auto text-[#333333] ">
            <div className="flex justify-center w-[10%] ">
              <Link to="/">
                <div className="w-[100%] h-[100%] rounded-full ">
                  <img src={logo} alt={logo} />
                </div>
              </Link>
            </div>
            <div className="flex items-center  justify-end gap-[80px] text-[18px] font-medium  text-color ">
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

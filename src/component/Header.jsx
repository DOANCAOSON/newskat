import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import logoHome from "../images/logoHome.png";
import search from "../images/search.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.channelcharn.us/api/list-categories")
      .then((response) => {
        setCategories(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className=" w-[100%] h-[auto]">
      {/*  fixed  top-0 left-0 right-0 */}
      <div className="m-[auto] p-[6px] bg-[#003991]">
        <div className="flex items-center gap-[44px] p-[5px] text-center w-[1200px] m-auto ">
          <div>
            <div className="h-[40px]">
              <img src={logoHome} alt={logoHome} />
            </div>
          </div>
          <div className="flex items-center justify-between  flex-1 rounded-full overflow-hidden bg-[#fff]">
            <div className="w-[100%]">
              <input
                className="w-[100%] outline-none py-[6px] px-[16px]"
                type="text"
                placeholder="Tìm kiếm với katbrowser"
              />
            </div>
            <div className="w-[60px] flex justify-center">
              <div className="w-[30px] h-[30px]">
                <img src={search} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#fff] pb-[10px]">
        <div className="shadow-boxshadowbottom py-[4px] ">
          <div className="flex items-center  text-center w-[1800px] pt-[12px] m-auto text-[#333333] ">
            <div className="flex justify-center w-[10%] ">
              <Link to="/">
                <div className="w-[40px] h-[40px] rounded-full ">
                  <img src={logo} alt={logo} />
                </div>
              </Link>
            </div>
            <div className="flex  justify-end gap-[80px] text-[18px] font-medium ">
              {categories.map((category) => (
                <Link key={category.id} to="/tintuc">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

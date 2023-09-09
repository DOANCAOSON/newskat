import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Sliders from "../component/Sliders";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get("https://admin.channelcharn.us/api/list-post?limit=10&page=1")
      .then((response) => {
        setResponseData(response.data.data.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log(responseData);
  return (
    <>
      <div className="w-[100%]">
        <Sliders />
        <div className="w-[1200px] flex mx-[auto] mb-[60px]">
          <div>
            <h1 className="text-[36px]">Tin Tức Tổng Hợp</h1>
          </div>
        </div>
        <div className="w-[1200px] flex mx-[auto]  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
            {responseData?.map((item) => (
              <Link className="" to={`/detail/${item.id}`} key={item.id}>
                <div className="rounded-lg overflow-hidden mb-[20px]">
                  <img
                    src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                    alt={item.picture}
                  />
                </div>
                <div className="h-[60px] mb-[20px]">
                  <div className="line-clamp-2 text-[16px]">{item.name}</div>
                </div>
                <div className="w-[140px]">
                  <Link
                    to={`/detail/${item.id}`}
                    className="bg-btn hover:text-btnhover hover:ease-in transition duration-1000 rounded-lg py-[6px] px-[24px] flex items-center justify-between text-[#ffff]"
                  >
                    Read More
                    <FiArrowRight className="ml-[4px]" />
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

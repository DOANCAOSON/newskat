import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        "https://admin.channelcharn.us/api/list-post?limit=10&page=1"
      )
      .then((response) => {
        setResponseData(response.data.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log(responseData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="w-[100%] mt-[200px]">
        <div className="w-[1100px] mb-[200px] mx-[auto] ">
          <Slider {...settings}>
            {responseData?.map((item) => (
              <div className="" key={item.id}>
                <div className="flex items-center rounded-lg w-[100%] h-[450px]">
                  <div className="w-[600px] h-[100%] mr-[70px]">
                    <img
                      className="bg-[100%]"
                      src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                      alt={item.picture}
                    />
                  </div>
                  <div className=" w-[500px]">
                    <div className="mb-[50px]">
                      <h1 className="text-left text-5xl line-clamp-2 ">
                        {item.name}
                      </h1>
                    </div>
                    <div className="mb-[30px]">
                      <p className="text-left text-sm line-clamp-2 ">
                        {item.info}
                      </p>
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
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[1200px] flex mx-[auto] mb-[60px]">
          <div>
            <h1 className="text-[36px]">
              Tin Tức Tổng Hợp
            </h1>
          </div>
        </div>
        <div className="w-[1200px] flex mx-[auto]  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[60px]">
            {responseData?.map((item) => (
              <Link className="" to={`/detail/${item.id}`} key={item.id}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                    alt={item.picture}
                  />
                </div>
                <div className="h-[60px]">
                  <div className="line-clamp-2 text-[24px]">
                    {item.name}
                  </div>
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

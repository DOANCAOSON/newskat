import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get("https://admin.channelcharn.us/api/list-post?limit=10&page=1")
      .then((response) => {
        setResponseData(response.data.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-[100%]">
        <div className="w-[1200px] mb-[120px] mx-[auto] gap-[30px] ">
          <Slider {...settings}>
            {responseData?.map((item) => (
              <div key={item.id}>
                <div className="flex items-center">
                  <div
                   
                    className="rounded-lg w-[1200px] h-[400px]"
                  >
                    <img   src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`} alt={item.picture} />
                  </div>

                  <div className="line-clamp-2 flex justify-center items-center h-[100%] w-[100%]">
                      <h1 className="w-[400px] bg-backgroundopacitywhite text-3xl">{item.name}</h1>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[1200px] flex mx-[auto] gap-[30px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responseData?.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <div className="h-[60px]">
                  <div className="line-clamp-2">{item.name}</div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                    alt={
                      item.picture
                    }
                  />
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

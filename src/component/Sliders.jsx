import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Sliders = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get("https://admin.channelcharn.us/api/list-slide")
      .then((response) => {
        setResponseData(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // console.log(responseData);

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
    <div className="mb-[200px]">
      <Slider {...settings}>
        {responseData?.map((item) => (
          <div className="relative  h-[90vh]" key={item.id}>
            <div
              style={{
                backgroundImage: `url(https://admin.channelcharn.us/${item.url_img})`,
              }}
              className="absolute top-0 left-0 right-0 bottom-0 z-1 bg-cover bg-no-repeat"
            ></div>
            <div className="bgcustom absolute top-0 left-0 right-0 bottom-0 z-2"></div>
            <div className="absolute z-3 top-[50%] left-[5%] translate-x-[5%] translate-y-[-50%] flex items-center justify-left py-[20px] rounded-lg  w-[80%] text-colorBlack">
              <div>
                <div className="mb-[40px]">
                  <h1 className="text-left text-5xl line-clamp-3 w-[450px] text-color ">
                    {item.name}
                  </h1>
                </div>
                <div className="mb-[20px]">
                  <p className="text-left line-clamp-2  w-[450px] text-base  text-color">
                    {item.info}
                  </p>
                </div>
                <div className="w-[140px]">
                  <Link
                    // to={`/detail/${item.id}`}
                    to={`#`}
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
  );
};

export default Sliders;

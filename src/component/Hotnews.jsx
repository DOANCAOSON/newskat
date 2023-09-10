import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Hotnews = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get("https://admin.channelcharn.us/api/list-post?limit=4&page=1")
      .then((response) => {
        setResponseData(response.data.data.data);
        setLoading(true)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);



  return (
    <div className="w-[100%] md:w-[100%] lg:w-[1200px] mx-auto mb-[100px] mt-[50px]">
      <div className="text-[32px] mb-[20px] text-center">Danh sách tin tức liên quan</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] rounded-lg ">
        {responseData.data?.map((item) => (
          <Link
            className="hoverbgscalebg-[#fff] hover:shadow-2xl  hover:ease-in transition duration-500 px-[4px]  "
            to={`/detail/${item.id}`}
            key={item.id}
          >
            <div className="rounded-s overflow-hidden mb-[20px] ">
              <img
                src={`https://admin.channelcharn.us/public/upload/articles/${item.picture}`}
                alt={item.picture}
                className="hoverbgscaleitem hover:ease-in transition duration-500"
              />
            </div>

            <div className="p-[20px]">
              <div className="h-[60px] mb-[20px]">
                <div className="line-clamp-2 text-[16px]">{item.name}</div>
              </div>
              <div className="">
                <div className="bg-btn hover:text-btnhover hover:ease-in transition duration-1000 rounded-lg py-[6px] px-[24px] flex items-center justify-between text-[#ffff]">
                  Read More
                  <FiArrowRight className="ml-[4px]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotnews;

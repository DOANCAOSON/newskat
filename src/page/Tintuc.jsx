import axios from "axios";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sliders from "../component/Sliders";

const Tintuc = () => {
  const [page, setpage] = useState(1);

  const [responseData, setResponseData] = useState([]);


  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(`https://admin.channelcharn.us/api/list-post?cat_id=1&limit=10&page=${page}`)
      .then((response) => {
        setResponseData(response.data.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [page]);

  console.log(page);
  console.log(responseData);

  return (
    <div>
       <div className="w-[100%]">
       
        <Sliders />
        <div className=" w-[100%] items-center flex justify-center mx-[auto] mb-[60px]">
          <h1 className="text-[36px] relative layoutcontent text-center">
            Tin Tức Mới Nhất
          </h1>
        </div>

        <div className="w-[1200px] flex mx-[auto]   ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[50px] rounded-lg p-[40px] bg-[#eee]">
            {responseData?.map((item) => (
              <Link
                className="hoverbgscale w-[40%] md:w-[100%] lg:w-[100%]  bg-[#fff] hover:shadow-2xl  hover:ease-in transition duration-500 "
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
                    <div className="line-clamp-2 text-[16px]">
                      {item.name}
                    </div>
                  </div>
                  <div className="">
                    <Link
                      to={`/detail/${item.id}`}
                      className="bg-btn hover:text-btnhover hover:ease-in transition duration-1000 rounded-lg py-[6px] px-[24px] flex items-center justify-between text-[#ffff]"
                    >
                      Read More
                      <FiArrowRight className="ml-[4px]" />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tintuc;

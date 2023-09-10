import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Itemall = () => {
  const [responseData, setResponseData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= responseData?.last_page) {
      setPage(page);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(`https://admin.channelcharn.us/api/list-post?limit=10&page=${page}`)
      .then((response) => {
        setResponseData(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [page]);

  return (
    <>
      <div ref={ref} className="w-[100%] sm:w-[100%] lg:w-[1200px] flex mx-[auto]   ">
        <div
          style={{
            transform: isInView ? "none" : "translateX(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s ",
          }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  lg:gap-[50px] sm:lg:gap-[50px] gap-y-[40px]  rounded-lg p-[40px] bg-[#eee]"
        >
          {responseData.data?.map((item) => (
            <Link
              className="hoverbgscale w-[100%] md:w-[100%] lg:w-[100%]  bg-[#fff] hover:shadow-2xl  hover:ease-in transition duration-500 "
              to={`/detail/${item.id}`}
              key={item.id}
            >
              <div
                className="rounded-s overflow-hidden mb-[20px] "
              >
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
                  <div
                    className="bg-btn hover:text-btnhover hover:ease-in transition duration-1000 rounded-lg py-[6px] px-[24px] flex items-center justify-between text-[#ffff]"
                  >
                    Read More
                    <FiArrowRight className="ml-[4px]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[100%] flex justify-center mx-[auto] mt-[20px]">
        <div>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li onClick={() => handlePageChange(page - 1)}>
                <div className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100    ">
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </div>
              </li>
              {Array.from({ length: responseData?.last_page }, (_, index) => (
                <li
                  className={`${
                    index + 1 === page
                      ? "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : " flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  }`}
                  key={index}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
              <li onClick={() => handlePageChange(page + 1)}>
                <div className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700   ">
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Itemall;

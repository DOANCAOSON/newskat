import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Hotnews from "../component/Hotnews";

const Detail = () => {
  const [responseData, setResponseData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        `https://admin.channelcharn.us/api/post-detail?id=${id}`
      )
      .then((response) => {
        setResponseData(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  const htmlString = responseData?.data?.content;



  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  return (
    <div ref={ref} className="w-[100%] lg:w-[1200px] flex justify-center mt-[100px] mx-[auto] gap-[30px]">
      <div 
      style={{
        transform: isInView ? "none" : "translateY(100%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
      }}
      className="w-[100%]">
        <div className="w-[100%] ">
          <h1 className="text-[32px] px-[20px] w-[100%]">
            {responseData?.data?.name}
          </h1>
        </div>
        <div className="flex w-[100%] ">
          <div
            dangerouslySetInnerHTML={{ __html: htmlString }}
            className="mt-[140px] px-[20px] dangerouslySetInnerHTML"
          ></div>
        </div>

        <div>
          <Hotnews/>
        </div>
      </div>
    </div>
  );
};

export default Detail;

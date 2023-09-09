import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);
  const htmlString = responseData?.data?.content;

  return (
    <div className="w-[100%] sm:w-[600px] lg:w-[600px] flex mt-[100px] mx-[auto] gap-[30px]">
      <div>
        <div className="">
          <h1 className="text-[32px]">
            {responseData?.data?.name}
          </h1>
        </div>
        <div className="flex w-[100%]">
          <div
            dangerouslySetInnerHTML={{ __html: htmlString }}
            className="mt-[140px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

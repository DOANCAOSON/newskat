import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [responseData, setResponseData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(`https://admin.channelcharn.us/api/post-detail?id=${id}`)
      .then((response) => {
        setResponseData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  },[]);

  console.log(responseData);

  return (
    <div className="w-[1200px] flex mx-[auto] gap-[30px]">
      <a>
        <div className="h-[60px]">
          <div className="line-clamp-2">{responseData?.data?.name}</div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={`https://admin.channelcharn.us/public/upload/articles/${responseData?.data?.picture}`}
            alt={responseData?.data?.picture}
          />
        </div>
      </a>
    </div>
  );
};

export default Detail;

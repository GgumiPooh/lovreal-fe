import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";

function CouplePage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // GET 요청 보내기
    const fetchCoupleData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/member/couplePage",
          {
            method: "GET",
            credentials: "include",
          },
        );
        const data = await response.json();
        console.log("Received data:", data);
        setData(data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchCoupleData();
  }, []);

  if (!data) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Box>
        <div id="memberId">👤 Member ID: {data.id}</div>
        <div id="sendrequest">your love : {data.partnerId}</div>
      </Box>
    </div>
  );
}

export default CouplePage;

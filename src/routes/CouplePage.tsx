import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CouplePage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    // GET 요청 보내기
    const fetchCoupleData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/couple", {
          method: "GET",
          credentials: "include",
          headers: { "content-type": "application/json" },
        });
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
    <div>
      <div id="memberId">👤 Member ID: {data.id}</div>
      <div id="sendrequest">your love : {data.coupleRequest}</div>
    </div>
  );}

export default CouplePage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CouplePage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // GET 요청 보내기
    const fetchCoupleData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/accept/couple",
          {
            method: "GET",
            credentials: "include",
            headers: { "content-type": "application/json" },
          }
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
    <div>
      <div id="memberId">👤 Member ID: {data.id}</div>
      <div id="requestCouple">❤️ send Couple: {data.coupleRequest}</div>
      {/* <div id="sendrequest">📮 Request Request : {data.coupleId}</div> */}
      <Button className="bg-pink-200" onClick={AcceptCouple}>
        수락하기
      </Button>
    </div>
  );

  async function AcceptCouple() {
    const response = await fetch("http://localhost:8080/member/acceptCouple", {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
    });
    alert(response.text());
    if (response.status == 200) {
      navigate("/member/couple");
    } else if (response.status == 402) {
      navigate("/login");
    }
  }
}

export default CouplePage;

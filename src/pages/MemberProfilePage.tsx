import { useEffect, useState } from "react";
import Box from "../components/Box";

function MemberProfilePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:8080/member/home", {
          method: "GET",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            console.log("Received data:", data);
          });
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <Box>
        <div>{data[0]}</div>
        <div>
          {data[3]}친구 : {data[1]}
        </div>

        <div>우리가 만난 날 : {data[2]}</div>
      </Box>
    </div>
  );
}

export default MemberProfilePage;

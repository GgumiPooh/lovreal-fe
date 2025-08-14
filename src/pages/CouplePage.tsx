import { useEffect, useState } from "react";
import Box from "../components/Box";

function CouplePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCoupleData = async () => {
      try {
        fetch("http://localhost:8080/member/couple", {
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

    fetchCoupleData();
  }, []);
  return (
    <div className="flex h-full items-center justify-center text-center">
      <Box>
        <div className="inline-block text-4xl">{data[0]}</div>
        <div className="mx-5 inline-block text-4xl">♥️</div>
        <div className="inline-block text-4xl">{data[1]}</div>
      </Box>
    </div>
  );
}

export default CouplePage;

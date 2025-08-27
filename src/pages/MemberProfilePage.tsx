import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";

function MemberProfilePage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:8080/member/profile", {
          method: "GET",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data === null) {
              navigate("/sign-in");
            }
            setData(data);
            console.log("Received data:", data);
          });
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    async function re() {
      const response = await fetch("http://localhost:8080/api/member/profile", {
        method: "POST",
        credentials: "include",
      });

      if (response.status == 401) {
        alert(await response.text());
        navigate("/sign-in");
      }
    }
    re();
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";

function CouplePage() {
  const navigator = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCoupleData = async () => {
      try {
        fetch("http://localhost:8080/api/member/couple-date", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
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

  const [date, setDate] = useState("");

  async function handleClick() {
    const coupleDate = new Date(date);
    const year = coupleDate.getFullYear();
    const month = coupleDate.getMonth() + 1;
    const day = coupleDate.getDate();

    const response = await fetch(
      "http://localhost:8080/api/member/couple-date",
      {
        method: "POST",
        body: JSON.stringify({ year, month, day }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      },
    );
    const result = await response.json();

    alert(result.message);
    if (response.ok) {
      navigator("/member/couple");
    } else {
      navigator("/member/couple");
    }
  }

  return (
    <div className="flex h-full items-center justify-center text-center">
      <Box>
        <div className="inline-block pb-5 text-4xl">
          {data[0]} ♥️ {data[1]}
        </div>

        <div>
          <h2 className="pb-4">우리가 커플이 된날</h2>
          <input
            type="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
            className="pr-3"
          />
          <Button className="py-2" onClick={handleClick}>
            완료
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default CouplePage;

import { useEffect, useState } from "react";
import Box from "../components/Box";

function InviteCodePage() {
  const [data, setData] = useState("");
  useEffect(() => {
    // GET 요청 보내기
    const fetchCoupleData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/member/inviteCode",
          {
            method: "GET",
            credentials: "include",
          },
        );
        const data = await response.text();
        console.log("Received data:", data);
        setData(data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchCoupleData();
  }, []);

  const [copied, setCopied] = useState(false);
  async function copyToCode() {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  }
  if (!data) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Box>
        <div id="memberId" className="font-signup inline-block">
          커플 초대 코드: {data}
        </div>
        <button
          className={`ml-8 rounded-2xl bg-pink-200 p-1.5 text-gray-500 transition-all duration-300 ${copied ? "pointer-events-none" : "hover:text-black"}`}
          onClick={copyToCode}
        >
          {copied ? "복사됨" : "복사하기"}
        </button>
      </Box>
    </div>
  );
}

export default InviteCodePage;

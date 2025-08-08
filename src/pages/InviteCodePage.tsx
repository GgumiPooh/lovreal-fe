import { useEffect, useState } from "react";
import Box from "../components/Box";
import Link from "../components/Link";

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
        <Link
          className="group flex gap-x-3 text-brand-pink transition-colors duration-200 hover:text-amber-950"
          href="/member/recieveOrSend"
        >
          <div className="font-secondary text-6xl">{"<"}</div>
        </Link>
        <h2 className="mb-10 text-center text-2xl text-pink-800">
          초대코드를 전송해주세요!
        </h2>
        <div id="memberId" className="font-signup inline-block text-xl">
          커플 초대 코드 : {data}
        </div>
        <button
          className={`ml-8 rounded-2xl bg-pink-100 p-2.5 text-xs text-gray-500 transition-all duration-300 ${copied ? "pointer-events-none" : "hover:text-black"}`}
          onClick={copyToCode}
        >
          {copied ? "복사됨" : "복사하기"}
        </button>
      </Box>
    </div>
  );
}

export default InviteCodePage;

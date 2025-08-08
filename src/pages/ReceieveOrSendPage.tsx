import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import Link from "../components/Link";

function ReceiveOrSendPage() {
  const navigate = useNavigate();
  async function handleClick() {
    const response = await fetch("http://localhost:8080/member/inviteCode", {
      method: "POST",
      credentials: "include",
    });
    const result = await response.text();
    if (response.status === 200) {
      navigate("/member/inviteCode");
    } else if (response.status === 401) {
      alert(result);
    }
  }
  return (
    <div className="flex h-full items-center justify-center">
      <Box>
        <Link href="/member/inputInviteCode">
          <Button className="inline-block">커플요청보내기</Button>
        </Link>
        <Button onClick={handleClick}>내 초대코드</Button>
        <Link href="/member/">
          <Button className="inline-block">받은 요청 보기</Button>
        </Link>
      </Box>
    </div>
  );
}

export default ReceiveOrSendPage;

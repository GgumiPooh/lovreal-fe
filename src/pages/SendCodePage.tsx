import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";

function SendCodePage() {
  const navigate = useNavigate();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inviteCode = formData.get("inviteCode");
    const response = await fetch(
      `http://localhost:8080/api/member/input-invite-code?inviteCode=${encodeURIComponent(inviteCode)}`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    const result = await response.text();
    alert(result);
    if (response.status === 200) {
      navigate("/member/couple");
    } else if (response.status === 400) {
      navigate("/member/SendCode");
    } else {
      navigate("/");
    }
  }
  return (
    <div className="flex h-full items-center justify-center text-center">
      <Box>
        <Link
          className="group flex gap-x-3 text-brand-pink transition-colors duration-200 hover:text-amber-950"
          href="/member/recieveOrSend"
        >
          <div className="font-secondary text-6xl">{"<"}</div>
        </Link>

        <h2 className="mt-3 mb-9 text-2xl text-brand-pink">
          커플을 맺어주세요!
        </h2>
        <form onSubmit={handleSubmit} className="mb-7">
          <LabelWithInput
            name="inviteCode"
            placeholder="상대방의 초대코드를 입력해주세요!"
            className="mr-5 inline-block text-2xl"
            inputClassName="placeholder:text-[1rem]"
          ></LabelWithInput>
          <Button type="submit">입력</Button>
        </form>
      </Box>
    </div>
  );
}

export default SendCodePage;

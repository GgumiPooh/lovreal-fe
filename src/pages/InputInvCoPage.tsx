import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";

function InputInvCoPage() {
  const navigate = useNavigate();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const inviteCode = formData.get("inviteCode");
    const response = await fetch(
      `http://localhost:8080/member/inputInviteCode?inviteCode=${encodeURIComponent(inviteCode)}`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    const result = await response.text();
    if (response.status === 200) {
      alert(result);
      navigate("/");
    } else if (response.status === 401) {
      alert(result);
    }
  }
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
    <div className="flex h-full items-center justify-center text-center">
      <Box>
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
          <Button type="submit">전송</Button>
        </form>
        <Button onClick={handleClick}>내 초대코드</Button>
      </Box>
    </div>
  );
}

export default InputInvCoPage;

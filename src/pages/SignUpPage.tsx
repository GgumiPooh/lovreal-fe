import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import Label from "../components/Label";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";
import Radio from "../components/Radio";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center">
      <Box className="w-full not-md:h-full">
        <form onSubmit={handleSubmit}>
          <Link
            className="group flex gap-x-3 text-brand-pink transition-colors duration-200 hover:text-amber-950"
            href="/"
          >
            <div className="font-secondary text-6xl">{"<"}</div>
            <div className="mt-5.5 font-secondary text-sm font-semibold underline-offset-2 group-hover:underline">
              뒤로가기
            </div>
          </Link>

          <h1 className="text-center font-secondary text-6xl text-brand-pink">
            LOVREAL
          </h1>

          <LabelWithInput
            className="mt-10"
            align="right"
            name="id"
            type="text"
            placeholder="아이디를 입력하세요."
          >
            아이디
          </LabelWithInput>

          <LabelWithInput
            className="mt-5"
            align="right"
            name="password"
            type="text"
            placeholder="비밀번호를 입력하세요."
          >
            비밀번호
          </LabelWithInput>

          <LabelWithInput
            className="mt-5"
            align="right"
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          >
            비밀번호 확인
          </LabelWithInput>

          <div className="mt-5 flex items-center gap-x-5">
            <Label align="right">성별</Label>

            <div className="flex w-full gap-x-7">
              <Radio label="남" name="gender" value="male" defaultChecked />
              <Radio label="여" name="gender" value="female" />
            </div>
          </div>

          <Button className="mt-10" block type="submit">
            시작하기
          </Button>
        </form>
      </Box>
    </div>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (
      data.get("id") === "" ||
      data.get("password") === "" ||
      data.get("passwordCheck") === ""
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (data.get("password") !== data.get("passwordCheck")) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }

    const response = await fetch("http://localhost:8080/signUp", {
      method: "POST",
      credentials: "include",
      body: data,
    });

    const result = await response.text();

    alert(result);

    if (response.status === 200) {
      navigate("/login");
    }
  }
}
export default SignUpPage;

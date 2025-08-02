import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";

function SignInPage() {
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
            type="password"
            placeholder="비밀번호를 입력하세요."
          >
            비밀번호
          </LabelWithInput>

          <Button className="mt-10" block type="submit">
            로그인
          </Button>
        </form>
      </Box>
    </div>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: data,
    });

    alert(await response.text());

    if (response.status == 200) {
      navigate("/member/requestCouple");
    } else {
      navigate("/sign-in");
    }

    console.log(response);
  }
}

export default SignInPage;

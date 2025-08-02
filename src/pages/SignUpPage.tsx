import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center">
      <Form className="mx-auto not-md:h-full" onSubmit={handleSubmit}>
        <Link
          className="group flex gap-x-2 text-brand-pink transition-colors duration-200 hover:text-amber-950"
          href="/"
        >
          <span className="font-primary text-6xl">{"<"}</span>
          <span className="mt-5.5 block font-secondary underline-offset-2 group-hover:underline">
            뒤로가기
          </span>
        </Link>

        <h1 className="text-center font-primary text-6xl text-brand-pink">
          LOVREAL
        </h1>

        <section className="mt-10">
          <LabelWithInput
            name="id"
            type="text"
            placeholder="아이디를 입력하세요."
          >
            아이디
          </LabelWithInput>

          <LabelWithInput
            name="password"
            type="text"
            placeholder="비밀번호를 입력하세요."
          >
            비밀번호
          </LabelWithInput>

          <LabelWithInput
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          >
            비밀번호 확인
          </LabelWithInput>

          <div className="mt-5 flex justify-center">
            <span className="font-signup text-[0.9rem] text-gray-500">
              성별
            </span>
            <label className="font-signup ml-13 inline-flex cursor-pointer items-center text-[0.9rem] text-gray-500">
              남
              <input
                name="gender"
                type="radio"
                value="man"
                className="ml-3 h-3.5 w-3.5 appearance-none rounded-full border-0 ring-3 ring-pink-200 transition-all duration-200 checked:bg-pink-300 checked:ring-pink-200 hover:ring-5"
              />
            </label>
            <label className="font-signup mr-3 ml-16 inline-flex cursor-pointer items-center text-[0.9rem] text-gray-500">
              여
              <input
                type="radio"
                name="gender"
                value="female"
                className="ml-3 h-3.5 w-3.5 appearance-none rounded-full border-0 ring-3 ring-pink-200 transition-all duration-200 checked:bg-pink-300 checked:ring-pink-200 hover:ring-5"
              />
            </label>
          </div>
        </section>

        <section>
          <Button
            type="submit"
            className="mx-auto mt-13 bg-[rgb(197,140,167)] px-5 py-4 text-[rgb(63,27,44)] outline-[rgb(164,71,116)] transition-colors duration-300 hover:border-amber-50 hover:bg-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] active:bg-[rgb(210,83,142)]"
          >
            시작하기
          </Button>
        </section>
      </Form>
    </div>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("password") !== formData.get("passwordCheck")) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }

    const response = await fetch("http://localhost:8080/signUp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: formData,
      credentials: "include",
    });

    const result = await response.text();

    alert(result);

    if (response.status === 200) {
      navigate("/login");
    }
  }
}
export default SignUpPage;

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";

function SignUpPage() {
  const navigate = useNavigate();
  return (
    <form
      className="p-7 rounded-2xl shadow-xl border-b-amber-950 w-120 h-130
     mx-auto my-20 bg-gradient-to-b from-pink-200 to-pink-10"
      onSubmit={handleSubmit}
    >
      <Link
        to="/"
        className="outline-none font-title text-6xl text-pink-800 hover:text-amber-950 transition-colors duration-200 ease-in-out"
      >
        {"<"}
      </Link>

      <div>
        <div className="text-center font-title text-6xl text-[rgb(144,41,91)]">
          lovreal
        </div>

        <div className="mt-10">
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
        </div>

        <Button
          type="submit"
          className="mt-13 mx-auto px-5 py-4 outline-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] text-[rgb(63,27,44)] hover:bg-[rgb(164,71,116)] hover:border-amber-50 bg-[rgb(197,140,167)] transition-colors duration-300 active:bg-[rgb(210,83,142)]"
        >
          로그인
        </Button>
      </div>
    </form>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      id: formData.get("id"),
      password: formData.get("password"),
    };

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    alert(await response.text());
    if (response.status == 200) {
      navigate("/member/requestCouple");
    } else {
      navigate("/login");
    }
    // const result = await reponse.status;
    console.log(response);
  }
}

export default SignUpPage;

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";
import Link from "../components/Link";

function SignUpPage() {
  const navigate = useNavigate();
  window.localStorage.setItem("hyoeun jjang", "21");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      id: formData.get("id"),
      password: formData.get("password"),
      passwordCheck: formData.get("passwordCheck"),
      gender: formData.get("gender"),
    };

    if (data.password != data.passwordCheck) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }
    const response = await fetch("http://localhost:8080/signUp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const result = await response.text();
    alert(result);
    if (response.status === 200) {
      navigate("/login");
    } else {
      navigate("/redirect");
    }
  }
  document.cookie = "theme=dark; path=/; max-age=3600";

  return (
    <form
      className="to-pink-10 mx-auto my-20 h-130 w-120 rounded-2xl border-b-amber-950 bg-gradient-to-b from-pink-200 p-7 shadow-xl"
      onSubmit={handleSubmit}
    >
      <Link
        href="/"
        className="font-title text-6xl text-pink-800 transition-colors duration-200 ease-in-out outline-none hover:text-amber-950"
      >
        {"<"}
      </Link>

      <div>
        <div className="text-center font-title text-6xl text-[rgb(144,41,91)]">
          lovreal
        </div>

        <div className="mt-10">
          <div>
            <LabelWithInput
              name="id"
              type="text"
              placeholder="아이디를 입력하세요."
            >
              아이디
            </LabelWithInput>
            <button>중복확인</button>
          </div>
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
            <label className="ml-13 inline-flex cursor-pointer items-center font-signup text-[0.9rem] text-gray-500">
              남
              <input
                name="gender"
                type="radio"
                value="man"
                className="ml-3 h-3.5 w-3.5 appearance-none rounded-full border-0 ring-3 ring-pink-200 transition-all duration-200 checked:bg-pink-300 checked:ring-pink-200 hover:ring-5"
              />
            </label>
            <label className="mr-3 ml-16 inline-flex cursor-pointer items-center font-signup text-[0.9rem] text-gray-500">
              여
              <input
                type="radio"
                name="gender"
                value="female"
                className="ml-3 h-3.5 w-3.5 appearance-none rounded-full border-0 ring-3 ring-pink-200 transition-all duration-200 checked:bg-pink-300 checked:ring-pink-200 hover:ring-5"
              />
            </label>
          </div>
        </div>

        <Button
          type="submit"
          className="mx-auto mt-13 bg-[rgb(197,140,167)] px-5 py-4 text-[rgb(63,27,44)] outline-[rgb(164,71,116)] transition-colors duration-300 hover:border-amber-50 hover:bg-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] active:bg-[rgb(210,83,142)]"
        >
          시작하기
        </Button>
      </div>
    </form>
  );
}
export default SignUpPage;

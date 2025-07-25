import { useRef, useState } from "react";
import SignUpButton from "./Button";
import LabelWithInput from "./LabelWithInput";
import Link from "./Link";

function SignUpPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [id, setId] = useState("");
  const [idCheckText, setIdCheckText] = useState("중복확인");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIsIdChecked(false);
    setIdCheckText("중복확인");
  };

  async function idCheck() {
    if (id === "") {
      return;
    }

    const reponse = await fetch(`http://localhost:8080/idCheck?id=${id}`);
    const data = await reponse.json();
    if (reponse.status === 409) {
      setIsIdChecked(false);
      setIdCheckText("중복확인");
      inputRef.current?.focus();
    } else {
      setIsIdChecked(true);
      setIdCheckText("확인완료 ✅");
    }
    alert(data.message);
    return;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isIdChecked === false) {
      alert("아이디 중복 체크를 해주세요.");
      return;
    }
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
    const reponse = await fetch("http://localhost:8080/signUp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await reponse.text();
    console.log(result);
  }

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
        <button
          onClick={idCheck}
          children={idCheckText}
          className="text-end inline-block"
        />

        <div className="mt-10">
          <div className="text-end">
            <LabelWithInput
              ref={inputRef}
              name="id"
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={handleIdChange}
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
            <span className="font-signup text-gray-500 text-[0.9rem]">
              성별
            </span>
            <label className="ml-13 font-signup text-gray-500 text-[0.9rem] inline-flex items-center cursor-pointer">
              남
              <input
                name="gender"
                type="radio"
                value="man"
                className="appearance-none ml-3 border-0 ring-3 ring-pink-200 rounded-full w-3.5 h-3.5 checked:bg-pink-300  checked:ring-pink-200 hover:ring-5 transition-all duration-200"
              />
            </label>
            <label className="ml-16 font-signup text-gray-500 text-[0.9rem] inline-flex items-center cursor-pointer mr-3">
              여
              <input
                type="radio"
                name="gender"
                value="female"
                className="appearance-none ml-3 border-0 ring-3 ring-pink-200 rounded-full w-3.5 h-3.5 checked:bg-pink-300  checked:ring-pink-200 hover:ring-5 transition-all duration-200"
              />
            </label>
          </div>
        </div>

        <SignUpButton
          type="submit"
          className="mt-13 mx-auto px-5 py-4 outline-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] text-[rgb(63,27,44)] hover:bg-[rgb(164,71,116)] hover:border-amber-50 bg-[rgb(197,140,167)] transition-colors duration-300 active:bg-[rgb(210,83,142)]"
        >
          시작하기
        </SignUpButton>
      </div>
    </form>
  );
}

export default SignUpPage;

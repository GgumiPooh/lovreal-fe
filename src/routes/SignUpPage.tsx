import LabelWithInput from "./LabelWithInput";
import Link from "./Link";
import SignUpButton from "./Button";

function SignUpPage() {
  return (
    <div
      className=" p-7 rounded-2xl shadow-xl border-b-amber-950 w-120 h-130
     mx-auto my-20  bg-gradient-to-b from-pink-200 to-pink-10 "
    >
      <Link
        children="<"
        to="/"
        className="outline-none font-title text-6xl text-pink-800 hover:text-amber-950 transition-colors duration-200 ease-in-out"
      ></Link>
      <div className="text-center ">
        <span className="font-title text-6xl text-[rgb(144,41,91)]">
          lovreal
        </span>

        <div className="mt-10 mb-13">
          <LabelWithInput
            name="id"
            children="아이디"
            type="text"
            placeholder="아이디를 입력하세요."
          ></LabelWithInput>
          <LabelWithInput
            name="password"
            children="비밀번호"
            type="text"
            placeholder="비밀번호를 입력하세요."
          ></LabelWithInput>
          <LabelWithInput
            name="passwordCheck"
            children="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          ></LabelWithInput>
          <div className="mt-5">
            <span className="font-signup text-gray-500 text-[0.9rem] mr-13">
              성별
            </span>
            <label className="font-signup text-gray-500 text-[0.9rem] inline-flex items-center cursor-pointer mr-16">
              남
              <input
                type="radio"
                name="gender"
                value="female"
                className="appearance-none ml-3 border-0 ring-3 ring-pink-200 rounded-full w-3.5 h-3.5 checked:bg-pink-300  checked:ring-pink-200 hover:ring-5 transition-all duration-200"
              />
            </label>
            <label className="font-signup text-gray-500 text-[0.9rem] inline-flex items-center cursor-pointer mr-3">
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
          children="시작하기"
          className="mx-auto px-5 py-4 outline-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] text-[rgb(63,27,44)] hover:bg-[rgb(164,71,116)] hover:border-amber-50 bg-[rgb(197,140,167)] transition-colors duration-300 active:bg-[rgb(210,83,142)]"
        ></SignUpButton>
      </div>
    </div>
  );
}

export default SignUpPage;

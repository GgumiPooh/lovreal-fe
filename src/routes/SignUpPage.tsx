import LabelWithInput from "./LabelWithInput";
import Link from "./Link";
import SignUpButton from "./SignUpButton";

function SignUpPage() {
  return (
    <div className="p-7 rounded-2xl shadow-xl border-b-amber-950 w-120 h-130 mx-auto my-20">
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
            <span className="font-signup text-gray-500 text-[0.9rem] mr-10">
              성별
            </span>
            <label className="inline-flex items-center cursor-pointer mx-2">
              <input
                type="radio"
                name="gender"
                value="man"
                className="hidden peer"
              />
              <span className="mx-2 text-sm font-signup text-gray-500">
                남
              </span>
              <span className="w-5 h-5 mx-2 p-2 rounded-full border-2   border-red-300 hover:border-pink-400 transition duration-300 ease-in-out peer-checked:bg-red-200"></span>
            </label>
            <label className="inline-flex items-center cursor-pointer mx-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="hidden peer"
              />
              <span className="ml-3 mr-2 text-sm font-signup text-gray-500">
                여
              </span>
              <span className="w-5 h-5 mx-2 p-2 rounded-full border-2   border-red-300 hover:border-pink-400 transition duration-300 ease-in-out peer-checked:bg-red-200"></span>
            </label>
          </div>
        </div>
        <SignUpButton
          children="시작하기"
          className="mx-auto px-5 py-4 outline-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] text-[rgb(63,27,44)] hover:bg-[rgb(164,71,116)] hover:border-amber-50 bg-[rgb(197,140,167)] transition-colors duration-400 ease-in-out"
        ></SignUpButton>
      </div>
    </div>
  );
}

export default SignUpPage;

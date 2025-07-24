import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";
import SignUpButton from "./Button";
import Link from "./Link";

function IntroRoute() {
  return (
    <div className="mt-25 max-w-120 mx-auto">
      <Link to="/login" className="block text-end underline">로그인</Link>
      <h1 className="text-center font-title mt-8 text-8xl text-[rgb(144,41,91)] drop-shadow-[5px_5px_5px_rgba(252,129,195,0.8)]">
        lovreal
      </h1>

      <div className="h-[65vh] px-4 gap-y-3 flex flex-col justify-end">
        <SignUpButton className="bg-blue-50 outline-amber-950">
          <GoogleIcon className="size-8" />
          구글 계정으로 시작하기
        </SignUpButton>
        <SignUpButton className="bg-amber-300 outline-amber-950">
          <KaKaoIcon className="size-8" />
          카카오 계정으로 시작하기
        </SignUpButton>
        <Link
          to="/signup"
          className="font-signup bg-pink-300 border-pink-300 rounded-2xl outline-amber-950
        p-2 pl-4 text-nowrap text-gray-700 flex items-center gap-10 border-2 transition duration-300 hover:border-amber-950"
        >
          <span className="font-title text-[rgb(144,41,91)] text-4xl">LR</span>
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default IntroRoute;

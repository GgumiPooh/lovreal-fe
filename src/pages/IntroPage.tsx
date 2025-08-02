import Button from "../components/Button";
import Link from "../components/Link";
import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";

function IntroRoute() {
  return (
    <div className="mx-auto mt-25 max-w-120">
      <Link to="/login" className="block text-end underline">
        로그인
      </Link>
      <h1 className="mt-8 text-center font-title text-8xl text-[rgb(144,41,91)] drop-shadow-[5px_5px_5px_rgba(252,129,195,0.8)]">
        lovreal
      </h1>

      <div className="flex h-[65vh] flex-col justify-end gap-y-3 px-4">
        <Button className="bg-blue-50 outline-amber-950">
          <GoogleIcon className="size-8" />
          구글 계정으로 시작하기
        </Button>
        <Button className="bg-amber-300 outline-amber-950">
          <KaKaoIcon className="size-8" />
          카카오 계정으로 시작하기
        </Button>
        <Link
          to="/signup"
          className="flex items-center gap-10 rounded-2xl border-2 border-pink-300 bg-pink-300 p-2 pl-4 font-signup text-nowrap text-gray-700 outline-amber-950 transition duration-300 hover:border-amber-950"
        >
          <span className="font-title text-4xl text-[rgb(144,41,91)]">LR</span>
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default IntroRoute;

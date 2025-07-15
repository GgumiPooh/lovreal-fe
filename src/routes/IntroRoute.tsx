import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";
import SignUpButton from "./SignUpButton";

function IntroRoute() {
  return (
    <div className="text-center mt-25">
      <h1 className="font-title text-6xl text-[rgb(144,41,91)] drop-shadow-[5px_5px_5px_rgba(252,129,195,0.8)]">
        lovreal
      </h1>

      <div className="h-[60vh] px-4 gap-y-3 flex flex-col justify-end">
        <SignUpButton className="bg-blue-50">
          <GoogleIcon className="size-9" />
          구글 계정으로 시작하기
        </SignUpButton>
        <SignUpButton className="bg-amber-300">
          <KaKaoIcon className="size-9" />
          카카오 계정으로 시작하기
        </SignUpButton>
      </div>
    </div>
  );
}

export default IntroRoute;

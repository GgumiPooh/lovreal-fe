import { twMerge } from "tailwind-merge";
import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";
import SignUpButton from "./SignUpButton";

function IntroRoute() {
  return (
    <div className="text-center pt-25 flex  flex-col w-[60vh]">
      <div
        id="title"
        className="text-6xl text-[rgb(144,41,91)] tracking-widest drop-shadow-[5px_5px_5px_rgba(252,129,195,0.8)]"
      >
        lovreal
      </div>

      <div className="relative h-[60vh] align-middle">
        <div className="absolute gap-3 bottom-[0vh] flex flex-col left-1/2 -translate-x-1/2">
          <SignUpButton className="bg-blue-50">
            <GoogleIcon className="size-9" />
            <div className="flex items-center ">구글 계정으로 시작하기</div>
          </SignUpButton>
          <SignUpButton className="bg-amber-300">
            <KaKaoIcon className="size-9" />
            <div className="flex items-center">카카오 계정으로 시작하기</div>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

export default IntroRoute;

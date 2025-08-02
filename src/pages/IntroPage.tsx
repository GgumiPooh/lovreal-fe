import Button from "../components/Button";
import Link from "../components/Link";
import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";

function IntroRoute() {
  return (
    <div className="mx-auto flex h-dvh max-w-120 flex-col py-10 md:py-20">
      <div className="text-end">
        <Link className="underline" href="/sign-in">
          로그인
        </Link>
      </div>

      <h1 className="text-center font-secondary text-8xl text-brand-pink">
        LOVREAL
      </h1>

      <div className="mt-auto flex flex-col justify-end gap-y-3 px-4">
        <Button className="flex w-full items-center gap-x-7 bg-blue-50 outline-amber-950">
          <GoogleIcon className="size-8" />
          <span className="text-sm text-gray-600">구글 계정으로 시작하기</span>
        </Button>

        <Button className="flex w-full items-center gap-x-7 bg-amber-300 outline-amber-950">
          <KaKaoIcon className="size-8" />
          <span className="text-sm text-gray-600">
            카카오 계정으로 시작하기
          </span>
        </Button>

        <Link href="/sign-up">
          <Button className="flex w-full items-center gap-x-7 bg-pink-300 outline-amber-950">
            <span className="font-secondary text-4xl text-brand-pink">LR</span>
            <span className="text-sm text-gray-600">회원가입하기</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IntroRoute;

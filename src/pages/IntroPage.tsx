import Button from "../components/Button";
import Link from "../components/Link";
import GoogleIcon from "../icons/GoogleIcon";
import KaKaoIcon from "../icons/KakaoIcon";

function IntroRoute() {
  return (
    <div className="mx-auto flex h-dvh max-w-120 flex-col py-20">
      <div className="text-end">
        <Link className="underline" href="/login">
          로그인
        </Link>
      </div>

      <h1 className="text-center font-primary text-8xl text-brand-pink">
        LOVREAL
      </h1>

      <div className="mt-auto flex flex-col justify-end gap-y-3 px-4">
        <Button className="bg-blue-50 outline-amber-950">
          <GoogleIcon className="size-8" />
          <span>구글 계정으로 시작하기</span>
        </Button>

        <Button className="bg-amber-300 outline-amber-950">
          <KaKaoIcon className="size-8" />
          <span>카카오 계정으로 시작하기</span>
        </Button>

        <Link href="/signup">
          <Button className="bg-pink-300 text-nowrap outline-amber-950">
            <span className="font-primary text-4xl text-brand-pink">LR</span>
            <span className="font-secondary text-gray-700">회원가입하기</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IntroRoute;

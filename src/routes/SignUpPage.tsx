import LabelWithInput from "./LabelWithInput";
import SignUpButton from "./SignUpButton";

function SignUpPage() {
    return(
        <div className="visible text-center rounded-2xl shadow-2xl border-b-amber-950">
            <h2 className="font-title text-6xl mt-5 text-[rgb(144,41,91)]">lovreal</h2>

        <div className="mx-5 my-10">
            <LabelWithInput name="id" children="아이디" type="text" placeholder="아이디를 입력하세요."></LabelWithInput>
            <LabelWithInput name="password" children="비밀번호" type="text" placeholder="비밀번호를 입력하세요."></LabelWithInput>
            <LabelWithInput name="passwordCheck" children="비밀번호 확인" type="password" placeholder="비밀번호를 다시 입력하세요."></LabelWithInput>
        </div>
        <div className="flex justify-center mb-5">

        <SignUpButton children="시작하기" className="px-5 py-4 hover:text-[rgb(247,205,225)] text-[rgb(63,27,44)] hover:bg-[rgb(164,71,116)] hover:border-amber-50 bg-[rgb(197,140,167)] transition-colors duration-400 ease-in-out"></SignUpButton>
        </div>
        </div>
    )
}

export default SignUpPage
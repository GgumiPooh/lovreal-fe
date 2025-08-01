import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LabelWithInput from "../components/LabelWithInput";

function RequestCouple() {
  const navigate = useNavigate();
  return (
    <form
      className="to-pink-10 mx-auto my-20 h-130 w-120 rounded-2xl border-b-amber-950 bg-gradient-to-b from-pink-200 p-7 shadow-xl"
      onSubmit={handleSubmit}
    >
      <Link
        to="/"
        className="font-title text-6xl text-pink-800 transition-colors duration-200 ease-in-out outline-none hover:text-amber-950"
      >
        {"<"}
      </Link>

      <div>
        <div className="text-center font-title text-6xl text-[rgb(144,41,91)]">
          lovreal
        </div>

        <div className="mt-10">
          <LabelWithInput
            name="requestCoupleId"
            type="text"
            placeholder="커플을 요청할 아이디를 입력해주세요."
          >
            커플 요청
          </LabelWithInput>
        </div>

        <Button
          type="submit"
          className="mx-auto mt-13 bg-[rgb(197,140,167)] px-5 py-4 text-[rgb(63,27,44)] outline-[rgb(164,71,116)] transition-colors duration-300 hover:border-amber-50 hover:bg-[rgb(164,71,116)] hover:text-[rgb(247,205,225)] active:bg-[rgb(210,83,142)]"
        >
          요청
        </Button>
      </div>
    </form>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      requestCoupleId: formData.get("requestCoupleId"),
    };

    const response = await fetch("http://localhost:8080/member/requestCouple", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    alert(await response.text());
    if (response.status == 200) {
      navigate("/member/acceptCouple");
    } else {
      navigate("/member/requestCouple");
    }
    // const result = await reponse.status;
    console.log(response);
  }
}

export default RequestCouple;

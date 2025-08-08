import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroRoute from "./pages/IntroPage";
import InviteCodePage from "./pages/InviteCodePage";
import ReceiveOrSendPage from "./pages/ReceiveOrSendPage";
import SendCodePage from "./pages/SendCodePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroRoute />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/member/sendCode" element={<SendCodePage />} />
        <Route path="/member/inviteCode" element={<InviteCodePage />} />
        <Route path="/member/recieveOrSend" element={<ReceiveOrSendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

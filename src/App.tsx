import { BrowserRouter, Route, Routes } from "react-router-dom";
import CouplePage from "./pages/CouplePage";
import InputInvCoPage from "./pages/InputInvCoPage";
import IntroRoute from "./pages/IntroPage";
import InviteCodePage from "./pages/InviteCodePage";
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
        <Route path="/member/inputInviteCode" element={<InputInvCoPage />} />
        <Route path="/member/inviteCode" element={<InviteCodePage />} />
        <Route path="/member/couplePage" element={<CouplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

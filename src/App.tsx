import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/member/inviteCode" element={<InviteCodePage />} />
        {/* <Route path="/member/acceptCouple" element={<AcceptCouplePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AcceptCouplePage from "./pages/AcceptCouplePage";
import CouplePage from "./pages/CouplePage";
import IntroRoute from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import RequestCouple from "./pages/RequCouplePage";
import SignUpPage from "./pages/SignUpPage";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroRoute />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/member/couple" element={<CouplePage />} />
        <Route path="/member/requestCouple" element={<RequestCouple />} />
        <Route path="/member/acceptCouple" element={<AcceptCouplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

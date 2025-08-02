import { BrowserRouter, Route, Routes } from "react-router-dom";
import AcceptCouplePage from "./routes/AcceptCouplePage";
import CouplePage from "./routes/CouplePage";
import IntroRoute from "./routes/IntroRoute";
import LoginPage from "./routes/LoginPage";
import RequestCouple from "./routes/RequCouplePage";
import SignUpPage from "./routes/SignUpPage";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroRoute />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/member/couple" element={<CouplePage />} />
        <Route path="member/requestCouple" element={<RequestCouple />} />
        <Route path="member/acceptCouple" element={<AcceptCouplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

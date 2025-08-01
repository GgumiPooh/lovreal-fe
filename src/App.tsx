import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroRoute from "./routes/IntroRoute";

import "./App.css";
import SignUpPage from "./routes/SignUpPage";
import LoginPage from "./routes/LoginPage"
import AcceptCouplePage from "./routes/AcceptCouplePage";
import RequestCouple from "./routes/RequCouplePage";
import CouplePage from "./routes/CouplePage";

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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroRoute from "./routes/IntroRoute";

import "./App.css";
import SignUpPage from "./routes/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroRoute />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

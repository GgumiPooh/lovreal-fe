import { Route, Routes } from "react-router-dom";
import IntroRoute from "./routes/IntroRoute";

import "./App.css";
import SignUpPage from "./routes/SignUpPage";

function App() {
  return (       
    <Routes>
      <Route path="/intro" element={<IntroRoute />} />
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;

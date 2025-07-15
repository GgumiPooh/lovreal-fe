import { Route, Routes } from "react-router-dom";
import IntroRoute from "./routes/IntroRoute";

import "./App.css";

function App() {
  return (       
    <Routes>
      <Route path="/intro" element={<IntroRoute />} />
    </Routes>
  );
}

export default App;

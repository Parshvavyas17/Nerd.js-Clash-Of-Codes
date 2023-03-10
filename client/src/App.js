import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Landing from "./pages/Login/Landing";
import Face from "./uploads/Face";
import Gender from "./uploads/Gender";
import Verify from "./uploads/Verify";
import Age from "./uploads/Age";
import Docs from "./pages/Login/Docs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/face" element={<Face />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/age" element={<Age />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;

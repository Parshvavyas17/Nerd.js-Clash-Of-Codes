import { BrowserRouter as Router  , Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="login" element={<Login />} />
      <Route path="Signup" element={<SignUp/>} />
    </Routes>
  </Router>
  );
}

export default App;

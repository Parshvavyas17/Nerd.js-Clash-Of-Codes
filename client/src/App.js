import { BrowserRouter as Router  , Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Upload from "./Upload";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </Router>
  );
}

export default App;

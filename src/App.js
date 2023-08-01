import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginForm/Loginform";
import AdminPanel from "./components/Dashboard/AdminPanel";
import FacultyPannel from "./components/Dashboard/FacultyPannel";
import Signup from "./components/SignupForm/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/admin-dashboard/:userId" element={<AdminPanel />}></Route>
          <Route path="/faculty-dashboard/:userId" element={<FacultyPannel />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

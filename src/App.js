import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginForm/Loginform";
import AdminPanel from "./components/Dashboard/AdminPanel";
import FacultyPannel from "./components/Dashboard/FacultyPannel";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <AdminPanel></AdminPanel> */}
        <FacultyPannel></FacultyPannel>
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;

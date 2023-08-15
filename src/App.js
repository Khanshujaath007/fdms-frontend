import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginForm/Loginform";
import AdminPanel from "./components/Dashboard/AdminPanel";
import FacultyPannel from "./components/Dashboard/FacultyPannel";
import Signup from "./components/SignupForm/Signup";
import FacultyViewProfile from "./components/Dashboard/FacultyViewProfile/FacultyViewProfile";
import FacultyHomePage from "./components/Dashboard/FacultyHomePage.js/FacultyHomePage";
import ShareProfile from "./components/ShareProfile/ShareProfile";
import Update from "./components/Update/Update";
import ProfileCard from "./components/ProfileCard/ProfileCard";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfileCard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/faculty" element={<FacultyPannel />}></Route>
          <Route path="/faculty/home" element={<FacultyHomePage />}></Route>
          {/* this is the route for faculty home page with userId */}
          <Route path="/faculty/home/:userId" element={<FacultyHomePage />}></Route> 
          <Route
            path="/faculty/view-profile/:userId"
            element={<FacultyViewProfile />}
          ></Route>
          <Route
            path="/admin-dashboard/:userId"
            element={<AdminPanel />}
          ></Route>
          <Route
            path="/faculty-dashboard/:userId"
            element={<FacultyPannel />}
          ></Route>
          <Route
            path="/faculty/edit-profile/:userId"
            element={<Update />}
          ></Route>
          <Route path="/share-profile" element={<ShareProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

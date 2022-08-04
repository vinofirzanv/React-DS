import React from "react";
import "./App.css";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Safety from "./components/Safety";
import Support from "./components/Support";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Nitro from "./components/Nitro";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Login from "./components/Login";
import Register from "./components/Register";
import Discover from "./components/Discover";
import ControllingExperience1 from "./components/ControllingExperience1";
import ControllingExperience2 from "./components/ControllingExperience2";
import Roleofadministrators from "./components/Roleofadministrators";
import Reportingproblems from "./components/Reportingproblems";
import Mentalhealth from "./components/Mentalhealth";
import AgeRestricted from "./components/AgeRestricted";
import Tipsagainst from "./components/Tipsagainst";

function App() {
  return (
    <div>
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/Content" element={<Content />}></Route>
          <Route path="/Download" element={<Download />}></Route>
          <Route path="/Nitro" element={<Nitro />}></Route>
          <Route path="/Discover" element={<Discover />}></Route>
          <Route path="/Safety" element={<Safety />}></Route>
          <Route path="/Support" element={<Support />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Careers" element={<Careers />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ControllingExperience1" element={<ControllingExperience1 />}></Route>
          <Route path="/ControllingExperience2" element={<ControllingExperience2 />}></Route>
          <Route path="/Roleofadministrators" element={<Roleofadministrators />}></Route>
          <Route path="/Reportingproblems" element={<Reportingproblems />}></Route>
          <Route path="/Mentalhealth" element={<Mentalhealth />}></Route>
          <Route path="/AgeRestricted" element={<AgeRestricted />}></Route>
          <Route path="/Tipsagainst" element={<Tipsagainst />}></Route>
          
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;

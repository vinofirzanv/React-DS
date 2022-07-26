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
import Test2 from "./components/Test2";
import Discover from "./components/Discover";
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
          <Route path="/test2" element={<Test2 />}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;

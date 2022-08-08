import React from "react";
import "./App.css";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Safety from "./components/Safety";
import Support from "./components/Support";
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
import WhatisDiscord from "./components/WhatisDiscord";
import DiscordCommitment from "./components/DiscordCommitment";
import HelpingYourTeen from "./components/HelpingYourTeen";
import TalkingAboutOnline from "./components/TalkingAboutOnline";
import AnsweringParents from "./components/AnsweringParents";
import EncountersanIssue from "./components/EncountersanIssue";
import WorkingwithCARU from "./components/WorkingwithCARU";
import OurPolicies from "./components/OurPolicies";
import EnforcingourRules from "./components/EnforcingourRules";
import HowweInvestigate from "./components/HowweInvestigate";
import WhatActionweTake from "./components/WhatActionweTake";
import HowyouCanAppeal from "./components/HowyouCanAppeal";
import DiscordTransparencyReport from "./components/DiscordTransparencyReport";
import WorkingwithLawEnforcement from "./components/WorkingwithLawEnforcement";

function App() {
  return (
    <div>
      <Router>
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
          <Route path="/WhatisDiscord" element={<WhatisDiscord />}></Route>
          <Route path="/DiscordCommitment" element={<DiscordCommitment />}></Route>
          <Route path="/HelpingYourTeen" element={<HelpingYourTeen />}></Route>
          <Route path="/TalkingAboutOnline" element={<TalkingAboutOnline />}></Route>
          <Route path="/AnsweringParents" element={<AnsweringParents />}></Route>
          <Route path="/EncountersanIssue" element={<EncountersanIssue />}></Route>
          <Route path="/WorkingwithCARU" element={<WorkingwithCARU />}></Route>
          <Route path="/OurPolicies" element={<OurPolicies />}></Route>
          <Route path="/EnforcingourRules" element={<EnforcingourRules />}></Route>
          <Route path="/HowweInvestigate" element={<HowweInvestigate />}></Route>
          <Route path="/WhatActionweTake" element={<WhatActionweTake />}></Route>
          <Route path="/HowyouCanAppeal" element={<HowyouCanAppeal />}></Route>
          <Route path="/DiscordTransparencyReport" element={<DiscordTransparencyReport />}></Route>
          <Route path="/WorkingwithLawEnforcement" element={<WorkingwithLawEnforcement />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

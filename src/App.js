import React from "react";
import "./App.css";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Safety from "./pages/Safety/Safety";

import Download from "./pages/Download/Download";
import Nitro from "./pages/Nitro/Nitro";
import Blog from "./pages/Blog/Blog";
import Careers from "./pages/Careers/Careers";
import Login from "./components/Login";
import Register from "./components/Register";
import Discover from "./pages/Discover/Discover";
import ControllingExperience1 from "./pages/Safety/ControllingYourExperience/ControllingExperience1";
import ControllingExperience2 from "./pages/Safety/ControllingYourExperience/ControllingExperience2";
import Roleofadministrators from "./pages/Safety/ControllingYourExperience/Roleofadministrators";
import Reportingproblems from "./pages/Safety/ControllingYourExperience/Reportingproblems";
import Mentalhealth from "./pages/Safety/ControllingYourExperience/Mentalhealth";
import AgeRestricted from "./pages/Safety/ControllingYourExperience/AgeRestricted";
import Tipsagainst from "./pages/Safety/ControllingYourExperience/Tipsagainst";

import WhatisDiscord from "./pages/Safety/ParentsEducators/WhatisDiscord";
import DiscordCommitment from "./pages/Safety/ParentsEducators/DiscordCommitment";
import HelpingYourTeen from "./pages/Safety/ParentsEducators/HelpingYourTeen";
import TalkingAboutOnline from "./pages/Safety/ParentsEducators/TalkingAboutOnline";
import AnsweringParents from "./pages/Safety/ParentsEducators/AnsweringParents";
import EncountersanIssue from "./pages/Safety/ParentsEducators/EncountersanIssue";
import WorkingwithCARU from "./pages/Safety/ParentsEducators/WorkingwithCARU";

import OurPolicies from "./pages/Safety/HowWeEnforceRules/OurPolicies";
import EnforcingourRules from "./pages/Safety/HowWeEnforceRules/EnforcingourRules";
import HowweInvestigate from "./pages/Safety/HowWeEnforceRules/HowweInvestigate";
import WhatActionweTake from "./pages/Safety/HowWeEnforceRules/WhatActionweTake";
import HowyouCanAppeal from "./pages/Safety/HowWeEnforceRules/HowyouCanAppeal";
import DiscordTransparencyReport from "./pages/Safety/HowWeEnforceRules/DiscordTransparencyReport";
import WorkingwithLawEnforcement from "./pages/Safety/HowWeEnforceRules/WorkingwithLawEnforcement";

import Support from "./pages/Support/Support";
import DeveloperHelpCenter from "./pages/Support/DeveloperHelpCenter";
import Announcement from "./pages/Support/Category/Announcement";
import DiscordInterface from "./pages/Support/Category/DiscordInterface";
import AccountSettings from "./pages/Support/Category/AccountSettings";
import GettingStarted from "./pages/Support/Category/GettingStarted";
import ServerSetup from "./pages/Support/Category/ServerSetup";
import CommunityPrograms from "./pages/Support/Category/CommunityPrograms";
import PerksandSubscriptions from "./pages/Support/Category/PerksandSubscriptions";
import Billing from "./pages/Support/Category/Billing";
import TrustySafety from "./pages/Support/Category/TrustySafety";
import FAQ from "./pages/Support/Category/FAQ";

import Feedback from "./pages/Support/Feedback";
import CommunityPost from "./pages/Support/CommunityPost";
import SubmitaRequest from "./pages/Support/SubmitaRequest";
import BlogFeatured from "./pages/Blog/BlogFeatured";


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
          <Route path="/Feedback" element={<Feedback />}></Route>
          <Route path="/CommunityPost" element={<CommunityPost />}></Route>
          <Route path="/SubmitaRequest" element={<SubmitaRequest />}></Route>
          <Route path="/Announcement" element={<Announcement />}></Route>
          <Route path="/DiscordInterface" element={<DiscordInterface />}></Route>
          <Route path="/AccountSettings" element={<AccountSettings />}></Route>
          <Route path="/GettingStarted" element={<GettingStarted />}></Route>
          <Route path="/ServerSetup" element={<ServerSetup />}></Route>
          <Route path="/CommunityPrograms" element={<CommunityPrograms />}></Route>
          <Route path="/PerksandSubscriptions" element={<PerksandSubscriptions />}></Route>
          <Route path="/Billing" element={<Billing />}></Route>
          <Route path="/TrustySafety" element={<TrustySafety />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/DeveloperHelpCenter" element={<DeveloperHelpCenter />}></Route>
          <Route path="/BlogFeatured" element={<BlogFeatured />}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;

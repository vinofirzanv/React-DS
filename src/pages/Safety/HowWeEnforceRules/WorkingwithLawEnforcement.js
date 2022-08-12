import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
function WorkingwithLawEnforcement() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(true);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setIsHovering2(false);
    } else {
      setIsHovering2(true);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setIsHovering3(false);
    } else {
      setIsHovering3(true);
    }
  };

  const onMouseExit = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(false);
    }
  };
  const onMouseExit2 = () => {
    if (window.innerWidth < 960) {
      setIsHovering2(false);
    } else {
      setIsHovering2(false);
    }
  };
  const onMouseExit3 = () => {
    if (window.innerWidth < 960) {
      setIsHovering3(false);
    } else {
      setIsHovering3(false);
    }
  };

  return (
    <Fragment>
      <Header></Header>
      <header className="bg-white lg:py-5 px-2 sm:px-4 py-2.5 mt-[120px]">
        <div className="container grid mx-auto">
          <div className="lg:grid box-border hidden mb-[40px] w-full grid-cols-12 gap-y-0 gap-x-5 py-0 px-[40px]">
            <ul className="flex border-b-[2px] border-gray-300 col-span-12 ">
              <li className="relative mb-[-2px]  border-b-[2px]">
                <Link to={"/Safety"}>
                  <div className="cursor-pointer text-[#747f8d]">
                    <span className="flex pt-0 pb-[10px] px-[16px] items-center">
                      <span className="leading-[1.625] text-[20px]">
                        Safety Center
                      </span>
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Controlling Your Experince
                  </span>
                  <svg
                    fill="#747f8d"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>

                <div>
                  <ul
                    className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                      isHovering ? "" : "hidden"
                    }`}
                  >
                    <li className="block rounded-lg hover:bg-gray-300 ">
                      <Link to={"/ControllingExperience1"}>
                        <div className="block p-2  cursor-pointer hover:bg-gray-400">
                          Four steps to a super safe account{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg  hover:bg-gray-300">
                      <Link to={"/ControllingExperience2"}>
                        <div className="block p-2 cursor-pointer">
                          Four steps to a super safe server{" "}
                        </div>
                      </Link>
                    </li>

                    <li className="block rounded-lg hover:bg-gray-300 ">
                      <Link to={"/Roleofadministrators"}>
                        <div className="block p-2 cursor-pointer">
                          Role of administrators and moderators on Discord
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Reportingproblems"}>
                        <div className="block p-2 cursor-pointer">
                          Reporting problems to Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Mentalhealth"}>
                        <div className="block p-2 cursor-pointer">
                          Mental health on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/AgeRestricted"}>
                        <div className="block p-2 cursor-pointer">
                          Age-Restricted Content on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Tipsagainst"}>
                        <div className="block p-2 cursor-pointer">
                          Tips against spam and hacking{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseExit2}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Parents & Educators
                  </span>
                  <svg
                    fill="#747f8d"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                    isHovering2 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300  ">
                    <Link to={"/WhatisDiscord"}>
                      <div className="block p-2 cursor-pointer">
                        What is Discord?{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/DiscordCommitment"}>
                      <div className="block p-2 cursor-pointer">
                        Discord's commitment to a safe and trusted experience{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/HelpingYourTeen"}>
                      <div className="block p-2 cursor-pointer">
                        Helping your teen stay safe on Discord
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/TalkingAboutOnline"}>
                      <div className="block p-2 cursor-pointer">
                        Talking about online safety with your teen
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/AnsweringParents"}>
                      <div className="block p-2 cursor-pointer">
                        Answering parents' and educators' top questions{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/EncountersanIssue"}>
                      <div className="block p-2 cursor-pointer">
                        If your teen encounters an issue{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/WorkingwithCARU"}>
                      <div className="block p-2 cursor-pointer">
                        Working with CARU to protect users on Discord
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseExit3}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#5865F2] border-[#5865F2] border-b-[2px]">
                  <span className="leading-[1.625] text-[20px]">
                    How We Enforce Rules{" "}
                  </span>
                  <svg
                    fill="#5865F2"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg w-[356px] bg-white ${
                    isHovering3 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/OurPolicies"}>
                      <div className="block p-2 cursor-pointer">
                        Our policies{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/EnforcingourRules"}>
                      <div className="block p-2 cursor-pointer">
                        Enforcing our rules{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/HowweInvestigate"}>
                      <div className="block p-2 cursor-pointer">
                        How we investigate
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/WhatActionweTake"}>
                      <div className="block p-2 cursor-pointer">
                        What actions we take
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/HowyouCanAppeal"}>
                      <div className="block p-2 cursor-pointer">
                        How you can appeal our actions{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/DiscordTransparencyReport"}>
                      <div className="block p-2 cursor-pointer">
                        Discord's Transparency Report
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 text-[#00b0f4]">
                    <Link to={"/WorkingwithLawEnforcement"}>
                      <div className="block p-2 cursor-pointer">
                        Working with law enforcement
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="  lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase font-bold lg:font-bold">
              Working with law enforcement
            </h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p className="mb-6">
                These guidelines are intended for law enforcement authorities
                seeking information/records about Discord users. Discord
                provides user information to law enforcement when we are in
                receipt of enforceable legal process. Discord works with law
                enforcement agencies in cases of immediate danger and/or
                self-harm, pursuant to 18 U.S.C. § 2702. We swiftly report child
                abuse material and the users responsible to the National Center
                for Missing and Exploited Children.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="mt-[56px] mb-[96px] w-full max-w-[1260px] grid box-border grid-cols-12 gap-y-0 gap-x-5 py-0 px-[24px]">
          <div className="col-start-10 col-end-[span_3] block">
            <div className="sticky bg-[#f6f6f6] rounded-lg p-[24px] top-[20px] ">
              <div className="text-[12px] leading-[20px] font-bold uppercase text-[#23272a]">
                Content
              </div>
              <ol className="list-none">
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#satu"
                    className="block text-[#00b0f4] text-[16px] leading-[26px]"
                  >
                    What is Discord?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Contact Information and Service of Process
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Emergency Requests
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Preservation Request
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#lima"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    International Legal Process Requests
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#enam"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Child Safety Policy
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tujuh"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Data Retention Policy
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#delapan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    User Notification
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#sembilan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Cost Reimbursement
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="col-start-1 col-end-[span_9] mt-0 row-start-1 row-end-auto">
            <div className="text-[#4f5660] text-[16px] leading-[24px]">
              <h5
                className="text-[#23272a] mb-4 text-[24px] leading-[120%] font-bold"
                id="satu"
              >
                What is Discord?
              </h5>
              <p className="mb-20">
                Discord is a voice, video, and text chat app that's used by tens
                of millions of people ages 13+ to talk and hang out with their
                communities and friends.
              </p>
              <p className="mb-20">
                The vast majority of servers are private, invite-only spaces for
                groups of friends and communities to stay in touch and spend
                time together. There are also larger, more open communities,
                generally centered around specific topics. All conversations are
                opt-in, so people have total control over whom they interact
                with and what their experience on Discord is.
              </p>
              <p className="mb-20">
                More information about Discord and our community goals can be
                found{" "}
                <a
                  href="/WhatisDiscord"
                  className="text-[#00b0f4] hover:underline"
                >
                  here
                </a>
                .
              </p>

              <h5
                className="text-[#23272a] mb-4 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                Contact Information and Service of Process
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  Our contact preference is email. Please contact us at
                  lawenforcement@discord.com with any questions or legal process
                  documents.
                </li>
                <li>
                  We will not respond to correspondence sent by non-law
                  enforcement officials to the email address listed above.
                </li>
                <li>
                  All legal correspondence should be sent on company or agency
                  letterhead with requisite signatures included.
                </li>
                <li>We will not comply with overly broad or vague requests.</li>
                <ul className="my-[16px] ml-[1em] list-disc">
                  <li>
                    The legal process should identify the user for whom
                    information is being requested.
                  </li>
                  <li>
                    Users should be identified by their 17-18 digit user
                    identification number.
                  </li>
                  <li>
                    If the user identification number is unattainable, a
                    username and four-digit discriminator should be provided.
                  </li>
                  <li>
                    Instructions on how to identify a user can be found{" "}
                    <a href="/" className="text-[#00b0f4] hover:underline">
                      here
                    </a>
                    .
                  </li>
                </ul>
                <li>
                  Be advised, users are allowed to change their usernames and
                  four-digit discriminators, thus responses rendered by Discord
                  may list different usernames and four-digit discriminators
                  than those originally requested.
                </li>
                <li>
                  All legal processes should comply with 18 U.S. Code §
                  2701-2712.
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
               Emergency Requests
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                If you believe that an emergency involving danger of death or serious physical injury to any person requires disclosure without delay, please contact us at lawenforcement@discord.com with the subject line ‘Emergency Request’, and provide the factual basis for the request so that we might evaluate it under 18 U.S.C. § 2702.
                </li>
                <li>
                We provide emergency disclosure responses only when enough information is provided for Discord to, in good faith, believe that the exigent situation requires disclosure of user information, as outlined in 18 U.S.C. § 2702. 
                </li>
                <li>
                We do not disclose information for emergency requests unless they are from law enforcement.
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
               Preservation Request
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Discord accepts requests to preserve records pursuant to 18 U.S.C. § 2703(f).
                </li>
                <li>
                We take steps to preserve account records once proper requests have been received and processed. 
                </li>
                <li>
                Content and non-content information is preserved for 90 days, from the time of processing, and can only be extended for an additional 90 day period, pursuant to 18 U.S.C. § 2703. In certain cases, an additional 90 days may be requested.
                </li>
                <li>
                Please reference the initial preservation request by providing the assigned ticket number and clear date range when sending legal process to obtain the preserved information. 
                </li>
                <li>
                We are not permitted to disclose user information when solely in receipt of a preservation request. 
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="lima"
              >
              International Legal Process Requests 
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Please be advised that Discord is headquartered in and offers its services from the United States of America. Our customer data is stored exclusively in the United States. 
                </li>
                <li>
                If you would like to obtain the requested information from Discord, please follow a Mutual Legal Assistance Treaty (MLAT) or letters rogatory process so that a U.S. court might issue the required U.S. legal process to Discord. 
                </li>
                <li>
                If an international legal process includes reports of child exploitation, Discord will investigate and take steps to archive these materials, remove them from our platform, and report any exploitative content. 
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="enam"
              >
             Child Safety Policy 
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                When we are made aware of potential Child Safety concerns on our platform, our Trust & Safety team reviews the content and reports the content to the National Center for Missing and Exploited Children (NCMEC) or Law Enforcement where appropriate as required by 18 U.S.C. § 2258A. NCMEC will then work with local and international law enforcement as necessary. 
                </li>
                <li>
                User accounts reported to NCMEC are archived and banned from our platform at the time of reporting.
                </li>
                <li>
                When submitting legal processes prompted by NCMEC reporting, include cybertip number and all of the user information provided. 
                </li>
                <li>
                Law enforcement officials should indicate if a request pertains to a NCMEC reporting in the body of the email. 
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="tujuh"
              >
            Data Retention Policy
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Discord does not require and generally does not possess names, addresses or other personal information, as we do not require that information on sign-up. The subscriber information that we possess is limited to an email address, and, if the user is a paid user, we might have limited billing information. In certain circumstances, we might also have a phone number the user has verified. 
                </li>
                <li>
                Due to privacy concerns, Discord removes most user identifiers once a user is deleted, including username and discriminator. 
                </li>
                <li className="text-style: italic">
                Users can always be located by their 17-18 UID number
                </li>
                <li>
                More information regarding Discords data retention and user privacy policy can be found <a href="/privacy" className="text-[#00b0f4] hover:underline">
                      here
                    </a>
                    . 
                </li>
                <li>
                Questions regarding Discords privacy policy can be sent to <a href="mailto:privacy@discord.com" className="text-[#00b0f4] hover:underline">
                privacy@discord.com
                    </a>
                </li>
              </ul>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="delapan"
              >
                 User Notification
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Discord reserves the right to notify users if their information is requested by law enforcement. 
                </li>
                <li>
                Court orders compelling non-disclosure are required to ensure the user is not notified pursuant to 18 U.S.C. § 2705. 
                </li>
                <li className="text-style: italic">
                Non-disclosure orders should include a date range. 
                </li>
                <li>
                Once a non-disclosure order has expired, an extension is required for continued compliance. 
                </li>
                <li>
                Merely <span className="text-style: italic">requesting </span> Discord to not notify a user is not sufficient. ​​Discord reserves the right to notify users in those instances. 
                </li>
              </ul>
            
              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="sembilan"
              >
                 Cost Reimbursement
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Pursuant to 18 U.S.C. § 2706, Discord may require cost reimbursement if the legal process is unduly burdensome or has associated cost.
                </li>
              </ul>

              <p className="mb-4 mt-24">
              Still have questions?
              </p>
              <p className="mb-4">
              Law enforcement should send any additional questions and/or legal process to:
              </p>
              <p className="mb-4">
              lawenforcement@discord.com
              </p>
              <p className="mb-4">
              If needed for mail service, our physical address is as follows:
              </p>  
              <p className="mb-4">
              Discord, Inc. 444 De Haro St, Suite 200 San Francisco, CA, 94107
              </p>  
              <p className="mb-4">
              If serving process by mail, please direct the mail to the Legal Department.
              </p>  
              
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default WorkingwithLawEnforcement;

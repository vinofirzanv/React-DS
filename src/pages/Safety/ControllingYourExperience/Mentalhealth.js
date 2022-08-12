import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";;
function Mentalhealth() {
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
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#5865F2] border-[#5865F2] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Controlling Your Experince
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
                    <li className="block rounded-lg text-[#00b0f4] hover:bg-gray-300">
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
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d]">
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
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/WhatisDiscord"}>
                      <div className="block p-2 cursor-pointer">
                        What is Discord?{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
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
                  <li className="block rounded-lg hover:bg-gray-300">
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
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d]">
                  <span className="leading-[1.625] text-[20px]">
                    How We Enforce Rules{" "}
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
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg w-[356px] bg-white ${
                    isHovering3 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                  <Link to={"/OurPolicies"}>
                    <div className="block p-2 cursor-pointer">Our policies </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
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
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/WhatActionweTake"}>
                    <div className="block p-2 cursor-pointer">
                      What actions we take
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/HowyouCanAppeal"}>
                    <div className="block p-2 cursor-pointer">
                      How you can appeal our actions{" "}
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/DiscordTransparencyReport"}>
                    <div className="block p-2 cursor-pointer">
                      Discord's Transparency Report
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
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

          <div className="lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="font-bold  lg:font-bold  uppercase">Mental health on Discord</h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p>
                What should I do if someone posts or says something about
                self-harm or suicide?
              </p>
              <p>
                It can be difficult to know what to say or do when someone
                expresses a desire to harm themselves.{" "}
                <span className="text-red-600 font-bold">
                  If you are struggling with thoughts of suicide or if another
                  user is in immediate physical danger of harming themselves,
                  please contact a{" "}
                  <a href="#health" className="text-[#00b0f4]">
                    {" "}
                    suicide hotline{" "}
                  </a>{" "}
                  or law enforcement immediately.
                </span>
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
              <ol className="list-none " >
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#satu"
                    className="block text-[#00b0f4] text-[16px] leading-[26px]"
                  >
                    Contact your server admins
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Provide some support resources
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Talk to a parent or trusted adult
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Report to Trust & Safety
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#lima"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Contact law enforcement
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#enam"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Suicide Prevention
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tujuh"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Substance Abuse Support
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#delapan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Eating Disorder Support
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#sembilan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Child Abuse and Domestic Violence
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#sepuluh"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    LGBTQ+ Support
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
                Contact your server admins
              </h5>
              <p className="mb-[16px]">
                If someone has posted comments about harming themselves in a
                server, you may consider reaching out to your server
                administrators or owner to let them know about the situation, so
                they can moderate their server as needed and provide support to
                the server member
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                Provide some support resources
              </h5>
              <p className="mb-[16px]">
                If you are still in touch with the user, you may wish to provide
                them with one of the help hotlines listed below.
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                Talk to a parent or trusted adult
              </h5>
              <p className="mb-[16px]">
                You may not feel qualified to help a friend who expresses their
                desire to hurt themselves, and it may be helpful to ask a parent
                or another trusted adult for help in handling the situation.
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                Report to Trust & Safety
              </h5>
              <p className="mb-[16px]">
                You can always report concerning content to the Trust & Safety
                team using{" "}
                <a href="#health" className="text-[#00b0f4]">
                  {" "}
                  this form.
                </a>{" "}
                You can read about what information we need to investigate{" "}
                <a href="#health" className="text-[#00b0f4]">
                  {" "}
                  here.
                </a>
              </p>
              <p className="mb-[16px]">
                When we receive reports of self-harm threats, we investigate the
                situation and may contact authorities, but in the event of an
                emergency, we encourage you to contact law enforcement in
                addition to contacting us.
              </p>
              <p className="mb-[16px]">
                Please note that for privacy and security reasons we are unable
                to provide personal information such as contact information or
                location to someone who is not the account holder. If you are
                concerned that someone is in immediate danger, please contact
                law enforcement.
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="lima"
              >
                Contact law enforcement
              </h5>
              <p className="mb-[16px]">
                If you or another user you know is in urgent trouble, please
                contact authorities right away, regardless of the limited
                information you might be able to provide. Law enforcement has
                investigative resources and can contact Discord Trust & Safety
                for information that we aren't allowed to disclose otherwise and
                can identify those users to get them help.
              </p>
              <p>Mental health support vs. self-harm encouragement </p>
              <p className="mb-[16px]">
                Support networks and online communities can play a key role in
                helping people who are experiencing mental health issues. We
                support mental health communities on Discord where people can
                come together, and we want these spaces to remain positive and
                healthy.
              </p>
              <p className="mb-[16px]">
                When we receive reports of users or communities discussing or
                encouraging self-harm, we review such content carefully, and we
                take into account the context in which comments are posted. We
                will take action on communities or users that promote,
                encourage, or glorify suicide or self-harm. This includes
                content that encourages others to cut or injure themselves or
                content that encourages or glorifies eating disorders.
              </p>
              <p className="mb-[16px]" id="health">
                Mental Health Resources
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="enam"
              >
                Suicide Prevention
              </h5>
              <p className="font-bold">
                National Suicide Prevention Hotline (U.S.):{" "}
              </p>
              <p>
                <span className="font-bold">Call: </span> 1-800-273-8255,
                available 24/7 for emotional support
              </p>
              <p>
                <span className="font-bold">Text: HOME </span> to 741741
              </p>
              <a
                href="https://suicidepreventionlifeline.org/chat/"
                className="text-[#00b0f4] hover:underline"
              >
                https://suicidepreventionlifeline.org/chat/
              </a>
              <p className="my-4">
                <span className="font-bold">Outside the U.S.: </span> Find a
                supportive resource on this{" "}
                <span className="text-[#00b0f4]  hover:underline">
                  {" "}
                  Wikipedia list of worldwide crisis hotlines{" "}
                </span>
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="tujuh"
              >
                Substance Abuse Support
              </h5>
              <p className="font-bold">
                Substance Abuse and Mental Health Services Hotline
              </p>
              <p>
                <span className="font-bold">Call: </span> 800-662-HELP
              </p>
              <a
                href="https://www.samhsa.gov/"
                className="text-[#00b0f4] hover:underline"
              >
                https://www.samhsa.gov/
              </a>
              <p className="mb-4 text-style: italic">
                Please note that this is not a crisis hotline and should be used
                for referrals only.
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="delapan"
              >
                Eating Disorder Support
              </h5>
              <p className="font-bold">
                National Eating Disorder Association (NEDA) Helpline
              </p>
              <p>
                <span className="font-bold">Call or Text: </span> 1-800-931-2237
              </p>
              <a
                href="https://www.nationaleatingdisorders.org/help-support/contact-helpline"
                className="text-[#00b0f4] hover:underline"
              >
                https://www.nationaleatingdisorders.org/help-support/contact-helpline
              </a>

              <p className="font-bold mt-4">
                Association of Anorexia Nervosa and Associated Disorders
              </p>
              <p>
                <span className="font-bold">Call: </span> 630-577-1330
              </p>
              <a
                href="https://anad.org/our-services/eating-disorders-helpline/"
                className="text-[#00b0f4] hover:underline"
              >
                https://anad.org/our-services/eating-disorders-helpline/
              </a>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="sembilan"
              >
                Child Abuse and Domestic Violence
              </h5>
              <p className="font-bold">National Child Abuse Hotline</p>
              <p>
                <span className="font-bold">Call or Text: </span> 800-422-4453
              </p>
              <a
                href="www.childhelp.org/childhelp-hotline/"
                className="text-[#00b0f4] hover:underline"
              >
                www.childhelp.org/childhelp-hotline/
              </a>

              <p className="font-bold mt-4">National Sexual Assault Hotline</p>
              <p>
                <span className="font-bold">Call: </span> 1-800-656-HOPE (4673)
              </p>
              <a
                href="https://hotline.rainn.org/online"
                className="text-[#00b0f4] hover:underline"
              >
                https://hotline.rainn.org/online
              </a>

              <p className="font-bold mt-4">
                National Domestic Violence Hotline
              </p>
              <p>
                <span className="font-bold">Call: </span> 1-800-799-7233,
                1-800-787-3224 (TTY) En Español
              </p>
              <a
                href="https://www.thehotline.org/"
                className="text-[#00b0f4] hover:underline"
              >
                https://www.thehotline.org/
              </a>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="sepuluh"
              >
                LGBTQ+ Support
              </h5>
              <p className="font-bold">The Trevor Project</p>
              <p>
                <span className="font-bold">Call: </span> 1-866-488-7386
              </p>
              <p>
                <span className="font-bold">Text: START </span> to 678-678
              </p>
              <a
                href="https://www.thetrevorproject.org/get-help-now/"
                className="text-[#00b0f4] hover:underline"
              >
                https://www.thetrevorproject.org/get-help-now/
              </a>

              <p className="font-bold mt-4">Trans Lifeline</p>
              <p>
                <span className="font-bold">Call: </span>877-565-8860
              </p>
              <a
                href="https://translifeline.org/"
                className="text-[#00b0f4] hover:underline"
              >
                https://translifeline.org/
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default Mentalhealth;

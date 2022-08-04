import React, { Fragment, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Tipsagainst() {
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
  const [textColor, setTextColor] = useState("#23272a");
  const handleChangeTextColor = (e) => {
    setTextColor("#00b0f4");
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
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Mentalhealth"}>
                        <div className="block p-2 cursor-pointer">
                          Mental health on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg  hover:bg-gray-300">
                      <Link to={"/AgeRestricted"}>
                        <div className="block p-2 cursor-pointer">
                          Age-Restricted Content on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg text-[#00b0f4] hover:bg-gray-300">
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
                    <a className="block p-2 cursor-pointer">
                      What is Discord?{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Discord's commitment to a safe and trusted experience{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">
                      Helping your teen stay safe on Discord
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Talking about online safety with your teen
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Answering parents' and educators' top questions{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      If your teen encounters an issue{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Working with CARU to protect users on Discord
                    </a>
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
                    <a className="block p-2 cursor-pointer">Our policies </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Enforcing our rules{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">
                      How we investigate
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      What actions we take
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      How you can appeal our actions{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Discord's Transparency Report
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Working with law enforcement
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="font-bold  lg:font-bold lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase">Tips against spam and hacking</h1>
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
              <ol className="list-none " onClick={handleChangeTextColor}>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#satu"
                    className="block text-[#00b0f4] text-[16px] leading-[26px]"
                  >
                    General Spam and Hacking Tips
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Spam
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Hacking incidents, DDoS attacks
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
                General Spam and Hacking Tips
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-bold">
                    Never click on unfamiliar or unexpected links.
                  </span>{" "}
                  If you leave Discord by clicking on a link that takes you
                  elsewhere, it's possible that the external site can access
                  your personal information. We recommend scanning any
                  unfamiliar links through a site checker like{" "}
                  <a
                    href="https://sitecheck.sucuri.net/"
                    className="text-[#00b0f4] hover:underline"
                  >
                    Sucuri
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.virustotal.com/gui/home/upload"
                    className="text-[#00b0f4] hover:underline"
                  >
                    VirusTotal
                  </a>{" "}
                  before clicking on it. You may also consider running all
                  shortened URLs through a URL expander to ensure you know
                  exactly where you will be directed.
                </li>
                <li>
                  <span className="font-bold">
                    Never download unfamiliar files
                  </span>{" "}
                  from anyone you don't know or trust.
                </li>
                <li>
                  <span className="font-bold">
                    Be careful about sharing personal information.
                  </span>{" "}
                  Discord is a great way to meet new friends and join new
                  communities, but as with any online interaction, protect
                  yourself by only sharing personal information with people you
                  know and trust.
                </li>
                <li>
                  <span className="font-bold">
                    Discord will only make announcements through our official
                    channels.
                  </span>{" "}
                  We do not distribute information secondhand through users or
                  chainmail messages.
                </li>
              </ul>
              <p className="my-[16px]">
                If you believe your account has been compromised by another
                Discord user, submit a report to Trust & Safety{" "}
                <a
                  href="/Submitarequest "
                  className="text-[#00b0f4] hover:underline"
                >
                  here.
                </a>
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                Spam
              </h5>
              <p className="mb-[16px]">
                Discord uses a proactive spam filter to protect the experience
                of our users and the health of the platform. Sending spam is
                against our Terms of Service. We might take action against any
                account, bot, or server initiating any of these or similar
                tactics. If you believe spam originated from Discord, email us
                immediately at{" "}
                <a
                  href="support@discordapp.com"
                  className="text-[#00b0f4] hover:underline"
                >
                  support@discordapp.com.
                </a>{" "}
                If you’re getting unsolicited messages or friend requests,{" "}
                <a
                  href="/ControllingExperience1"
                  className="text-[#00b0f4] hover:underline"
                >
                  here’s
                </a>{" "}
                how to change your Privacy Settings.
              </p>

              <p className="mb-[16px]">
                Here are some specific actions we might investigate and act on
                for the health of Discord users:
              </p>

              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
                Direct Message (DM) spam
              </div>
              <p className="mb-[16px]">
                Receiving unsolicited messages or ads is a bad experience for
                users. These are some examples of DM spam for both users and
                bots:
              </p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>unsolicited messages and advertisements</li>
                <li>mass server invites</li>
                <li>
                  multiple messages with the same content over a short period of
                  time
                </li>
              </ul>
              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
                Join 4 Join
              </div>
              <p className="mb-[16px]">
              Join 4 Join is the process of advertising for others to join your server with the promise to join their server in return. This might seem like a quick and fun way to introduce people to your server and to join new communities, but there’s a thin line between Join 4 Join and spam. 
              </p>
              <p className="mb-[16px]">
              Even if these invitations are not unsolicited, they might be flagged by our spam filter. Sending a large number of messages in a short period of time creates a strain on our service. That may result in action being taken on your account.
              </p>

              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
                 Joining many servers, sending many friend requests
              </div>
              <p className="mb-[16px]">
              While we do want you to find new communities and friends on Discord, we will enforce rate limits against spammers who might take advantage of this through bulk joins or bulk requests. Joining a lot of servers simultaneously, or sending a large number of friend requests might be considered spam. In order to shut down spambots, we take action against accounts that join servers too frequently, or send out too many friend requests at one time. The majority of Discord users will never encounter our proactive spam filter, but if, for example, you send a friend request in just a few minutes to everyone you see in a thousand-person server, we may take action on your account. 
              </p>
              <p className="mb-[16px]">
              Instead of joining too many servers at once, we recommend using  <a
                    href="/"
                    className="text-[#00b0f4] hover:underline "
                    
                  >
                    Server Discovery
                  </a> to find active public communities on topics you’re passionate about. 
              </p>

              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
                 Servers dedicated to spamming actions
              </div>
              <p className="mb-[16px]">
              Servers dedicated to mass copy-paste messaging, or encouraging DM advertising, are considered dedicated spam servers.
              </p>
              <p className="mb-[16px]">
              Many servers have popular bots which reward active messaging. We don’t consider these to be spambots, but spam messages to generate these bot prompts is considered abuse of our API, and may result in our taking action on the server and/or the users who participate in mass messaging. Besides cheating those systems, sending a large number of messages in a short period of time harms the platform. 
              </p>

              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
              Invite rewards servers
              </div>
              <p className="mb-[16px]">
              Invite reward servers are servers that promise some form of perk, often financial, for inviting and getting other users to join said server.  We strongly discourage this activity, as it often results in spamming users with unsolicited messages. If it leads to spam or another form of abuse, we may take action including removing the users and server.
              </p>
            
              <div className="text-[20px] mt-[16px] mb-1 text-style: underline">
              Bots and Selfbots 
              </div>
              <p className="mb-[16px]">
              If a bot contacts you to be added to your server, or asks you to click on a suspicious link, please <a href="/submitarequest" className="text-[#00b0f4] hover:underline">report</a> it to our Trust & Safety team for investigation. 
              </p>
              <p className="mb-[16px]">
              We don’t create bots to offer you free products. <span className="font-bold">This is a scam.</span> If you receive a DM from a bot offering you something, or asking you to click on a link, report it. 
              </p>
              <p className="mb-[16px]">
              We understand the allure of free stuff. But we’re sorry to say these bots are not real. Do not add them to your server in hopes of receiving something in return as they likely will compromise your server. If anything gets deleted, we have no way of restoring what was lost. 
              </p>
              <p className="mb-[16px]">
              Using a user token in any application (known as a <a href="/" className="text-[#00b0f4] hover:underline">Selfbot</a>), or any automation of your account, may result in account suspension or termination. Our automated system will flag bots it suspects are being used for spam or any other suspicious activity. The bot, as well as the bot owner’s account, may be disabled as a result of our investigation. If your bot’s code is publicly available, please remove your bot’s token from the text to prevent it from being compromised. 
              </p>

              <h5
                className="text-[#23272a] mt-12 mb-4 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                Hacking incidents, DDoS attacks 
              </h5>
              <p className="mb-[16px]">
              If you believe your account has been compromised through hacking, here are some steps you can take to regain access and protect yourself in the future.
              </p>
              <div className="text-[20px] mt-[16px] mb-1">
              1. Reset your password. 
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li> Choose a long password with a mix of uppercase letters, lowercase letters, and special characters that is hard to guess and isn’t used for anything else. We recommend using a password manager which can make creating and storing secure passwords extremely easy. </li>
                <li> If your account’s token has been compromised, reset your password to generate a new token. You should never give your account password or token to anyone. Discord will never ask for this information. </li>
              </ul>

              <div className="text-[20px] mt-[16px] mb-1">
                 2. <a href="/" className="text-[#00b0f4] hover:underline">Turn on Two-Factor Authentication (2FA) </a>
              </div>
              <p className="mb-[16px]">
              Two-factor authentication (2FA) strengthens your account to protect against intruders by requiring you to provide a second form of confirmation that you are the rightful account owner. Here’s <a href="/" className="text-[#00b0f4] hover:underline">how to set up 2FA</a> on your Discord account. If for some reason you’re having trouble logging in with 2FA, here’s our <a href="/" className="text-[#00b0f4] hover:underline">help article</a>. 
              </p>

              <div className="text-[20px] mt-[16px] mb-1">
              3. DDoS (Distributed Denial of Service) attacks
              </div>
              <p className="mb-[16px]">
              A distributed denial of service (DDoS) attack floods an IP address with useless requests, resulting in the attacked modem or router no longer being able to successfully connect to the internet. If you believe your IP address has been targeted in a DDoS attack, here are some steps you can take:
              </p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>Reset your router via its manufacturer instructions.</li>
                <li>Unplug your modem for 5-10 minutes and then plug it back in. This can cycle your IP address to a new one.</li>
                <li>
                Contact your internet service provider (ISP) for assistance. Your ISP might also be able to tell you where the attack came from. Please note that Discord does not have this information.
                </li>
                <li>
                If you believe this attack is coming from a user on Discord, please <a href="/" className="text-[#00b0f4] hover:underline">file a report</a> with Trust & Safety. 
                </li>
                <li>
                Please note: Discord never shares your IP address with other users. Bad actors might send malicious links such as IP grabbers or other scams in an attempt to get your IP address. Never click on unfamiliar links and be wary about sharing your IP address with anyone
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default Tipsagainst;

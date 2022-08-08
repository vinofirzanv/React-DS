import React, { useState, useEffect, useMemo } from "react";
import Header from "./Header";
import careers1 from "../assets/careers1.jpg";
import { dataCareers } from "../datacareers";
import Buttonz from "./Buttonz";
import Menuz from "./Menuz";
import SlickImage from "./SlickImage";
import Footer from "./Footer";


function Careers() {
  const [buttons, setButtons] = useState([]);
  const allData = useMemo(() => {
    const dataBaru = [];
    dataCareers.map((x) =>
      dataBaru?.filter((a) => a.category === x.category).length > 0
        ? null
        : dataBaru?.push(x)
    );
    return dataBaru;
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setButtons([
      {
        id: Math.random(),
        category: "Featured",
      },
      ...allData,
    ]);
    //eslint-disable-next-line
  }, []);

  const [menuItem, setMenuItem] = useState(dataCareers);
  const filter = (buttons) => {
    if (buttons.category === "Featured") {
      setMenuItem(dataCareers);
      return;
    }
    const filteredData = dataCareers.filter(
      (item) => item.category === buttons.category
    );
    setMenuItem(filteredData);
  };

  return (
    <div className="h-full overflow-hidden mx-auto">
      <div>
        <div className="bg-[#f6f6f6]">
          <div className="bg-[#5865f2]">
            <Header></Header>
            <div className="py-[120px] ">
              <div className="mx-auto w-full max-w-[1260px] gird box-border grid-cols-12 py-0 px-[40px] gap-5">
                <div className="grid-cols-12 w-full flex justify-center">
                  <a href="/" className="text-black text-center mb-8">
                    {" "}
                    <button className="rounded-[28px] py-[16px] px-[32px] bg-white">
                      {" "}
                      Notice on Recruitment Scams
                    </button>
                  </a>
                </div>
                <h1 className="grid-cols-12 text-white text-center text-[56px] font-extrabold uppercase">
                  Work at Discord
                </h1>
                <div className="col-span-4 mt-[40px] text-white text-center text-xl px-40">
                  Discord is home to passionate people who value our
                  mission—giving you the power to create belonging in your life.
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-[1260px] box-border grid-cols-12 py-0 px-[40px] gap-5">
                <div className="relative col-start-3 col-end-[span_8] pt-[120px] ">
                  <div className="relative z-50 rounded-2xl w-full block pb-[56.25%]">
                    <iframe
                      src="https://www.youtube.com/embed/hX9MOVIMYkg"
                      className="absolute top-0 left-0 w-full h-full will-change-[opacity]"
                      title="Discord"
                    ></iframe>
                  </div>
                  <div className="contents relative w-full h-auto">
                    <div className="top-[10%] left-[-40%] absolute">
                      <img
                        className="rounded-xl h-[220px] w-[380px]"
                        src={careers1}
                        alt="Gambar1"
                      ></img>
                    </div>
                    <div className="top-[90%] left-[-10%] absolute">
                      <img
                        className="rounded-xl w-[180px] h-[103px]"
                        src={careers1}
                        alt="Gambar2"
                      ></img>
                    </div>
                    <div className="top-[15%] left-[80%] absolute h-[160px] w-[280px]">
                      <img
                        className="rounded-xl w-full h-[160px]"
                        src={careers1}
                        alt="Gambar3"
                      ></img>
                    </div>
                    <div className="top-[80%] left-[80%] h-[220px] w-[380px] absolute">
                      <img
                        className="rounded-xl h-[220px] w-[380px]"
                        src={careers1}
                        alt="Gambar4"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center flex-col mx-auto">
            <div className="w-full max-w-[1240px] box-border  mx-auto grid gap-5 p-[40px]">
              <div className="mx-auto mt-[120px] mb-[80px] ">
                <h2 className="mb-6 mx-auto font-extrabold leading-[95%] uppercase text-5xl">
                  We'd love to work with someone like you.
                </h2>
                <div className="leading-[140%] mx-auto">
                  <p className="mx-auto">
                    {" "}
                    We care about creating a delightful experience: for people
                    who use Discord and for ourselves. We value a workplace
                    that's as diverse as our product. People here do work that
                    matters. We keep moving forward with a figure-it-out
                    mentality. And above all, we remember to work with empathy,
                    kindness, and compassion.
                  </p>
                  <p className="mx-auto mt-[34px]">
                    {" "}
                    All of our values help us make a better product, better
                    decisions, and foster a better work environment. As we
                    continue to grow, we stay dedicated to building a company
                    that is representative of the world we live and play in.
                    We'd love your help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[120px] w-full flex items-center flex-col ">
            <div className="w-full box-border grid gap-5 p-[40px] grid-cols-12">
              <h4 className="font-semibold text-[32px] col-span-12 ">
                Filters{" "}
              </h4>
            </div>

            <Buttonz button={buttons} filter={filter}></Buttonz>
            <Menuz menuItem={menuItem}></Menuz>
          </div>

          <div className="bg-[#5865f2] py-[120px] w-full flex items-center flex-col text-white ">
            <div className="w-full box-border grid gap-5 grid-cols-12 py-0 px-[24px] ">
              <h2 className="text-5xl text-black col-span-12 mb-[120px]  ">
                Top Tier Perks and Benefits:
              </h2>
            </div>
            <div className="gap-y-10 w-full max-w-[1260px] box-border grid grid-cols-12 p-[40px]">
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M32.8463 10.4883L26.1796 3.82159C25.8663 3.50992 25.4446 3.33325 25.0013 3.33325H8.33464C7.41297 3.33325 6.66797 4.07992 6.66797 4.99992V34.9999C6.66797 35.9199 7.41297 36.6666 8.33464 36.6666H31.668C32.5896 36.6666 33.3346 35.9199 33.3346 34.9999V11.6666C33.3346 11.2249 33.1596 10.8016 32.8463 10.4883ZM15.0013 14.9999H18.3346V11.6666H21.668V14.9999H25.0013V18.3333H21.668V21.6666H18.3346V18.3333H15.0013V14.9999ZM28.3346 31.6666H11.668V29.9999H28.3346V31.6666ZM28.3346 26.6666H11.668V24.9999H28.3346V26.6666ZM25.0013 11.6666V4.99992L31.668 11.6666H25.0013Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Stay healthy
                </div>
                <div className="text-[20px] leading-[1.625]">
                  We take care of our team with comprehensive Medical, Dental,
                  and Vision plans.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M21.6667 6.66667V0H18.3333V6.66667H0V10H5V16.6667H8.33333V10H18.3333V21.6667H21.6667V10H31.6667V18.3333H35V10H40V6.66667H21.6667Z"></path>
                      <path d="M28.334 30H38.334L33.334 20L28.334 30Z"></path>
                      <path d="M6.66602 28.3333C9.42744 28.3333 11.666 26.0947 11.666 23.3333C11.666 20.5718 9.42744 18.3333 6.66602 18.3333C3.90459 18.3333 1.66602 20.5718 1.66602 23.3333C1.66602 26.0947 3.90459 28.3333 6.66602 28.3333Z"></path>
                      <path d="M15 31.6666C15 38.3332 20.3983 39.9999 25 39.9999C25 39.9999 21.6667 36.6666 21.6667 31.6666C21.6667 26.6666 25 23.3333 25 23.3333C20.3983 23.3333 15 24.9999 15 31.6666Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Parental perks
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Spend some quality time with the next generation with parental
                  leave, fertility, adoption, and surrogacy benefits.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M28.4054 8.73234C31.4187 7.92734 34.5587 8.339 37.2587 9.899L38.9254 7.01067C32.5004 3.304 24.4537 4.91567 19.8787 10.4523C15.302 4.914 7.2537 3.30234 0.832031 7.01067L2.4987 9.899C5.1987 8.339 8.34203 7.92567 11.352 8.73234C13.4704 9.299 15.3337 10.434 16.8004 11.989C10.002 13.4123 4.8787 19.454 4.8787 26.6673H8.21203C8.21203 20.489 13.0437 15.429 19.127 15.039L14.7587 38.3323H24.7587L24.1337 34.999H19.7587V33.3323H23.822L23.197 29.999H19.7604V28.3323H22.8854L22.2604 24.999H19.7604V23.3323H21.947L20.3904 15.0273C26.5854 15.2973 31.547 20.4057 31.547 26.6673H34.8804C34.8804 19.4523 29.757 13.4123 22.9587 11.989C24.4254 10.434 26.2887 9.299 28.4054 8.73234Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">Kick back</div>
                <div className="text-[20px] leading-[1.625]">
                  Stay refreshed with over 19 paid holidays, use-what-you-need
                  sick days, and four weeks of PTO.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M30.0013 5.00342H10.0013C8.1613 5.00342 6.66797 6.49508 6.66797 8.33675V35.0034C6.66797 36.8434 8.1613 38.3368 10.0013 38.3368C11.8413 38.3368 13.3346 36.8434 13.3346 35.0034H26.668C26.668 36.8434 28.1613 38.3368 30.0013 38.3368C31.8413 38.3368 33.3346 36.8434 33.3346 35.0034V8.33675C33.3346 6.49508 31.8413 5.00342 30.0013 5.00342ZM10.0013 11.6701H30.0013V23.3368H10.0013V11.6701ZM12.5013 31.6701C11.1213 31.6701 10.0013 30.5501 10.0013 29.1701C10.0013 27.7901 11.1213 26.6701 12.5013 26.6701C13.8813 26.6701 15.0013 27.7901 15.0013 29.1701C15.0013 30.5501 13.8813 31.6701 12.5013 31.6701ZM25.0013 29.1701C25.0013 27.7901 26.1213 26.6701 27.5013 26.6701C28.8813 26.6701 30.0013 27.7901 30.0013 29.1701C30.0013 30.5501 28.8813 31.6701 27.5013 31.6701C26.1213 31.6701 25.0013 30.5501 25.0013 29.1701Z"></path>
                      <path d="M38.3353 13.3367H35.002V20.0033H38.3353V13.3367Z"></path>
                      <path d="M5.0013 13.3367H1.66797V20.0033H5.0013V13.3367Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Commute easy
                </div>
                <div className="text-[20px] leading-[1.625]">
                  In a non-COVID world, get up to $270 per month for your
                  commuting and parking needs.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M18.334 8.33325V9.99992H21.6673V8.33325C21.6673 5.57659 19.424 3.33325 16.6673 3.33325H13.334V6.66659H16.6673C17.5857 6.66659 18.334 7.41492 18.334 8.33325Z"></path>
                      <path d="M30.0007 3.33325C30.0007 3.33325 26.6673 3.33325 25.0007 4.99992C23.334 6.66659 23.334 9.99992 23.334 9.99992C23.334 9.99992 26.6673 9.99992 28.334 8.33325C30.0007 6.66659 30.0007 3.33325 30.0007 3.33325Z"></path>
                      <path d="M28.3007 20.9451C27.984 16.5201 25.6673 11.6667 20.0007 11.6667C14.3373 11.6667 12.019 16.5201 11.7023 20.9451C10.099 22.5767 8.33398 24.6617 8.33398 28.3334C8.33398 32.3467 11.984 36.6667 20.0007 36.6667C28.0173 36.6667 31.6673 32.3467 31.6673 28.3334C31.6673 24.6617 29.9023 22.5767 28.3007 20.9451Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  The loadout
                </div>
                <div className="text-[20px] leading-[1.625]">
                  When we’re back in the office, enjoy daily catered lunches and
                  snacks, a desk fund to make your space yours, and whatever you
                  need for your computer setup, including a headphone allowance.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M34.9613 34.2583L33.2313 22.7217C33.0996 21.8483 32.6279 21.0617 31.9163 20.535C31.4796 20.215 30.9729 20.02 30.4479 19.94L27.7946 8.00333C27.6146 3.56333 23.9763 0 19.4946 0C15.0146 0 11.3746 3.56333 11.1963 8.00167L8.54294 19.9383C8.01627 20.02 7.50961 20.2133 7.07461 20.5333C6.36294 21.06 5.89128 21.8467 5.75794 22.72L4.02961 34.2567C3.75628 36.08 5.00961 37.7733 6.83127 38.0483L8.47961 38.2933C10.2996 38.5667 11.9963 37.3133 12.2696 35.4917L13.9996 23.955C14.2379 22.3667 13.3129 20.875 11.8663 20.3367L13.3063 13.86C14.8346 15.57 17.0296 16.6667 19.4946 16.6667C21.9596 16.6667 24.1546 15.57 25.6829 13.8633L27.1229 20.34C25.6746 20.8783 24.7513 22.37 24.9896 23.9583L26.7213 35.495C26.9946 37.315 28.6929 38.5683 30.5113 38.2967L32.1596 38.0517C33.9813 37.775 35.2346 36.08 34.9613 34.2583ZM19.4946 13.3333C16.7379 13.3333 14.4946 11.09 14.4946 8.33333C14.4946 5.57667 16.7379 3.33333 19.4946 3.33333C22.2513 3.33333 24.4946 5.57667 24.4946 8.33333C24.4946 11.09 22.2513 13.3333 19.4946 13.3333Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Wellness on us
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Take advantage of a quarterly wellness allowance for your gym
                  membership or other wellness activities. Virtual yoga every
                  week!
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M34.2696 18.3649C32.578 10.9766 30.8313 3.33325 20.0013 3.33325C12.6496 3.33325 6.66797 9.31492 6.66797 16.6666V36.6666H26.668V31.6666H28.3346C30.173 31.6666 31.668 30.1716 31.668 28.3333V23.3333H35.4696C35.4696 23.3333 34.4863 19.3199 34.2696 18.3649ZM20.0013 23.3133C20.0013 23.3133 13.3346 18.4666 13.3346 14.8733C13.3346 11.4616 18.5196 9.97825 20.0013 14.4599C21.483 9.97992 26.668 11.4616 26.668 14.8733C26.668 18.4666 20.0013 23.3133 20.0013 23.3133Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Transgender benefits
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Discord will reimburse up to $20,000 for any procedure related
                  to transition.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M6.25 33L5 38H15L13.75 33H6.25Z"></path>
                      <path d="M26.25 33L25 38H35L33.75 33H26.25Z"></path>
                      <path d="M40 18.4167V15.9167C36.06 15.9167 32.7583 13.2817 31.6667 9.695V3H28.3333V9.695C27.2417 13.2817 23.94 15.9167 20 15.9167C16.06 15.9167 12.7583 13.2817 11.6667 9.695V3H8.33333V9.695C7.24167 13.2817 3.94 15.9167 0 15.9167V18.4167C3.305 18.4167 6.27333 16.975 8.33333 14.6983V23H0V26.3333H8.33333V31.3333H11.6667V26.3333H28.3333V31.3333H31.6667V26.3333H40V23H31.6667V14.6983C33.7267 16.975 36.695 18.4167 40 18.4167ZM28.3333 23H11.6667V14.6983C13.7267 16.975 16.695 18.4167 20 18.4167C23.305 18.4167 26.2733 16.975 28.3333 14.6983V23Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Discord HQ
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Our office is located in Potrero Hill, a little neighborhood
                  in San Francisco near awesome coffee and food.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M11.6858 6.87329L5.17578 9.76662L20.0008 16.5033L25.7324 13.9L11.6858 6.87329Z"></path>
                      <path d="M29.6359 12.1233L34.8242 9.76658L20.6775 3.47825C20.2459 3.28492 19.7542 3.28492 19.3242 3.47825L15.6309 5.12159L29.6359 12.1233Z"></path>
                      <path d="M21.666 19.4068V36.0834L35.676 29.8568C36.2793 29.5918 36.666 28.9934 36.666 28.3351V12.5901L21.666 19.4068Z"></path>
                      <path d="M18.334 19.4068L3.33398 12.5901V28.3351C3.33398 28.9951 3.72065 29.5918 4.32398 29.8584L18.334 36.0834V19.4068ZM6.66732 23.3351V18.3351L15.0007 21.6684V26.6684L6.66732 23.3351Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Relocation
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Excellent relocation bonuses for new hires moving to San
                  Francisco (once it’s safe to return).
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2c2f33] py-[120px] w-full flex items-center flex-col text-white ">
            <div className="w-full max-w-[1260px] gird grid-cols-12 box-border gap-5 py-0 px-[40px] ">
              <div className="text-white col-span-12 mb-[120px] text-[24px] leading-[140%]">
                <p>
                  If you're wanting to work with a motivated team on something
                  that gives millions of users a space to find belonging, check
                  out the four values of working at Discord{" "}
                  <a href="/" className="text-blue-800">
                    on our blog{" "}
                  </a>
                  . For all roles, we're hiring people to join us in our
                  beautiful San Francisco office (when it reopens), and for
                  select, indicated positions, we're currently open to having
                  people join our team remotely in these states:
                </p>
                <p className="mt-[34px] text-center">
                  Alabama - Arizona - California - Colorado - District of
                  Columbia - Florida - Georgia - Illinois - Iowa - Massachusetts
                  - Maryland - Michigan - Minnesota - Montana - Kansas - Nevada
                  - New Jersey - New York - North Carolina - Oklahoma - Oregon -
                  Pennsylvania - Texas - Virginia - Washington
                </p>
              </div>
              <SlickImage></SlickImage>
            </div>

            {/* <div className="w-full">
              <div className="mb-[10px] w-full overflow-hidden relative">
                <div className="flex translate-x-1/4"> */}
                  
                  {/* <div className=" w-[640px] flex-shrink-0 ">
                    <div className="py-0 px-[20px]">
                      <div className=" w-full h-0 pb-[56.25%]">
                        <img
                          className="rounded-2xl w-full h-auto"
                          src={careers1}
                          alt="carrers1"
                        ></img>
                      </div>
                    </div>
                  </div> */}

                  

         

                

                {/* <div className="absolute top-0 bottom-0 right-0 left-0 select-none">
                  <div className="flex items-center w-full h-full justify-between">
                    <div className="m-[8px] w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-[#292c30] justify-center flex items-center">
                      <svg
                        className="arrowLeft-1uowgb"
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"></path>
                      </svg>
                    </div>

                    <div className="m-[8px] w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-[#292c30] justify-center flex items-center">
                      <svg
                        className="arrowLeft-1uowgb"
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"></path>
                      </svg>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <Footer />
       </div>
    //   </div>
    // </div>
  );
}

export default Careers;

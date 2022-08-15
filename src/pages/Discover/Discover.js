import React, { useState, useEffect, useMemo } from "react";
import BannerKiri from "../../assets/Discover-1.svg";
import BannerKanan from "../../assets/Discover-2.svg";
import Banner from "../../assets/Discover-banner.svg";
import Header from "../../components/Header";
import { data } from "../../datadiscover";
import ListCategoryDs from "../../components/ListCategoryDs";
import MenuDiscover from "../../components/MenuDiscover";
import Gambar1 from "../../assets/Gambar-1.svg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

// const uniqueIds = [];
// const uniqueData = data.filter((element) => {
//   const isDuplicate = uniqueIds.includes(element.category);

//   if (!isDuplicate) {
//     uniqueIds.push(element.category);
//     return true;
//   }
//   return false;
// });
// const allCat = [
//   { category: "Featured", logoPath: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z" },
//   ...new Set(
//     uniqueData.map((item) => {
//       return {
//         category: item.category,
//         logoPath: item.logoPath,
//       };
//     })
//   ),
// ];
const count = data.reduce(
  (counter, { id }) => (id !== "0" ? (counter += 1) : counter),
  0
); // 6

const bgf = {
  backgroundImage: `url("${Banner}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Discover() {
  const [buttons, setButtons] = useState([]);
  const allData = useMemo(() => {
    const dataBaru = [];
    data.map((x) =>
      dataBaru?.filter(
        (a) => a.category === x.category && a.logoPath === x.logoPath
      ).length > 0
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
        logoPath:
          "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z",
      },
      ...allData,
    ]);
    //eslint-disable-next-line
  }, []);

  const [menuItem, setMenuItem] = useState(data);
  // const [buttons, setButtons] = useState(unique);

  const filter = (buttons, event, type) => {
    if (type === "search") {
      setSearchInput(event.target.value);
      const filteredData = data.filter((item) => {
        console.log(
          item.detail.map((it) => {
            return it.title;
          })
        );
        const titleFilter = item.detail.map((it) => {
          return it.title;
        });
        return titleFilter
          .toString()
          .toLowerCase()
          .includes(event.target.value.toString().toLowerCase());
        // return Object.keys(titleFilter).some(key=>
        //   item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())
        //   )
      });
      console.log(filteredData);
      // return Object.keys(item).some(key=>
      //   item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())
      //   )
      setMenuItem(filteredData);
    } else {
      if (buttons.category === "Featured") {
        setMenuItem(data);
      } else {
        const filteredData = data.filter(
          (item) => item.category === buttons.category
        );
        setMenuItem(filteredData);
      }
    }
  };

  const [searchInput, setSearchInput] = useState("");

  // data.map((x) =>
  //   dataBaru?.filter((a) => a.category === x.category && a.logoPath === x.logoPath).length > 0
  //       ? null
  //       : dataBaru?.push(x)
  //   )

  // let dataSearch = data.filter(item =>{
  //   return item.category.toLowerCase().includes(searchInput.toLowerCase())
  // });

  return (
    <div>
      <Header></Header>
      {/* <div className="mb-[48px] overflow-x-hidden overflow-y-hidden w-full h-full relative block "> */}
      {/* <div className="mb-[48px] overflow-x-hidden relative">
        <img
          src={BannerKiri}
          alt="bannerkiri"
          className="z-10 absolute block visible left-[-1px] h-[400px]"
        />

        <img
          src={BannerKanan}
          alt="bannerkanan"
          className="z-10 absolute block visible right-[-1px] h-[400px]"
        />

        <div className="relative w-full bg-slate-500">
          <img
            src={Banner}
            className="translate-x-[-50%] ml-[50%]"
            alt="Banner"
          />

          <div className="flex absolute justify-center items-center top-0 w-full h-full z-10 ">
            <div className="text-center mx-[330px] mt-[40px] w-full">
              <h1 className="text-[44px] text-white font-extrabold leading-[95%] uppercase">
                Find your community on discord
              </h1>
              <div className="mt-[16px] text-[16px] font-medium leading-[18px] text-[#fff]">
                From gaming, to music, to learning, there's a place for you.
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="relative overflow-hidden flex flex-col center h-[400px] pb-0 w-full grid-cols-12 mb-[48px] "
        style={bgf}
      >
        <div className=" mx-auto w-full max-w-[1260px] lg:px-40 pt-[60px] pb-[120px]  box-border lg:grid grid-cols-12 gap-x-[20px] gap-y-0 p-10">
          <div className="col-start-2 col-end-[col-span-8] lg:text-center text-white z-10">
            <div className="mb-2 mt-[40px] w-full">
              <h1 className="text-[30px] lg:text-[44px] text-white font-extrabold leading-[95%] uppercase">
                Find your community on discord
              </h1>
              <div className="mt-[16px] text-[16px] font-medium leading-[18px] text-[#fff]">
                From gaming, to music, to learning, there's a place for you.
              </div>
            </div>
          </div>

          <div className="md:absolute md:top-0 md:left-0 z-0 md:w-full md:h-full hidden lg:block">
            <div className="z-10 absolute block visible left-[-1px] h-auto w-auto bottom-0">
              <img src={BannerKiri} alt="banner" />
            </div>

            <div className="z-10 absolute block visible right-[-1px] h-auto w-auto bottom-0">
              <img src={BannerKanan} alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center flex-col container mx-auto">
        <div className="w-full box-border lg:grid grid-cols-12 gap-x-[20px] py-0 px-[40px] gap-y-0">
          <div className="col-start-2 col-end-[span_10] mb-[40px] h-[52px] flex ">
            <div className="mr-[16px] flex-1 text-[16px] pr-[16px] h-auto flex items-center rounded-lg bg-[#e3e5e8]">
              <div className="flex-1 flex flex-col">
                <input
                  placeholder="Explore popular communities"
                  className="p-[16px]  font-medium h-[26px] leading-[16px] text-[16px] box-border w-full rounded-lg bg-[#e3e5e8] text-black"
                  value={searchInput}
                  onChange={(event) => filter(null, event, "search")}
                />
              </div>
            </div>
            <button className="text-[#fff] bg-[#5865f2] w-[52px] h-auto rounded-[8px] relative flex justify-center items-center ">
              <div className="">
                <svg
                  fill="#fff"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="w-full box-border lg:grid grid-cols-12 gap-y-0 gap-x-5 px-[40px] container mx-auto">
          <ListCategoryDs button={buttons} filter={filter}></ListCategoryDs>
          <div className="col-start-[span_7] col-end-auto">
            <div className="text-[20px] leading-[24px] text-black font-bold mb-[16px]">
              {count} Results Found
            </div>

            <MenuDiscover data={menuItem} itemsPerPage={4} />
          </div>
        </div>
      </div>

      <div className="relative bg-[#5865f2] overflow-hidden flex flex-col center min-h-[300px] pb-0 w-full grid-cols-12 ">
        <div className=" mx-auto my-auto w-full max-w-[1260px] box-border grid grid-cols-12  ">
          <div className="col-start-2 col-end-[col-span-8] text-center text-white z-10">
            <div className="mb-2">
              <h1 className="text-2xl lg:text-4xl font-extrabold ">
                Have a server you want to add to Discovery?
              </h1>
            </div>

            <a href="https://support.discord.com/hc/en-us/articles/4673515000983-Discord-Server-Web-Pages">
              <div className="flex flex-wrap text-center justify-center">
                <div className="cursor-pointer rounded-[28px] mr-6 mt-6 inline-flex text-center bg-[#23272a] px-8 font-medium leading-[24px] py-4 text-white box-border">
                  Make Your Community Public
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <header className="bg-[#F6F6F6] lg:py-40 lg:pt-52 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap px-[40px] flex-row lg:flex-row-reverse my-auto mx-auto">
          <div className="w-full text-black px-[40px] lg:pl-40 lg:w-2/3">
            <img className="" src={Gambar1} alt="Gambar2" />
          </div>

          <div className="w-full lg:pl-4 lg:pt-6  lg:w-1/3 ">
            <h2 className="font-bold lg:text-4xl text-xl mb-5">
              Find a place where you belong
            </h2>
            <p className="mb-5">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>

            <Link to={"/Register"}>
              <div className="flex flex-wrap text-center justify-center">
                <div className="cursor-pointer rounded-[28px] mr-6 mb-32 inline-flex text-center bg-[#23272a] px-8 font-medium leading-[24px] py-4 w-[327px] justify-center text-white box-border">
                  Join Discord
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}

export default Discover;

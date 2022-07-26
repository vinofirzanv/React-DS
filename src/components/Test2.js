import React from "react";
import MonthList from "./MonthList";
import Banner2 from "../assets/banner-2.svg";

function test2() {
  const bgf = {
    backgroundImage: `url("${Banner2}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="w-[500px] h-[500px] bg-slate-300 " style={bgf}>
      
      {/* <MonthList></MonthList>    */}
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem
        quis dui mollis eleifend. Mauris non lectus in nunc eleifend posuere.
        Nulla eget egestas felis, non fermentum tellus. Nam posuere venenatis
        ex, id euismod est posuere quis. Curabitur viverra lorem ut urna
        tincidunt elementum. Nulla sed lectus velit. Ut tempor leo eget quam
        efficitur interdum. Donec accumsan ex id velit fermentum dictum. Proin
        iaculis varius fermentum. Nam sollicitudin nibh in dictum faucibus.
        Aenean at lectus n.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem
        quis dui mollis eleifend. Mauris non lectus in nunc eleifend posuere.
        Nulla eget egestas felis, non fermentum tellus. Nam posuere venenatis
        ex, id euismod est posuere quis. Curabitur viverra lorem ut urna
        tincidunt elementum. Nulla sed lectus velit. Ut tempor leo eget quam
        efficitur interdum. Donec accumsan ex id velit fermentum dictum. Proin
        iaculis varius fermentum. Nam sollicitudin nibh in dictum faucibus.
        Aenean at lectus n
      
      </div>

    </div>
  );
}

export default test2;

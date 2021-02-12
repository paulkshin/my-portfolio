import React from "react";
import Typewriter from "./Typewriter";

export default function Intro() {
  const textArr = [
    {
      firstText: "Hey there Delilah",
      secondText: "What's it like in NYC",
      thirdText: "i like ya cut g",
      speed: 30,
    },
    {
      firstText: "Scooby Doo",
      secondText: "poo poo",
      thirdText: "xD",
      speed: 15,
    },
    {
      firstText: "34v6bw345vb",
      secondText: "e45ybe45yb",
      thirdText: "xD",
      speed: 50,
    },
    {
      firstText: "ybw45w4yby4",
      secondText: "yb45wyb45",
      thirdText: "owa owa",
      speed: 1,
    },
  ];

  return (
    <section className="h-screen">
      <div className="flex flex-col h-full justify-center items-center">
        {textArr.map((textBlk) => {
          return (
            <Typewriter
              firstText={textBlk.firstText}
              secondText={textBlk.secondText}
              thirdText={textBlk.thirdText}
              speed={textBlk.speed}
              key={textBlk.firstText}
            />
          );
        })}

        <div className="parallax"></div>
        <div
          style={{ height: "900px", backgroundColor: "red", fontSize: "36px" }}
        >
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </div>

        {/* <Typewriter
          firstText="Hey there Delilah"
          secondText="What's it like in NYC"
          thirdText="Pls c me"
          speed={30}
        />
        <Typewriter
          firstText="I love Barney"
          secondText="Tacos tacos tacos"
          thirdText="oh barnacles"
          speed={10}
        /> */}
      </div>
    </section>
  );
}

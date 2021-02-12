import React from "react";
import Typewriter from "./Typewriter";

export default function Intro() {
  return (
    <section className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center">
        <Typewriter
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
        />
      </div>
    </section>
  );
}

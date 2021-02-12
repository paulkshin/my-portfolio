/* eslint-disable react/prop-types */
import React from "react";

import TypeWriterEffect from "react-typewriter-effect";

export default function Typewriter({ firstText, secondText, thirdText, speed }) {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Red Hat Display",
        color: "#3F3D56",
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      startDelay={2000}
      cursorColor="#3F3D56"
      multiText={[`${firstText}`, `${secondText}`, `${thirdText}`]}
      multiTextDelay={1000}
      typeSpeed={speed}
      hideCursorAfterText={true}
    />
  );
}

"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Head from "next/head";

interface Props {}

const TypewriterTitle = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Supercharged Productivity.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("AI-Powered Insights.")
            .start();
        }}
      />
    </>
  );
};

export default TypewriterTitle;

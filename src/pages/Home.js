import React from "react";
import Insta from "../components/Insta";
import Section from "../components/Section";
import Sectiontwo from "../components/Sectiontwo";

const Home = () => {
  return (
    <>
      {/* <section className="bg-black dark:bg-gray-900 "> */}
        {/* <div className="grid h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> */}

        <div className="h-screen bg-cover bg-fixed bg-bottom" style={{backgroundImage: `url("images/banner.svg")`}} >

          
          {/* <img
              src="images/banner.svg"
              alt="main img"
              className="absolute inset-0 mt-8 sm-mt-2 w-screen h-screen object-cover"
            /> */}
          {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Hemant Arts
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p> */}
          {/* <div className=" h-screen relative ">
            <img
              src="images/banner.svg"
              alt="main img"
              className="absolute inset-0  w-screen h-screen object-cover"
            />

            <h1 className="banner-text absolute font-bold text-white text-5xl md:text-6xl  left-4 lg:left-60 lg:text-8xl bottom-16 md:bottom-32 lg:bottom-24">
              Hemant Arts
            </h1>
          </div> */}
          <h1 className="banner-text absolute font-bold text-white text-5xl md:text-6xl  left-4 lg:left-60 lg:text-8xl bottom-16 md:bottom-32 lg:bottom-28">
              Hemant Arts
            </h1>
          
        </div>
        <Section/>
        <Sectiontwo/>
        <Insta/>

        {/* </div> */}
      {/* </section> */}
    </>
  );
};

export default Home;

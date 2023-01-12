import React from "react";
import Insta from "../components/Insta";
import Order from "../components/Order";
import Section from "../components/Section";
import Sectiontwo from "../components/Sectiontwo";

const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-fixed bg-bottom"
        style={{ backgroundImage: `url("images/banner.svg")` }}
      >
        <h1 className="banner-text absolute font-bold text-white text-5xl md:text-6xl left-4 lg:left-60 lg:text-8xl bottom-32 md:bottom-32 lg:bottom-28">
          Hemant Arts
        </h1>
      </div>
      <Section />
      <Sectiontwo />
      <Order />
    </>
  );
};

export default Home;

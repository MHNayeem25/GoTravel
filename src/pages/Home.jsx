import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/ServicesOffered/Service";
import Destination from "../components/Popular/Destination";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
    </>
  );
}

export default Home;

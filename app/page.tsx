"use client";


import FilterYoutuber from "@/components/FilterYoutuber";
import Hero from "@/components/Hero";

const Home = () => {
  return (
   
      <div className="max-w-7xl w-full">
        <Hero />
        <FilterYoutuber/>
      </div>
  );
};

export default Home;

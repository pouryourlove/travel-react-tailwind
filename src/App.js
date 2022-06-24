import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects/>
      <Carousel/>
    </div>
  );
}

export default App;

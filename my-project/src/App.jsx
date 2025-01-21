import React from "react";
import MovieList from "./Components/views/MovieList";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div  className=" container-fluid ">
      <div  className=" container w-9/12 mx-auto">
      <Header />
      </div>
      <div className=" container w-2/3 mx-auto">
      <Hero />
      <MovieList />
      </div>
    </div>
  );
};

export default App;

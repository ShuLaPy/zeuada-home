import React from "react";
import "@pages/newtab/containers/Home/Home.css";
import "@pages/newtab/containers/Home/Home.scss";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";

const Home = () => {
  return (
    <div className="home">
      <BackgroundImage />
    </div>
  );
};

export default Home;

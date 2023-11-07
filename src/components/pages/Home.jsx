import React from "react";
import Bonds from "../UI/Bonds";
import SomeInformation from "../UI/SomeInformation";

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>

      <SomeInformation />
      <Bonds />
    </div>
  );
};
export default Home;

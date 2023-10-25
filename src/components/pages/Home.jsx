import React from "react";
import Bonds from "../UI/Bonds";
import SomeInformation from "../UI/SomeInformation";
import store from "../../store/index";
import { increment, decrement } from "../../store/ReduserTest";

const Home = () => {
  const addId = () => {
    store.dispatch(increment());
  };
  const addArray = () => {
    store.dispatch(decrement());
  };

  return (
    <div className="home">
      <button onClick={addId}>PLUS</button>
      <button onClick={addArray}>push to array</button>
      <h1>Home Page</h1>
      <SomeInformation />
      {/* <Bonds /> */}
    </div>
  );
};
export default Home;

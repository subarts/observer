import React from "react";
import PostServise from "../../API/RequestBonds";
const ButtonGetBonds = () => {
  return <button onClick={PostServise.getBonds}>Get a bonds</button>;
};
export default ButtonGetBonds;

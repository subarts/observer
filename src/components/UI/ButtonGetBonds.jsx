import React from "react";
import { useState } from "react";
import PostServise from "../../API/RequestBonds";
const ButtonGetBonds = () => {
  const [posts, setPosts] = useState([]);
  async function fetchBonds() {
    const response = await PostServise.getBonds();
    console.log(response);
  }
  return <button onClick={fetchBonds}>Get a bonds</button>;
};
export default ButtonGetBonds;

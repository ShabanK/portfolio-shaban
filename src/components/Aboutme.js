import React from "react";
import axios from "axios";

function Aboutme() {
  axios.get("www.api-github.com/users/ShabanK").then((data) => {
    console.log(data);
  });
  return <></>;
}

export default Aboutme;

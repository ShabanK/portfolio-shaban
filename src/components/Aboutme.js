import React, { useEffect, useState } from "react";
import axios from "axios";

function Aboutme() {
  const [profilePicture, setProfilePicture] = useState("");
  async function fetchPicture() {
    await axios.get("https://api.github.com/users/ShabanK").then((obj) => {
      setProfilePicture(obj.data.avatar_url);
    });
  }
  useEffect(() => {
    fetchPicture();
  }, []);
  //
  return (
    <>
      <img src={profilePicture} alt="well i guess axios failed me" />
    </>
  );
}

export default Aboutme;

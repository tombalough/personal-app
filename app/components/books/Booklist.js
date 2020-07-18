import React, { useState, useEffect } from "react";
import Axios from "axios";

const gitHubUrl =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.goodreads.com/review/list/108291935.xml?key=0NOgToyDTBI3wOZX2gAg&v=2&shelf=read&sort =date_read";

const Booklist = (props) => {
  const [userData, setUserData] = useState({});

  const apiCall = async () => {
    const response = await Axios.get(gitHubUrl);
    setUserData(response.data);
  };

  useEffect(() => {
    apiCall();
  }, []);
  console.log(userData);
  return (
    <div>
      <h1>Test Test Test</h1>
      <p>{userData.name}</p>
      <p>{userData.public_repos}</p>
    </div>
  );
};

export default Booklist;

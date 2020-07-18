import React, { useState, useEffect } from "react";
import Axios from "axios";

const url =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.goodreads.com/review/list/108291935.xml?key=" +
  GR_KEY +
  "&v=2&shelf=read&sort=date_read&per_page=200";

const Booklist = (props) => {
  const [bookData, setBookData] = useState({});

  const apiCall = async () => {
    const response = await Axios.get(url);
    setBookData(response.data);
  };

  useEffect(() => {
    apiCall();
  }, []);
  //console.log(userData);
  //console.log(userData.title);

  var domParser = new DOMParser();

  //Parse the XML string into an XMLDocument object using
  //the DOMParser.parseFromString() method.
  var xmlDocument = domParser.parseFromString(bookData, "text/xml");

  var title = xmlDocument.getElementsByTagName("review")[0];
  var title2 = xmlDocument.getElementsByTagName("title");

  //Log it to the console
  console.log(xmlDocument);
  console.log(title);
  console.log(title2);

  return (
    <div>
      <h1>Test Test Test</h1>
    </div>
  );
};

export default Booklist;

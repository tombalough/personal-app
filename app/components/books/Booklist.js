import React, { useState, useEffect } from "react";
import Axios from "axios";
import xml2js from "xml2js";

const url =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.goodreads.com/review/list/108291935.xml?key=" +
  GR_KEY +
  "&v=2&shelf=read&sort=date_read&per_page=2";

var parseString = require("xml2js").parseString;

const Booklist = (props) => {
  const [bookData, setBookData] = useState({});

  /*   async function booklist2() {
    let extractedData = "";
    const response = await Axios.get(url);
    setBookData(response.data);
    parseString(bookData, function (err, result) {
      if (err) {
        console.log("ERROR " + err);
        return;
      }
      extractedData = JSON.parse(JSON.stringify(result));
    });
    console.log(typeof extractedData);
    console.log(extractedData);
  }
 */

  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/108291935.xml?key=0NOgToyDTBI3wOZX2gAg&v=2&shelf=read&sort=date_read&per_page=2`
  )
    .then((res) => res.text())
    .then((body) => {
      xml2js.parseString(body, function (err, res) {
        if (err) console.log(err);
        let bookList3 = res.GoodreadsResponse.reviews[0].review;
        console.log(typeof res);
        console.log(typeof body);
        console.log(
          res.GoodreadsResponse.reviews[0].review[0].book[0].title[0]
        );
        console.log(bookList3[0].book[0].title[0]);
      });
    });

  //booklist2();
  /*  useEffect(() => {
    booklist2();
  }, []); */

  return (
    <div>
      <h1>Test Test Test</h1>
    </div>
  );
};

export default Booklist;

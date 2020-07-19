import React from "react";
import xml2js from "xml2js";

const url =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.goodreads.com/review/list/108291935.xml?key=" +
  GR_KEY +
  "&v=2&shelf=read&sort=date_read&per_page=5";

var parseString = require("xml2js").parseString;
var convert = require("xml-js");

export default class Booklist2 extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch(url)
      .then((response) => response.text())
      .then(
        (bookData) => this.setState({ loading: false, bookData }),
        (error) => this.setState({ loading: false, error })
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderBookData() {
    //console.log(this.state);
    //console.log(this.state.bookData);
    //console.log(typeof this.state.bookData);
    //console.log(this.state.bookData.getElementsByTagName("GoodreadsResponse"));
    var parser = new DOMParser(),
      xmlDocument = parser.parseFromString(this.state.bookData, "text/xml");
    let length = xmlDocument.getElementsByTagName("review").length - 1;
    console.log(xmlDocument.getElementsByTagName("review"));
    console.log(length);
    let title = xmlDocument.getElementsByTagName("title")[length].innerHTML;
    let author = xmlDocument.getElementsByTagName("name")[length].innerHTML;
    let read = xmlDocument.getElementsByTagName("read_at")[length].innerHTML;
    let review = xmlDocument.getElementsByTagName("body")[length].innerHTML;
    let rating = xmlDocument.getElementsByTagName("rating")[length].innerHTML;
    //read_at
    //body
    //rating
    return (
      <div>
        <h2>{length}</h2>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <h2>{read}</h2>
        <h2>{review}</h2>
        <h2>{rating}</h2>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.bookData) {
      return this.renderBookData();
    } else {
      return this.renderError();
    }
  }
}

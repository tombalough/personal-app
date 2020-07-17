import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Booklist from "../components/books/Booklist.js";

import Main from "../layouts/Main";

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Books = () => (
  <Main>
    <Helmet title="Books" />
    <article className="post" id="books">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">Books</Link>
          </h2>
          <div>
            <p>
              I've pulled my reading list and reviews from the{" "}
              <a href="https://www.goodreads.com/user/show/108291935-tom-balough">
                goodreads
              </a>{" "}
              API; take a look below.
            </p>
          </div>
        </div>
      </header>
      <Booklist />
    </article>
  </Main>
);

export default Books;

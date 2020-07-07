import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p></p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. I'll be using this site to play around with web
        technologies, publish data science explorations, and track
        exercise/reading.
      </p>
      <p> </p>
    </article>
  </Main>
);

export default Index;

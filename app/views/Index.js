import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>About</h2>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. I'll be using this site to explore web
        technologies and publish side projects. Source{" "}
        <a href="https://github.com/tombalough/personal-app">here</a>.
      </p>
      <p> </p>
    </article>
  </Main>
);

export default Index;

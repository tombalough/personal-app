import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import MapChart from "../components/Map/MapChart.js";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome</h2>
        </div>
      </header>
      <p style={{ marginBottom: "0px" }}>
        {" "}
        Thanks for visiting my site. I'll be using this to explore web
        technologies and publish side projects. Source{" "}
        <a href="https://github.com/tombalough/personal-app">here</a>.
      </p>
      <MapChart />
    </article>
  </Main>
);

export default Index;

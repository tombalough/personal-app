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
      <hr />
      <MapChart />
      <p style={{ marginBottom: "0px" }}>
        {" "}
        A few of the places I've lived on an{" "}
        <a href="https://en.wikipedia.org/wiki/Albers_projection">
          Albers equal-area projection.
        </a>{" "}
        Generally, our mental model of geographic area is inaccurate due to
        distortion of the default{" "}
        <a href="https://en.wikipedia.org/wiki/Mercator_projection">
          Mercator projection.
        </a>{" "}
        Take a look <a href="https://thetruesize.com/">this tool</a> to get a
        better feel for true geographic area. Also, check out{" "}
        <a href="https://www.youtube.com/watch?v=vVX-PrBRtTY">this clip</a> from
        The West Wing.
      </p>
    </article>
  </Main>
);

export default Index;

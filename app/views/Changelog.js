import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

import Main from "../layouts/Main";

import markdown from "../data/changelog.md";

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Changelog = () => (
  <Main>
    <Helmet title="Changelog" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/changelog">Changelog</Link>
          </h2>
          <div>
            <p>Notes on progress, technologies, challenges, etc</p>
          </div>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Changelog;

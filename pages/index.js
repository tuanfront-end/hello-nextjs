import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/smarts/Header/Header";
export default class index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>My styled page</title>
          <link href="/static/app.css" rel="stylesheet" />
          <link href="/static/tachyons.min.css" rel="stylesheet" />
        </Head>
        <Header />
      </div>
    );
  }
}

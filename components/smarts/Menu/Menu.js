import React, { Component } from "react";
import Link from "next/link";

export default class Menu extends Component {
  render() {
    const linkStyle = {
      marginRight: 15
    };
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    );
  }
}

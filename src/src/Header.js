import React from "react";
import HeaderTop from "./Header_top";
import HeaderBody from "./Header_body";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {}
        <HeaderTop></HeaderTop>
        {}
        <HeaderBody></HeaderBody>
      </header>
    );
  }
}

export default Header;

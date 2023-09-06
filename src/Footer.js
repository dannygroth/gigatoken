import React from "react";
import Logo from "./images/GigaChad.png";

const token_name = "Gigachad"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__logo">
          <img src={Logo} alt="brand logo" />
          <span className="text text--medium">{token_name}</span>
        </div>
      </div>        
      <div className="footer__bottom">
        <div className="footer__bottom__copyright text text--small text--regular">
          ©2022 {token_name}. All rights reserved.
        </div>
      </div>
      </footer>
    );
  }
}

export default Footer;

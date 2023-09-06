import React from "react";
import Logo from "./images/GigaChad.png";
import Twitter from "./images/twitter2.png";
import Telegram from "./images/telegram2.png";
import Discord from "./images/discord2.png";
import {Link as LinkR} from 'react-scroll';
import { ConnectButton } from './Connect_button';

const token_name = "Gigachad";
const token_address = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_top">
        <div className="logo">
          <embed src={Logo} alt="brand logo" />
          <span className="logo-topleft">{token_name}</span>
        </div>
        <nav className="header-nav">
          <ul className="list list--inline">
            <LinkR to="teamLink" spy={true} smooth={true}><li className="list__item text text--large text--medium">
              Team
            </li></LinkR>
            <LinkR to="features" spy={true} smooth={true}><li className="list__item text text--large text--medium">
              Tokenomics
            </li></LinkR>
            <LinkR to="roadmap" spy={true} smooth={true}><li className="list__item text text--large text--medium">
              Roadmap
            </li></LinkR>
            <LinkR to="trade-securely" spy={true} smooth={true}><li className="list__item text text--large text--medium">
              Buy
            </li></LinkR>
          </ul>
          <div href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/Giga_Tokens">
          <img className ="discord" alt="Twitter" src={Twitter}></img>
          </button></form></div>
          <div href="https://discord.gg/h5W2MNaB" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://discord.gg/h5W2MNaB">
          <img className ="discord" alt="Discord" src={Discord}></img>
          </button></form></div>
          <div href="https://t.me/elonmusk" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/+DQYxv-PQQSBkM2Nh">
          <img className ="discord" alt="Telegram" src={Telegram}></img>
          </button>
          </form></div>
          <div>
          <button className="btn btn--accent text--small text--medium btn-top-right" onClick={() => window.open(`https://app.uniswap.org/#/swap?outputCurrency={token_address}`, '_blank')}>
            Swap
          </button>
          </div>
          <span className="vertical-line" />
          <ConnectButton />
          <form>
          <button className="btn btn--link text text--small text--medium"  formaction="https://twitter.com/elonmusk">
          <img className ="discord2" alt="Twitter" src={Twitter}></img>
          </button>
          </form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/+DQYxv-PQQSBkM2Nh">
          <img className ="discord2" alt="Telegram" src={Telegram}></img>
          </button>
          </form>
          <form>
          <button className="btn btn--link text text--small text--medium"  formaction="https://discord.gg/pW5UBdJ8">
          <img className ="discord2" alt="Discord" src={Discord}></img>
          </button>
          </form>
        </nav>
      </div>
      
    );
  }
}

export default Header_top;

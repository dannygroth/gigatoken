import React from "react";
import MetaMask from "./images/metamask.svg";
import BNB from "./images/ETH.png";
import Pancake from "./images/Uniswap.png";
import SwapToken from "./images/Swap.png";
import ChevronRight from "./images/chevron-right.svg";
import { ConnectMeta } from './Wallet';

const token = 'GIGA';
const token_address = 'xxxxxxxxxx';


class Trade_securely extends React.Component {
  render() {
    return (
      <section className="trade-securely">
        <br/>
        <ConnectMeta />
        <h3 className="text--primary text-howBuy">Buy { token }</h3>
        
        
        <div className="road-body">
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="MetaMask" src={MetaMask}/>
          </div>
          <div className="card__header">
            <h3>Create MetaMask Wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
          Create a MetaMask Wallet using either a PC or a mobile device. This wallet will allow you to buy, sell, send, and receive { token }.
          </p>
          <a href="https://metamask.io/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Create Wallet</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="BNB" src={BNB} />
          </div>
          <div className="card__header">
            <h3>Send ETH to your wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can buy ETH directly from exchanges like Binance, or a DEX. Make sure to use the Etherium network when transferring ETH.
          </p>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="PanCake" src={Pancake} />
          </div>
          <div className="card__header">
            <h3>Connect wallet to UniSwap</h3>
          </div>
          <p className="text text-small text--regular card__text">
          Swap, earn, and build on the leading decentralized crypto trading protocol. UniSwap will allow you to buy { token }.
          </p>
          <a href="https://app.uniswap.org/#/swap" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">UniSwap</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon2">
            <img alt="SwapECAT" src={SwapToken} />
          </div>
          <div className="card__header">
            <h3>Swap ETH for { token } Token</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address.
          </p>
          <a href={"https://app.uniswap.org/#/swap?outputCurrency=" + token_address} nofollow="true" target="_blank" rel="noreferrer">
            <button className="btn btn--flex btn--accent">
              <span className="text--standart text--medium text-bold">{ token } Token</span>
              <div className="chiron-icon-container">
                <img src={ChevronRight} alt="Right Icon" />
              </div>
            </button>
          </a>
        </div>
      </div>

      </section>
    );
  }
}

export default Trade_securely;

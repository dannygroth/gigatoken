import React, { useState, useEffect } from "react";
import axios from 'axios';
import coin from "./images/CHAD.png";
import {Link as LinkR} from 'react-scroll';
import Typical from 'react-typical';
import Whitepaper from "./images/whitepaper.svg";


const token_name = "Gigachad";
const token = 'GIGA';
const token_address = '0xfb5b838b6cfeedc2873ab27866079ac55363d37e';
const url = `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=${token_address}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;


const Header_body = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    // Fetch data initially
    fetchData();
  
    // Set up interval to refresh data every 30 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);
  
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  
  if(!data) return null

  return (
    <div className="header_body">
      <div className="grid_choose grid-gap--small">
        <div className="value-proposition">
          <embed src={coin} className="token_logo"/>
          <h1 className="value-proposition__title">
            Your new GIGAntic Opportunity
          </h1>
          <p className="value-proposition__text text text--small text--regular">
            Wish you got into <Typical className="typical"
              steps={['SHIB', 1500, 'DOGE', 1500, 'PEPE', 1500, 'BTC', 1500, 'ETH', 1500, 'BNB', 1500, 'SOL', 1500, 'ADA', 1500, 'AVAX', 1500, 'MATIC', 1500, 'LINK', 1500]}
              loop={Infinity}
              wrapper="p"
            />early?</p><p> Well this is your chance! {token_name} (<b>{token}</b>) is here.
          </p>
          <div className="badge-container-price">
            <span className="badge-hold badge--dark-hold text--small">Address:</span>
            <span className="text text--small text--regular text--white badge-hold2">{token_address}</span>
          </div>
          <br />
          <div className="badge-container-price">
            <span className="badge-hold badge--dark-hold text--small">Total Supply:</span>
            <span className="text text--small text--regular text--white badge-hold2">10,000,000,000</span>
          </div>
          <br />
          <div className="badge-container-price">
            <span className="badge-hold badge--dark-hold text--small">Market Cap:</span>
            <span className="text text--small text--regular text--white badge-hold2">$1600</span>
          </div>
          <br />
          <div className="badge-container-price">
            <span className="badge-hold badge--dark-hold text--small">Price:</span>
            <span className="text text--small text--regular text--white badge-hold2">0.00001</span>
          </div>
          <br />
          <LinkR to="trade-securely" spy={true} smooth={true}>
            <button className="value-proposition__button btn btn--flex btn--accent btn-buy" > 
              <span className="text--standart text--medium text-bold">Buy {token}</span>
            </button>
          </LinkR>
          <a href={"https://docs.floki.com/floki-whitepaper/"} target="_blank" rel="noopener noreferrer">
            <button href={"https://docs.floki.com/floki-whitepaper/"} target="_blank" rel="noopener noreferrer" className="btn btn--accent text--small text--medium btn-top-right-wp">
              Whitepaper <embed src={Whitepaper} className="swap" alt="swap icon"></embed>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header_body;

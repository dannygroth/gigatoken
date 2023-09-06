import React from "react";

const token = "GIGA"

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">
        <div className="roadmap-header">
        <h2>Roadmap</h2>
        <p className="text text--standart text--regular ">
          Let’s look at the path {token} will take on it's journey to take over the defi world.
        </p>
        </div>
        <div className="road-body">
        <div className="card card--secondary card-red">
          <div className="card__header">
            <h3>Phase 1</h3>
          </div>
          <ul>
            <li>Launch</li>
            <li>Renounce Contract</li>
            <li>Marketing</li>
            <li>Listing on CoinGecko/ CoinMarketCap</li>
          </ul>
        </div>
        <div className="card card--white card-yellow">
          <div className="card__header">
            <h3>Phase 2</h3>
          </div>
          <ul>
            <li>Community Building</li>
            <li>CEX Listing</li>
            <li>1000+ Holders</li>
            <li>Buy Back and Burn</li>
          </ul>
        </div>
        <div className="card card--white card-green">
          <div className="card__header">
            <h3>Phase 3</h3>
          </div>
          <ul>
            <li>NFT Project</li>
            <li>Air Drop</li>
            <li>Community Giveaway</li>
            <li>10,000+ Holders</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;

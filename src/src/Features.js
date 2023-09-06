import React from "react";

const token = 'GIGA';

class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <h1>
          Tokenomics
        </h1>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Total Supply = 10,000,000,000</h2>
            <p className="banner__text text text--large text--regular text--muted">
            Fees will be used to Buyback and Burn Liquidity Pool. No future minting allowed in the contract. NFTs will be distributed to the community through giveaways, community interaction, and surprise airdrops. 
            </p>
            <div className="road-body features-card">
            <div className="card card--secondary card--white">
          <div className="card__header">
            <h3> Total Supply </h3>
          </div>
          <h2>10 Billion</h2>
        </div>
        <div className="card card--secondary card--white">
          <div className="card__header">
            <h3> DEX Liquidity </h3>
          </div>
          <h2>87%</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3>CEX Liquidity</h3>
          </div>
          <h2>10%</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3>Team</h3>
          </div>
          <h2>3%</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3>Fees</h3>
          </div>
          <h2>2.95% Buy 2.95% Sell</h2>
        </div>
        </div>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Rewards for Community</h2>
            <p className="banner__text text text--large text--regular text--muted">
            {token} offers rewards for Community Creation. If you have a a piece of art, media, or anything {token} related send it to {token} Twitter for a chance at an airdrop.
            </p>
            <form>
          </form>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">
              Vote on {token} Governance
            </h2>
            <p className="banner__text text text--large text--regular text--muted">
            {token} will slowly transition into a DAO where all governance and changes will be voted on through the community using the   
            {token} token. 
            </p>
          </div>
        </div>
        <div className="grid_choose">
          <div className="banner--left">
            <h2 className="banner__title">
              Hold and Earn
            </h2>
            <p className="banner__text text text--large text--regular text--muted">
            Holding certain amounts of {token} during a Snapshot guarantees you airdrops of NFTs
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;

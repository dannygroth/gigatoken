import React from "react";
import {Link} from 'react-scroll';

const token = "GIGA";

class Grid_choose extends React.Component {
  render() {
    return (
      <div className="grid_choose">
        <div className="card_why">
        <div className="banner_grid">
          <h2 className="banner__title">Why you should buy {token} Token</h2>
          
          <p className="banner__text text text--large text--regular text--muted why-text">
         

          </p>
          
          <ul className="whyList">
            <li className="nav__list__item_2 text text--large text--regular">Contract Renounced</li>
            <li className="nav__list__item_2 text text--large text--regular">Locked Liquidity Pool</li>
            <li className="nav__list__item_2 text text--large text--regular">Set Supply with no Future Minting</li>
            <li className="nav__list__item_2 text text--large text--regular">Fees will be used to buyback and burn pool</li>
            <li className="nav__list__item_2 text text--large text--regular">Strong Community with Tokens Granting Voting Powers</li>
            <li className="nav__list__item_2 text text--large text--regular">Holding certain amounts of {token} during a Snapshot guarantees you airdrops of NFTs</li>
          </ul>
          <Link to="features" spy={true} smooth={true}><button className="btn btn--accent">
            <span className="text--standart text--medium text-bold">Learn More</span>
          </button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid_choose;

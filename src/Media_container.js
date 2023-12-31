import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Rocket" src={Rocket} />
            </div>
          </div>
          <div>
            <h2>Chad-Mosphere</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Get your ticket for this rocket ship entering the Chad-Mosphere.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Coins" src={Coins} />
            </div>
          </div>
          <div>
            <h2>HOLD</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
            Snapshots will be frequent and holders will get airdrops of NFTs.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Vote" src={Vote} />
            </div>
          </div>
          <div>
            <h2>Vote on Governance</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              GIGA will transition into a DAO where all governance and changes will be voted on through the community using the 
              token. 
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media_container;

import React from "react";
import Me_pic_1 from "./images/me_pic_1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

class Team extends React.Component {
  render() {
    return (
      <div className="team" id="teamLink">
        <h2 className="banner__title team2">Meet the Team</h2>
        <div className="team" id="teamLink" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="me-info">
            <h3>Satoshi</h3>
            <div className="me-pic">
              <img alt="" src={Me_pic_1} />
            </div>
            <div className="centerContent">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="lg" color="white" />
              </a>
            </div>
            <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
              Lead Dev
            </p>
          </div>
          <div className="me-info">
            <h3>Doge</h3>
            <div className="me-pic">
              <img alt="" src={Me_pic_1} />
            </div>
            <div className="centerContent">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="lg" color="white" />
              </a>
            </div>
            <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
              Marketing
            </p>
          </div>
          <div className="me-info">
            <h3>Bored Ape</h3>
            <div className="me-pic">
              <img alt="" src={Me_pic_1} />
            </div>
            <div className="centerContent">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="lg" color="white" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="lg" color="white" />
              </a>
            </div>
            <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
              NFT Artist
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

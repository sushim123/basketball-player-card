import React from 'react';
import './BasketballPlayerCard.css';
import playerImage from './images/photo_3_2023-02-26_19-15-26.jpg'; 

const BasketballPlayerCard = ({ name, position, stats }) => {
  return (
    <div className="player-card-wrapper">
      
      <div className="player-card">
        <div className="player-image-wrapper">
          <img src={playerImage} alt={name} className="player-image" />
        </div>
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {stats.pointsPerGame}</p>
          <p>Assists per Game: {stats.assistsPerGame}</p>
          <p>Rebounds per Game: {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;

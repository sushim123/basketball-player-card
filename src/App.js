import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
  return (
    <div className="App">
      <h1>Basketball Player Card</h1>
      <BasketballPlayerCard 
        name="SUSHIM"
        image="basketball-player-card\src\images\photo_3_2023-02-26_19-15-26.jpg" 
        position="Forward"
        stats={{ 
          pointsPerGame: 27, 
          assistsPerGame: 10, 
          reboundsPerGame: 19.6 
        }}
      />
    </div>
  );
}

export default App;

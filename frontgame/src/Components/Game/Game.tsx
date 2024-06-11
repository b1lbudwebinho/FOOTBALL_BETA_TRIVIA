import { useEffect, useState } from "react";

const Game = () => {
  const [pairs, setPairs] = useState([]);
  const numPairsToShow = 9;

  const fetchClubs = async () => {
    const clubsResponse = await fetch(`/api2/clubs`);
    const clubs = await clubsResponse.json();
    return clubs;
  };
  const fetchPlayers = async () => {
    const plyaersResponse = await fetch(`/api2/players`);
    const players = await plyaersResponse.json();
    return players;
  };
  const fetchPlayerCountForPair = (entity1, entity2, players) => {
    let count = 0;
    for(const player in players) {
      if (players[player].includes(entity1) && players[player].includes(entity2)) {
        count++;
      }
    }
    return count;
  };

  useEffect(() => {
    const fetchData = async () => {
      const clubs = await fetchClubs();
      const players = await fetchPlayers();
      const pairsData = [];
      const clubIds = Object.keys(clubs);
      // match pairs
      for (let i=0; i<clubIds.length; i++) {
        for (let j=i+1; j<clubIds.length; j++) {
          const playerCount = fetchPlayerCountForPair(clubIds[i], clubIds[j], players);
          if (playerCount >= 3) {
            pairsData.push({ entity1: clubs[clubIds[i]], entity2: clubs[clubIds[j]], playerCount });
          }
        }
      }
      setPairs(pairsData);
    };
    fetchData();
  }, []);

  const selectRandomPairs = (pairs, numPairs) => {
    const shuffled = [...pairs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numPairs);
  };
  
  const selectedPairs = selectRandomPairs(pairs, numPairsToShow);

  return (
    <div className="grid">
      {selectedPairs.map((pair, index) => {
        return (
          <div key={index} className="grid-item">
            <div>{pair.entity1}</div>
            <div>{pair.entity2}</div>
            <div>{pair.playerCount} players</div>
          </div>
        );
      })}
    </div>
  );
};

export default Game;
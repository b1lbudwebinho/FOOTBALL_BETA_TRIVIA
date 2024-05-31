import React, { useEffect, useState } from 'react';

const Game = () => {
  const [pairs, setPairs] = useState([]);
  const numPairsToShow = 9;

  // Fetching club data.
  const fetchClubs = async () => {
    const clubs = [
      { id: '154774', name: 'FC Barcelona' },
      { id: '153995', name: 'Arsenal FC' },
      { id: '164959', name: 'Aston Villa FC' },
      { id: '172049', name: 'Brentford FC' },
      { id: '172343', name: 'Chelsea FC' },
      { id: '163344', name: 'Cardiff City FC' },
      { id: '157033', name: 'Tottenham Hotspur FC' },
      { id: '158744', name: 'Crystal Palace FC' },
      { id: '170087', name: 'Manchester City FC' },
      { id: '166449', name: 'Burnley FC' },
      { id: '154064', name: 'Manchester United FC' },
      { id: '172780', name: 'Everton FC' },
      { id: '164575', name: 'Liverpool FC' },
      { id: '163963', name: 'West Ham United FC' },
      { id: '176928', name: 'Fulham FC' },
      { id: '167907', name: 'Leicester City FC' },
    ];

    const countries = [
      { id: 'NAT_ESP', name: 'Spain' },
      { id: 'NAT_ENG', name: 'England' },
      { id: 'NAT_BRA', name: 'Brazil' },
    ];
    return { clubs, countries };
  };

  const fetchPlayerCountForPair = async (entity1, entity2) => {
    const url = `https://fbref.com/en/friv/players-who-played-for-multiple-clubs-countries.fcgi?level=franch&t1=${entity1.id}&t2=${entity2.id}&t3=--&t4=--`;
    const proxyUrl = `http://localhost:3003/api/fetch?url=${encodeURIComponent(url)}`;

    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      const rows = Array.from(doc.querySelectorAll('table tbody tr'));
      return rows.length;
    } catch (error) {
      console.error(`Failed to fetch player count for pair ${entity1.name} and ${entity2.name}:`, error);
      return 0; // Return 0 in case of an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { clubs, countries } = await fetchClubs();
      const pairsData = [];

      // Generate valid pairs
      for (let i = 0; i < clubs.length; i++) {
        for (let j = i + 1; j < clubs.length; j++) {
          try {
            const playerCount = await fetchPlayerCountForPair(clubs[i], clubs[j]);
            if (playerCount >= 3) {
              pairsData.push({ entity1: clubs[i], entity2: clubs[j], playerCount });
            }
          } catch (error) {
            console.error(`Failed to fetch player count for pair ${clubs[i].name} and ${clubs[j].name}:`, error);
          }
        }
      }

      for (let i = 0; i < clubs.length; i++) {
        for (let j = 0; j < countries.length; j++) {
          try {
            const playerCount = await fetchPlayerCountForPair(clubs[i], countries[j]);
            if (playerCount >= 1) {
              pairsData.push({ entity1: clubs[i], entity2: countries[j], playerCount });
            }
          } catch (error) {
            console.error(`Failed to fetch player count for pair ${clubs[i].name} and ${countries[j].name}:`, error);
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
      {selectedPairs.map((pair, index) => (
        <div key={index} className="grid-item">
          <div>{pair.entity1.name}</div>
          <div>{pair.entity2.name}</div>
          <div>{pair.playerCount} players</div>
        </div>
      ))}
    </div>
  );
};

export default Game;

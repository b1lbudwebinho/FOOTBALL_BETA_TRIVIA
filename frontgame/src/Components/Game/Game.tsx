import { useEffect, useState } from "react";

const Game: React.FC = () => {
  const [grid, setGrid] = useState<{ pair: [string, string], count: number, playerNames: string[], correct: boolean }[][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clubMapping, setClubMapping] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const gridSize = 3;

  const fetchClubs = async () => {
    try {
      const clubsResponse = await fetch('http://localhost:3001/api2/clubs');
      if(!clubsResponse.ok) {
        throw new Error('Failed to fetch clubs');
      }
      const clubs = await clubsResponse.json();
      // return Object.keys(clubs);
      // return Array.isArray(clubs) ? clubs : Object.keys(clubs);
      return clubs;
    } catch(error) {
      setError(error.message);
      return {};
    }
  };

  const fetchPlayers = async () => {
    try {
      const playersResponse = await fetch('http://localhost:3001/api2/players');
      if(!playersResponse.ok) {
        throw new Error('Failed to fetch player');
      }
      const players = await playersResponse.json();
      return players;
    } catch(error) {
      setError(error.message);
      return {};
    }
  };

  // functionability of getting a surname:
  const getSurname = (fullName) => {
    const names = fullName.split(' ');
    return names[names.length - 1]
  }

  const fetchPlayerCountForPair = (entity1: string, entity2: string, players: Record<string, string[]>) => {
    let count = 0;
    const playerNames = [];
    for(const player in players) {
      if (players[player].includes(entity1) && players[player].includes(entity2)) {
        count++;
        playerNames.push(player);
      }
    }
    return { count, playerNames };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubs = await fetchClubs();
        const clubKeys = Object.keys(clubs);
        const clubValues = Object.values(clubs);
        const players = await fetchPlayers();
        const clubMapping = clubKeys.reduce((acc, key, index) => {
          acc[key] = clubValues[index];
          return acc;
        }, {});
        setClubMapping(clubMapping);

        const pairsData: { pair: [string, string], count: number, playerNames: string[], correct: boolean }[][] = [];
        
        for (let row = 0; row < gridSize; row++) {
          const rowPairs = [];
          for (let col = 0; col < gridSize; col++) {
            const entity1 = clubKeys[Math.floor(Math.random() * clubKeys.length)];
            let entity2 = entity1;
            while(entity2 === entity1) {
              entity2 = clubKeys[Math.floor(Math.random() * clubKeys.length)];
            }
            const { count, playerNames } = fetchPlayerCountForPair(entity1, entity2, players);
            rowPairs.push({ pair: [entity1, entity2], count, playerNames, correct: false  });
          }
          pairsData.push(rowPairs);
        }
        setGrid(pairsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => {
    const { value } = e.target;
    const updatedGrid = grid.map((row, rIdx) => row.map((cell, cIdx) => {
      if(rIdx === rowIndex && cIdx === colIndex) {
        const correctNames = cell.playerNames.some(playerName =>
          playerName.toLowerCase() === value.toLowerCase() ||
          getSurname(playerName).toLowerCase() === value.toLowerCase()
        );
        if(correctNames) {
          return { ...cell, correct: true};
        }
        // if(cell.playerNames.includes(value)) {
        //   return { ...cell, correct: true }; }
      }
      return cell;
    }));
    setGrid(updatedGrid);
  }
  
  if(loading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Game</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gap: '10px' }}>
        {grid.map((row, rowIndex) => (
          row.map(({ pair, count, correct }, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} style={{ border: '1px solid black', padding: '10px',
             backgroundColor: correct ? 'green' : 'white' }}>
              {/* {pair[0]} & {pair[1]}: {count} players */}
              {clubMapping[pair[0]]} & {clubMapping[pair[1]]}: {count} players
              <input type="text" disabled={correct} onChange={(e) => handleInputChange(e,rowIndex,colIndex)}
                style={{ display: correct ? 'none' : 'block' }}
              />
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Game;

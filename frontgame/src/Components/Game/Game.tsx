import { useEffect, useState } from "react";

const Game: React.FC = () => {
  const [grid, setGrid] = useState<{ pair: [string, string], count: number, playerNames: string[], correct: boolean, answer?: string }[][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clubMapping, setClubMapping] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState<boolean>(false);
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
  useEffect(() => {
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
    checkForWin(updatedGrid);
  }
  // Game functionabilities:
  const checkForWin = (grid) => {
    for (let i=0; i<gridSize; i++) {
      if(grid[i].every(cell => cell.correct) ||
          grid.every(row => row[i].correct) ||
          grid.every((row, idx) => row[idx].correct) ||
          grid.every((row, idx) => row[gridSize - 1 -idx].correct)) {
        setWinner(true);
        return;
      }
    }
  };
  const handlePlayAgain = () => {
    setWinner(false);
    setLoading(true);
    setError(null);
    setGrid([]);
    fetchData();
  };
  const handleShowAllAnswers = () => {
    const updatedGrid = grid.map(row => row.map(cell => ({ ...cell, 
      answer: cell.playerNames.length > 0 ? cell.playerNames[0] : '' })));
    setGrid(updatedGrid);
  };
  
  if(loading) {
    return <div className="flex items-center justify-center h-screen">
      <span className="text-xl">
        Loading...
      </span>
    </div>;
  }
  if(error) {
    return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Game</h1>
      {winner && <h2 className="text-3xl font-bold text-center text-green-500 mb-4">You WIN!</h2>}
      <div className="flex justify-center space-x-4 mb-4">
        <button onClick={handlePlayAgain} className="bg-blue-500 text-white px-4 py-2 rounded">Play Again</button>
        <button onClick={handleShowAllAnswers} className="bg-gray-500 text-white px-4 py-2 rounded">Show all answers</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {grid.map((row, rowIndex) => (
          row.map(({ pair, count, correct, answer }, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className={`border p-4 ${correct ? 'bg-green-200' : 'bg-white'} rounded`}>
              <div className="text-center mb-2">{`${clubMapping[pair[0]]} & ${clubMapping[pair[1]]}: ${count} players`}</div>
              {answer ? (
                <div className="text-center text-blue-500 font-semibold">{answer}</div>
              ) : (
                <input
                  type="text"
                  disabled={correct}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  style={{ display: correct ? 'none' : 'block' }}
                />
              )}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Game;
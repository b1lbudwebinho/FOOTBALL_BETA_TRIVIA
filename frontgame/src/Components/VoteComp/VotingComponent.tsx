import React, { useState, useEffect } from 'react';
import ComparisonBar from '../ComparisonBar/ComparisonBar';

interface VoteCompProps {
  optionA: { image: string; label: string };
  optionB: { image: string; label: string };
}

// const VotingComponent({ optionA, optionB }: VoteCompProps) {
const VotingComponent: React.FC<VoteCompProps> = ({ optionA, optionB }) => {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);
  const [votingDisabled, setVotingDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

  useEffect(() => {
    const storedVotesA = parseInt(localStorage.getItem('votesA') || '0');
    const storedVotesB = parseInt(localStorage.getItem('votesB') || '0');
    setVotesA(storedVotesA);
    setVotesB(storedVotesB);
  }, []);

  const handleVote = async (option: 'A' | 'B') => {
    if (votingDisabled) return; // Voting is disabled

    setVotingDisabled(true); // Disable voting temporarily
    setSelectedOption(option);

    try {
        if (option === 'A') {
            setVotesA(votesA + 1);
            localStorage.setItem('votesA', (votesA + 1).toString());
        } else {
            setVotesB(votesB + 1);
            localStorage.setItem('votesB', (votesB + 1).toString());
        }

        const response = await fetch('/api/vote', {
            method: 'POST',
            body: JSON.stringify({ option }),
        });
        const updatedVotes = await response.json();
        
        setVotesA(updatedVotes.A);
        setVotesB(updatedVotes.B);
    } catch(error) {
        console.error('Error sending vote to a server:', error);
    } finally {
        setTimeout(() => {
            setVotingDisabled(false);
            setSelectedOption(null);
        }, 20000);
    }
  };

  const totalVotes = votesA + votesB;
  const percentageA = totalVotes === 0 ? 50 : Math.round((votesA / totalVotes) * 100);
  const percentageB = 100 - percentageA;

  return (
    <section className="w-full max-w-md mx-auto py-12 px-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Tile A */}
        <button
          className={`group relative bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center cursor-pointer transition-opacity duration-300 ${
            votingDisabled ? 'opacity-50' : 'hover:opacity-75'
          }`}
          onClick={() => handleVote('A')}
          disabled={votingDisabled}
        >
          <img src={optionA.image} alt={optionA.label} className="w-16 h-16 mb-2 rounded-full object-cover" />
          <h3 className="text-lg font-medium group-hover:underline">{optionA.label}</h3>

          {/* Checkmark overlay (appears when voting is disabled) */}
          {votingDisabled && selectedOption === 'A' && (
            <div className="absolute inset-0 bg-gray-500/50 rounded-lg flex items-center justify-center">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
          )}
        </button>

        {/* Tile B (similar to Tile A) */}
        <button
          className={`group relative bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center cursor-pointer transition-opacity duration-300 ${
            votingDisabled ? 'opacity-50' : 'hover:opacity-75'
          }`}
          onClick={() => handleVote('B')}
          disabled={votingDisabled}
        >
          <img src={optionB.image} alt={optionB.label} className="w-16 h-16 mb-2 rounded-full object-cover" />
          <h3 className="text-lg font-medium group-hover:underline">{optionB.label}</h3>

          {/* Checkmark overlay (appears when voting is disabled) */}
          {votingDisabled && selectedOption === 'B' && (
            <div className="absolute inset-0 bg-gray-500/50 rounded-lg flex items-center justify-center">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
          )}
        </button>
      </div>

      <div className="mt-8 flex items-center space-x-4">
        <div className="flex-1">
          <ComparisonBar
            // className="[&>span:first-child]:bg-blue-500"
            percentageA={percentageA}
            percentageB={percentageB}
            optionA={optionA.label}
            optionB={optionB.label}
            // max={100}
            // step={1}
          />
          {/* <p className="text-center">{optionA.label}: {percentageA}%</p> */}
        </div>
      </div>
    </section>
  );
};

    
function CheckIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

export default VotingComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeamsCard.css'
import { response } from 'express';

const TeamsCard: React.FC = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your Football-Data.org API key
  useEffect(() => {
    const fetchTeams = async () => {
      // const URL = '/api/v2/competitions/PL/teams'; // Example: Premier League teams
      try {
        const response = await axios.get('http://localhost:3002/api/v2/competitions/PL/teams', {
          headers: { 'X-Auth-Token': API_KEY },
        });
        setTeams(response.data.teams);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      }
    };
    fetchTeams();
  }, [API_KEY]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="teams-container">
      {teams.map((team) => (
        <div key={team.id} className="team-card" data-testid={`team-card-${team.id}`}>
          <img src={team.crestUrl} alt={team.name} className="team-logo" />
          <h3>{team.name}</h3>
          <p>Founded: {team.founded}</p>
          <p>Venue: {team.venue}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamsCard;

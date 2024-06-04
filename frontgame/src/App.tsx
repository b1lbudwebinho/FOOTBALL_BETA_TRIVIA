import React from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import NewsPage from './Components/NewsPage/NewsPage';
import TeamsCard from './Components/TeamsCard/TeamsCard';
import Game from './Components/Game/Game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VotingComponent from './Components/VoteComp/VotingComponent';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>

          {/* <Search />
          <CardList /> */}
          <Route path="/" element={<NewsPage />} />
          <Route path="/teams" element={<TeamsCard />} />
          {/* <Route path="/game" element={<Game />} /> */}
          <Route path="/vote" element={<VotingComponent
            optionA={{ image: '/images/realmadri.jpeg', label: 'Option A' }}
            optionB={{ image: '/images/Borussia.png', label: 'Option B' }}
          />} />
          
        </Routes>
    </div>
  );
}

export default App;

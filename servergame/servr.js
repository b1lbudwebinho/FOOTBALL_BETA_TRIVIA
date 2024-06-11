const express = require('express');
const redis = require('redis');
const path = require('path');
const serverless = require('serverless-http')
const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();

const client = redis.createClient({
    url: process.env.BINGO_DATABASE
});
client.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});
client.on('connect', () => {
    console.log('Connected to Redis');
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
//Fetchch
app.get('/api/clubs', async (req, res) => {
    const clubs = await client.hGetAll('premier_league_clubs');
    res.json(clubs);
});
app.get('/api/players', async(req, res) => {
    const playerKeys = await client.keys('player:*');
    const players = {};

    for(const key of playerKeys) {
        const player = key.split(':')[1];
        const clubs = await client.sMembers(key);
        players[player] = clubs;
    }
    res.json(players);
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

if(process.env.NODE_ENV !== 'lambda') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
module.exports.handle = serverless(app);
const express = require('express');
const redis = require('redis');
const path = require('path');
const serverless = require('serverless-http')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();

const client = redis.createClient({
    url: process.env.BINGO_DATABASE
});
client.connect();
client.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});
client.on('connect', () => {
    console.log('Connected to Redis');
});

// Cors middleware
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
//Fetchch
app.get('/api2/clubs', async (req, res) => {
    try {
        const clubs = await client.hGetAll('premier_league_clubs');
        if(!clubs) {
            throw new Error('No clubs found');
        }
        res.json(clubs);
    } catch(err) {
        console.error('Error fetching clubs:', err);
        res.status(500).json({ error: 'Error fetching clubs' });
    }
});
app.get('/api2/players', async(req, res) => {
    try {
        const playerKeys = await client.keys('$player:*');
        if(!playerKeys.length) {
            throw new Error('No players found');
        }
        const players = {};
        for(const key of playerKeys) {
            const player = key.split(':')[1];
            const clubs = await client.sMembers(key);
            players[player] = clubs;
        }
        res.json(players);
    } catch(err) {
        console.error('Error fetching players:', err);
        res.status(500).json({ error: 'Error fetching players' });
    }
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
const redis = require('redis');
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

const clubs = [
    { id: '1', name: 'Arsenal FC' },
    { id: '2', name: 'Aston Villa FC' },
    { id: '3', name: 'Brentford FC' },
    { id: '4', name: 'Brighton & Hove Albion FC' },
    { id: '5', name: 'Southampton FC' },
    { id: '6', name: 'Chelsea FC' },
    { id: '7', name: 'Crystal Palace FC' },
    { id: '8', name: 'Everton FC' },
    { id: '9', name: 'Fulham FC' },
    { id: '10', name: 'Liverpool FC' },
    { id: '11', name: 'Luton Town FC' },
    { id: '12', name: 'Manchester City FC' },
    { id: '13', name: 'Manchester United FC' },
    { id: '14', name: 'Newcastle United FC' },
    { id: '15', name: 'Nottingham Forest FC' },
    { id: '16', name: 'AFC Bournemouth' },
    { id: '17', name: 'Tottenham Hotspur FC' },
    { id: '18', name: 'West Ham United FC' },
    { id: '19', name: 'Wolverhampton Wanderers FC' },
    { id: '20', name: 'Leicester City FC' }
];

const players = [
    { name: 'Calum Chambers', clubs: ['1', '2', '9', '5']},
    { name: 'Emiliano Martinez', clubs: ['1', '2', '19']},
    { name: 'Robert Pires', clubs: ['1', '2']},
    { name: 'Paul Merson', clubs: ['1', '2']},
    { name: 'David Raya', clubs: ['1', '3']},
    { name: 'Wojciech Szczesny', clubs: ['1', '3']},
    { name: 'Scott Marshall', clubs: ['1', '3']},
    { name: 'Stephen Hughes', clubs: ['1', '3', '8']},
    { name: 'Matthew Ryan', clubs: ['1', '4']},
    { name: 'Chuba Akpom', clubs: ['1', '4', '15', '3']},
    { name: 'Leandro Trossard', clubs: ['1', '4']},
    { name: 'Danny Welbeck', clubs: ['1', '4', '13']},
    { name: 'Ben White', clubs: ['1', '4']},
    { name: 'Matt Upson', clubs: ['1', '4', '18', '20', '7', '11']},
    { name: 'Ainsley Maitland-Niles', clubs: ['1', '5']},
    { name: 'Theo Wallcot', clubs: ['1', '5', '8']},
    { name: 'Alex Oxlade-Chamberlain', clubs: ['1', '5', '10']},
    { name: 'Cedric Soares', clubs: ['1', '5', '9']},
    { name: 'Petr Cech', clubs: ['1', '6']},
    { name: 'Nicolas Anelka', clubs: ['1', '6', '10', '12']},
    { name: 'Pierre-Emerick Aubameyang', clubs: ['1', '6']},
    { name: 'Ashley Cole', clubs: ['1', '6', '7']},
    { name: 'Cesc Fabregas', clubs: ['1', '6']},
    { name: 'William Gallas', clubs: ['1', '6', '17']},
    { name: 'Willian', clubs: ['1', '6', '9']},
    { name: 'Emmanuel Petit', clubs: ['1', '6']},
    { name: 'Jorginho', clubs: ['1', '6']},
    { name: 'Olivier Giroud', clubs: ['1', '6']},
    { name: 'Kai Havertz', clubs: ['1', '6']},
    { name: 'Lassana Diarra', clubs: ['1', '6']},
    { name: 'Emmanuel Adebayor', clubs: ['1', '7', '17', '12']},
    { name: 'Marouane Chamakh', clubs: ['1', '7', '18']},
    { name: 'Mathieu Flamini', clubs: ['1', '7']},
    { name: 'Rob Holding', clubs: ['1', '7']},
    { name: 'Yaya Sanogo', clubs: ['1', '7']},
    { name: 'Richard Wright', clubs: ['1', '8', '5']},
    { name: 'Mikel Arteta', clubs: ['1', '8']},
    { name: 'Kevin Campbell', clubs: ['1', '8', '15']},
    { name: 'Alex Iwobi', clubs: ['1', '8', '9']},
    { name: 'Emmanuel Frimpong', clubs: ['1', '9', '19']},
    { name: 'Bernd Leno', clubs: ['1', '9']},
    { name: 'Kolo Toure', clubs: ['1', '10', '12']},
    { name: 'Yossi Benayoun', clubs: ['1', '10', '6', '18']},
    { name: 'Albert Sambi Lokonga', clubs: ['1', '11', '7']},
    { name: 'Gael Clichy', clubs: ['1', '12']},
    { name: 'Gabriel Jesus', clubs: ['1', '12']},
    { name: 'Samir Nasri', clubs: ['1', '12', '18']},
    { name: 'Bacary Sagna', clubs: ['1', '12']},
    { name: 'David Seaman', clubs: ['1', '12']},
    { name: 'Patrick Vieira', clubs: ['1', '12']},
    { name: 'Oleksandr Zinchenko', clubs: ['1', '12']},
    { name: 'Robin Van Persie', clubs: ['1', '13']},
    { name: 'Henrikh Mkhitaryan', clubs: ['1', '13']},
    { name: 'Alexis Sanchez', clubs: ['1', '13']},
    { name: 'Sol Campbell', clubs: ['1', '17', '14']},
    { name: 'Mathieu Debuchy', clubs: ['1', '14']},
    { name: 'Issac Hayden', clubs: ['1', '14']},
    { name: 'Joe Willock', clubs: ['1', '14']},
    { name: 'Nicklas Bendtner', clubs: ['1', '15']},
    { name: 'Armand Traore', clubs: ['1', '15']},
    { name: 'Ian Wright', clubs: ['1', '15', '18']},
    { name: 'Aaron Ramsey', clubs: ['1', '15', '18']},
    { name: 'Aaron Ramsdale', clubs: ['1', '16']},
    { name: 'Jack Whilshere', clubs: ['1', '16', '18']},
    { name: 'Łukasz Fabiański', clubs: ['1', '18']},
    { name: 'Freddie Ljungberg', clubs: ['1', '18']},
    { name: 'Declan Rice', clubs: ['1', '18']},
    { name: 'Lucas Perez', clubs: ['1', '18']},
    { name: 'Alex Song', clubs: ['1', '18']},
    { name: 'Davor Suker', clubs: ['1', '18']},
    { name: 'Stephy Mavdidi', clubs: ['1', '20']},
    { name: 'Paul Dickov', clubs: ['1', '20', '7', '12']},
    { name: 'Stuart Taylor', clubs: ['1', '20', '2']},
    { name: 'Ignacio Jota', clubs: ['2', '3']},
    { name: 'Ollie Watkins', clubs: ['2', '3']},
    { name: 'James Milner', clubs: ['2', '4', '12', '14', '10']},
    { name: 'Steve Sidwell', clubs: ['2', '4', '6', '9']},
    { name: 'Darren Bent', clubs: ['17', '2', '9', '4']},
    { name: 'Jan Bednarek', clubs: ['2', '5']},
    { name: 'Ryan Bertrand', clubs: ['2', '5', '6', '20', '15']},
    { name: 'Peter Crouch', clubs: ['2', '5', '17', '10']},
    { name: 'Danny Ings', clubs: ['2', '5', '18', '10']},
    { name: 'Matt Targett', clubs: ['2', '5', '9', '14']},
    { name: 'Tammy Abraham', clubs: ['2', '6']},
    { name: 'Ross Barkley', clubs: ['2', '6', '8']},
    { name: 'Gary Cahill', clubs: ['2', '6', '7', '16']},
    { name: 'Joe Cole', clubs: ['2', '6', '18', '10']},
    { name: 'John Terry', clubs: ['2', '6']},
    { name: 'Jordan Ayew', clubs: ['2', '7']},
    { name: 'Christian Benteke', clubs: ['2', '7', '10']},
    { name: 'Yannick Bolasie', clubs: ['2', '8', '7']},
    { name: 'Gabor Kiraly', clubs: ['2', '7', '9']},
    { name: 'Scott Sinclair', clubs: ['2', '7', '6', '12']},
    { name: 'Sam Johnstone', clubs: ['2', '7']},
    { name: 'Gareth Barry', clubs: ['2', '8', '10']},
    { name: 'Tom Cleverley', clubs: ['20', '13', '2', '8']},
    { name: 'Lucas Digne', clubs: ['2', '8']},
    { name: 'Fabian Delph', clubs: ['2', '8', '12']},
    { name: 'Anwar El Ghazi', clubs: ['2', '8']},
    { name: 'Ashley Young', clubs: ['2', '8', '13']},
    { name: 'Idrissa Gueye', clubs: ['2', '8']},
    { name: 'Adama Traore', clubs: ['2', '9', '19']},
    { name: 'Aarong Hughes', clubs: ['2', '9', '14']},
    { name: 'Scott Carson', clubs: ['2', '10', '12']},
    { name: 'Pepe Reina', clubs: ['2', '10']},
    { name: 'Emile Heskey', clubs: ['2', '10', '20']},
    { name: 'Philippe Coutinho', clubs: ['2', '10']},
    { name: 'Marvelous Nakamba', clubs: ['2', '11']},
    { name: 'Henri Lansburry', clubs: ['2', '11', '1', '18', '15']},
    { name: 'Curtis Davis', clubs: ['2', '11', '20']},
    { name: 'Robert Snodgrass', clubs: ['2', '11', '18']},
    // TODO: Include more players..  
];

// Connection;
client.connect().then(async () => {
    for(const club of clubs) {
        await client.hSet('premier_league_clubs', club.id, club.name);
    }
    console.log('Premier League clubs populated');

    //Players population
    for (const player of players) {
        await client.sAdd(`$player:${player.name}`, player.clubs);
    }
    console.log('Players added');
    client.quit();
});
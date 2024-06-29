# FOOTBALL BETA TRIVIA

FOOTBALL BETA TRIVIA is an interactive trivia game built with React and TypeScript for the frontend, and Node.js with Express.js for the backend. The project is tested using Jest and deployed using Docker, Heroku, and Netlify.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Interactive football trivia game
- Real-time updates
- Responsive design
- User authentication and leaderboard
- Dockerized for easy deployment

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Docker (for deployment)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/b1lbudwebinho/FOOTBALL_BETA_TRIVIA.git
    cd FOOTBALL_BETA_TRIVIA/servergame
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node servr.js
    node proxySrv.js
    # Or use concurrent
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontgame
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

To access the application locally, open your browser and go to `http://localhost:3000`.

The application can also be accessed online at [FOOTBALL BETA TRIVIA](https://sunny-dasik-e84e10.netlify.app/).

## Testing

To run tests for this project, navigate to the root directory and run:

```bash
npm test

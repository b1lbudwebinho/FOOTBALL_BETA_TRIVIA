const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");
require('dotenv').config();


const app = express();
const port = process.env.PROXY_PORT || 3002;
app.use(cors());

// Add headers to allow CORS

app.use((req, res, next) => {
    // Eurq
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000,http://localhost,http://localhost:3000/teams,http://127.0.0.1:3000,localhost');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token');
    next();
});

// Proxy endpoint
app.use('/api', createProxyMiddleware({
    target: 'https://api.football-data.org',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding to target
    },
    onProxyReq: (proxyReq, req, res) => {
        // Add API key to request headers brosk
        proxyReq.setHeader('X-Auth-Token', process.env.FOOTBALL_DATA_API_KEY);
    },
}));

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});

'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const getUserId = require('./server/components/getUserId');
const { authRoutes, pickupsRoutes } = require('./server/routes');
const app = express();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
    exposedHeaders: ['App-token'],
}));

app.use('/api/auth', authRoutes);
app.use('/api/pickup', getUserId, pickupsRoutes);

// Create link to React build directory
let distDir = __dirname + "/build/";
app.use(express.static(distDir));
app.use('/*', (req, res, next)=>{
	res.sendFile(distDir);
});

http.listen(port, ()=>{
    console.log("Server up and running on port ", port);
});
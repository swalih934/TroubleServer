require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Routes/Router');
require('./dbConnection/connection');


const TsServer = express();

TsServer.use(cors());
TsServer.use(express.json());
TsServer.use(router);


const PORT = process.env.PORT || 3000;

TsServer.listen(PORT, () => {
    console.log(`TS server started at http://localhost:${PORT} and waiting for client request`);
});


TsServer.get('/', (req, res) => {
    res.status(200).send('<h1 style="color:blue;">TS server started and waiting for client request!!!</h1>');
});

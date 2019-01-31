require('dotenv').config();
const express = require("express");
const massive = require("massive");

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json())
// massive(CONNECTiON_STRING).then(db => app.set('db', db))


app.listen(SERVER_PORT, () => {
    console.log(`docking on port ${SERVER_PORT}`)
})
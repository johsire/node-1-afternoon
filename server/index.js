const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

// parse application/json();
app.use(bodyParser.json());

const port = 3000;

app.listen( port, () => { console.log("server listening on port" + port); });
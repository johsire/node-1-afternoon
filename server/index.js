const express = require ('express');
const bodyParser = require ('body-parser');
const mc = require(__dirname + '/controllers/messages_messages.js');

const app = express();

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);






// parse application/json();
app.use(bodyParser.json());

const port = 3000;

app.listen( port, () => { console.log("server listening on port" + port); });

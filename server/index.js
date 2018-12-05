const express = require('express');
const { json } = require('body-parser');
const controller = require('./controllers/messages_controllers')

const app = express();

app.use(json());
app.use( express.static( __dirname + '/../public/build' ) );

app.get('/api/messages', controller.read);
app.post('/api/messages', controller.create);
app.put('/api/messages/:id', controller.update);
app.delete('/api/messages/:id', controller.remove)

app.listen(3001, () => console.log("Listening on Port 3001"));
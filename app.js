const express = require('express')
const app = express();

const websocket = require('ws');

const server = require('http').createServer(app);

const ws = new websocket.Server({server})

ws.on('connection', (ws) => {

    ws.on('message', (message) => {
        ws.send(`상대방이 보낸 말 : ${message}`);
    })

});

server.listen(8081);
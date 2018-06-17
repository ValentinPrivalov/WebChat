/*import React from 'react';
import ReactDOM from 'react-dom';
import View from './components/View';

ReactDOM.render(
    <View/>,
    document.getElementById('wrapper')
);*/

let id = (Math.random() * 100).toFixed(0);
let ws = new WebSocket('ws://localhost:8081');

ws.addEventListener('open', () => {
    console.log('WebSocket open');

    ws.send(JSON.stringify({uc: 'START-CONNECTION', id: id}));
});

ws.addEventListener('message', event => {
    let response = JSON.parse(event.data);
    console.log(`Response - ${event.data}`);

    switch (response.uc) {
        case 'START-CONNECTION':
            console.log('Connection started');
            break;
    }
});

ws.addEventListener('close', () => {
    console.log('WebSocket close');
});

ws.addEventListener('error', () => {
    console.log('WebSocket error');
});
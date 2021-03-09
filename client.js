const myWs = new WebSocket('ws://localhost:9000');
myWs.onopen = function () {
    console.log('подключился');
};
myWs.onmessage = function (message) {
    console.log('Message: %s', message.data);
};

function wsSendEcho(value) {
    myWs.send(JSON.stringify({action: 'ECHO', data: value.toString()}));
}

function wsSendPing() {
    myWs.send(JSON.stringify({action: 'PING'}));
}
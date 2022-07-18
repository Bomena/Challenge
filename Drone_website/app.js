this.ros = new ROSLIB.Ros({
    url : 'ws://165.246.139.32:9090'
});
this.ros.on('connection', function() {
    console.log('Connected to websocket server.');
});
this.ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});
this.ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});
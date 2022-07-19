let state = new ROSLIB.Topic({
    ros : ros,
    name : 'state',
    messageType : 'std_msgs/String'
});

let speed = new ROSLIB.Topic({
    ros : ros,
    name : 'speed',
    messageType : 'std_msgs/String'
});

state.subscribe(function(message) {
    //console.log("state?");
    let stateText = message.data;
    document.getElementById("state").innerHTML = stateText;
});

speed.subscribe(function(message) {
    //console.log("speed?");
    let speedText = message.data + " m/s";
    document.getElementById("speed").innerHTML = speedText;
});

//--------------------------------------------------------
let camera = new ROSLIB.Topic({
    ros : ros,
    name : 'img',
    messageType : 'sensor_msgs/CompressedImage',
});

camera.subscribe(function(message) {
    //console.log("got it!");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("ig").src = image.src;
});
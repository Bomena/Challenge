let roll = new ROSLIB.Topic({
    ros : ros,
    name : 'roll',
    messageType : 'std_msgs/String'
});

let pitch = new ROSLIB.Topic({
    ros : ros,
    name : 'pitch',
    messageType : 'std_msgs/String'
});

let yaw = new ROSLIB.Topic({
    ros : ros,
    name : 'yaw',
    messageType : 'std_msgs/String'
});


//------------------------------------------------

roll.subscribe(function(message) {
    //console.log("roll?");
    let rollText = message.data + " deg";
    document.getElementById("roll").innerHTML = rollText;
    
});


pitch.subscribe(function(message) {
    //console.log("pitch?");
    let pitchText = message.data + " deg";
    document.getElementById("pitch").innerHTML = pitchText;
});

yaw.subscribe(function(message) {
    //console.log("yaw?");
    let yawText = message.data + " deg";
    document.getElementById("yaw").innerHTML = yawText;
});
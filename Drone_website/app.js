/* global kakao */
//import React, { useState } from "react";

const ros = new ROSLIB.Ros({
    url : 'ws://165.246.139.32:9090'
});

let listener = new ROSLIB.Topic({
    ros : ros,
    name : 'chatter',
    messageType : 'std_msgs/String'
});
let heart = new ROSLIB.Topic({
    ros : ros,
    name : 'img',
    messageType : 'sensor_msgs/CompressedImage',
});

listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
});

heart.subscribe(function(message) {
    console.log("got it!");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("ig").src = image.src;
});

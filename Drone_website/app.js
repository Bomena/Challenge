/* global kakao */
//import React, { useState } from "react";

const ros = new ROSLIB.Ros({
    url : 'ws://165.246.139.32:9090'
});

let isAuto = new ROSLIB.Topic({
    ros : ros,
    name : 'isAuto',
    messageType : 'std_msgs/String'
});

let wayPoint = new ROSLIB.Topic({
    ros : ros,
    name : 'wayPoint',
    messageType : 'std_msgs/String'
});

let gpsTime = new ROSLIB.Topic({
    ros : ros,
    name : 'gpsTime',
    messageType : 'std_msgs/String'
});

let latitude = new ROSLIB.Topic({
    ros : ros,
    name : 'latitude',
    messageType : 'std_msgs/String'
});

let longitude = new ROSLIB.Topic({
    ros : ros,
    name : 'longitude',
    messageType : 'std_msgs/String'
});

let altitude = new ROSLIB.Topic({
    ros : ros,
    name : 'altitude',
    messageType : 'std_msgs/String'
});

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

let heart = new ROSLIB.Topic({
    ros : ros,
    name : 'img',
    messageType : 'sensor_msgs/CompressedImage',
});


heart.subscribe(function(message) {
    console.log("got it!");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("ig").src = image.src;
});


isAuto.subscribe(function(message) {
    console.log("Is Auto?");
    let isAutoText = message.data;
    document.getElementById("isAuto").innerHTML = isAutoText;
});

wayPoint.subscribe(function(message) {
    console.log("wayPoint?");
    let wayPointText = message.data;
    document.getElementById("wayPoint").innerHTML = wayPointText;
});

gpsTime.subscribe(function(message) {
    console.log("gps time?");
    let gpsTimeText = message.data;
    document.getElementById("gpsTime").innerHTML = gpsTimeText;
});

latitude.subscribe(function(message) {
    console.log("latitude?");
    let latitudeText = message.data + "deg";
    document.getElementById("latitude").innerHTML = latitudeText;
});

longitude.subscribe(function(message) {
    console.log("longitude?");
    let longitudeText = message.data + "deg";
    document.getElementById("longitude").innerHTML = longitudeText;
});

altitude.subscribe(function(message) {
    console.log("altitude?");
    let altitudeText = message.data + "m";
    document.getElementById("altitude").innerHTML = altitudeText;
});

roll.subscribe(function(message) {
    console.log("roll?");
    let rollText = message.data + "deg";
    document.getElementById("roll").innerHTML = rollText;
});

pitch.subscribe(function(message) {
    console.log("pitch?");
    let pitchText = message.data + "deg";
    document.getElementById("pitch").innerHTML = pitchText;
});

yaw.subscribe(function(message) {
    console.log("yaw?");
    let yawText = message.data + "deg";
    document.getElementById("yaw").innerHTML = yawText;
});

state.subscribe(function(message) {
    console.log("state?");
    let stateText = message.data;
    document.getElementById("state").innerHTML = stateText;
});

speed.subscribe(function(message) {
    console.log("speed?");
    let speedText = message.data + "m/s";
    document.getElementById("speed").innerHTML = speedText;
});
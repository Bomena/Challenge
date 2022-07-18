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

//------------------------------------

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
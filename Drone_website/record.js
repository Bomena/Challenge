function recordingStart() {
    if (document.getElementById('btn').className === 'notRecord') {
        document.getElementById('btn').className = 'recording';

    } else {
        document.getElementById('btn').className = 'notRecord';
    }
}
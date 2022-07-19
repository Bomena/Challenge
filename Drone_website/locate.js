navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude + ", " + position.coords.longitude);
});
navigator.geolocation.getCurrentPosition(success, function(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
              // 사용자가 위치정보 사용을 허용하지 않았을 때
            break;
        case error.POSITION_UNAVAILABLE:
              // 위치 정보 사용이 불가능할 때
            break;
        case error.TIMEOUT:
              // 위치 정보를 가져오려 시도했지만, 시간이 초과되었을 때
            break;
        case error.UNKNOWN_ERROR:
              // 기타 알 수 없는 오류가 발생하였을 때
            break;
    }
});
navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 1000
});
var geolocationCounter = 1;
var geolocationCounterHigh = 1;

$( window ).on( "load", function() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, errorCallback);

        const options = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 300000 // 5 mins
        };
        navigator.geolocation.watchPosition(successHigh, errorCallback, options);
    } else {
        alert("geolocation is not available")
    }
})

function success(position) {
    var result = buildResult(geolocationCounter, position);
    $("#counter").text(geolocationCounter);
    $("#results").append(result + "\n");

    geolocationCounter++;
}

function successHigh(position) {
    var result = buildResult(geolocationCounterHigh, position);
    $("#counterHigh").text(geolocationCounterHigh);
    $("#resultsHigh").append(result + "\n");

    geolocationCounterHigh++;
}

function buildResult(count, position) {
    var geolocationStr = "count: " + count + "\n" +
        "timestamp: " + new Date(position.timestamp) + "\n" +
        "latitude: " + position.coords.latitude + "\n" +
        "longitude: " + position.coords.longitude + "\n" +
        "heading (deg): " + position.coords.heading + "\n" +
        "speed (m/s): " + position.coords.speed + "\n" +
        "altitude (m): " + position.coords.altitude + "\n" +
        "accuracy (m): " + position.coords.accuracy + "\n" +
        "altitudeAccuracy (m): " + position.coords.altitudeAccuracy + "\n";

    return geolocationStr;
}

function errorCallback(error) {
    alert(error.code + ": " + error.message);
}
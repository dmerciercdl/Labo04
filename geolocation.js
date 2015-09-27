/**
 * Created by dmercier on 2015-09-23.
 */

function displayPosition(position) {
    $(".headerContainer #userLocation").text(position.coords.longitude + "; " + position.coords.latitude);
}

function displayError(error) {
    $(".headerContainer #userLocation").text("unable to obtain location...");
}

function displayLocation() {
    if (navigator.geolocation) {
        var timeoutVal = 10 * 1000;
        navigator.geolocation.getCurrentPosition(displayPosition, displayError,
            {enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0}
        );
    }
    else {
        displayError();
    }
}


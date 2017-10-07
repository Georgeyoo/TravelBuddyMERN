var locationCoordinates = {lat: 37.791298, lng: -122.393743}
var address, originLat, originLng, destinationLat, destinationLng;

// $("#placeFinder").on("click", function() {

//     event.preventDefault();

//                 $.ajax({
//                     type: 'GET',
//                     // url: 'mongodb://heroku_5m0cnwwj:b69khihkp8sudn1hk8badffifc@ds111535.mlab.com:11535/heroku_5m0cnwwj/api/read',
//                     url: 'https://api.mlab.com/api/1/databases/heroku_5m0cnwwj/collections/locations?apiKey=ruNrM2S2Mpz5_Xmf4AxmiO6cTgyX6zOf',
//                     dataType: 'jsonp',
//                 }).done(function(data) {
//                     console.log(data);
//                     var tbody = $('tbody');
//                     tbody.html('');
//                     data.locations.forEach(function(locations) {
//                         tbody.append('<tr><td class="locationName">' + locations.name + '</td><td class="locationAddress">' + locations.address + '</td></tr>')
//                     });
//                 })

// });


var locationCoordinates = {lat: 37.791298, lng: -122.393743}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

function showPosition(position) {
    locationCoordinates.lat = position.coords.latitude;
    locationCoordinates.lng = position.coords.longitude;
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+locationCoordinates.lat+","+locationCoordinates.lng+"&key=AIzaSyAPcxvzzVjsR9zzeLUTBhV87D-a9OER6HQ"
    
    $.ajax({
        url:queryURL,
        method:'GET'
    }).done(function(response) {
        var userCurrentAddress = response.results[0].formatted_address;

        $("#address").attr("value", userCurrentAddress);
    });

    initMap();
}

function addressShifter() {
    var address = $("#address").val().trim();
    var convertedAddress = address.split(' ').join('+');
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + convertedAddress + "&key=AIzaSyAPcxvzzVjsR9zzeLUTBhV87D-a9OER6HQ";
    
    $.ajax({
        url:queryURL,
        method:'GET'
    }).done(function(response) {
        locationCoordinates = response.results[0].geometry.location;

        initMap();
    });

    $.ajax({
        method: 'GET',
        // url: 'mongodb://heroku_5m0cnwwj:b69khihkp8sudn1hk8badffifc@ds111535.mlab.com:11535/heroku_5m0cnwwj/api/read',
        url: 'https://api.mlab.com/api/1/databases/heroku_5m0cnwwj/collections/locations?apiKey=ruNrM2S2Mpz5_Xmf4AxmiO6cTgyX6zOf',
    }).done(function(data) {
        console.log(data);
        console.log(data.length);
        console.log(data[0].name);
        var tbody = $('tbody');
        tbody.html('');

        for(var i = 0; i < data.length; i ++) {
            tbody.append('<tr><td class="locationName">' + data[i].name + '</td><td class="locationAddress">' + data[i].address + '</td></tr>')
        }
    })

   //  originLat = locationCoordinates.lat;
   //  originLng = locationCoordinates.lng;
   //  destinationLat = 37.791298;
   //  destinationLng = -122.393743;

   // $.ajax({
   //      url: "https://crossorigin.me/https://api.uber.com/v1/estimates/price?start_latitude=" + originLat
   //          + "&start_longitude=" + originLng
   //          + "&end_latitude=" + destinationLat
   //          + "&end_longitude=" + destinationLng
   //          + "&server_token=tWSk3NDhzqKCJpuTZxamg66LqSf0EZkf7dqWeygm",
   //      method: "GET"
   //  }).done(function(response) {
   //      console.log(response);
   //      console.log("hi");
   //  });
}

$("#userLocation").on("click", getLocation);
$("#placeFinder").on("click", addressShifter);

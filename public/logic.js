$("#button").on("click", function() {

    event.preventDefault();

                $.ajax({
                    method: 'GET',
                    url: 'mongodb://heroku_5m0cnwwj:b69khihkp8sudn1hk8badffifc@ds111535.mlab.com:11535/heroku_5m0cnwwj/api/read',
                    dataType: 'jsonp',
                }).done(function(data) {
                    console.log(data);
                    var tbody = $('tbody');
                    tbody.html('');
                    data.locations.forEach(function(locations) {
                        tbody.append('<tr><td class="locationName">' + locations.name + '</td><td class="locationAddress">' + locations.address + '</td></tr>')
                    });
                })

});


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

$("#userLocation").on("click", getLocation);

// module.exports = {
//     readLocations(): function {
//         $(document).ready(function() {
//             $(".result").click(function() {
//                 $.ajax({
//                     type: 'GET',
//                     url: 'mongodb://localhost/api/read',
//                     dataType: 'jsonp',
//                     }).done(function(data) {
//                         var tbody = $('tbody');
//                         tbody.html('');
//                         data.locations.forEach(function(locations) {
//                             tbody.append('<tr>\ 
//                                             <td class="locationName">' + locations.name + '</td>\
//                                             <td class="locationAddress">' + locations.address + '</td>\
//                                          </tr>')
//                         });
//                     })
//             })
//         })    
//     }
// }
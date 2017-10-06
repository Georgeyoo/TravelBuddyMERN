var axios = require('axios');
/*axios.headers = {
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET')
}*/

module.exports = {
	/*fetchBusinesses: function (latitude, longitude) {
		var encodedURI = 'https://api.yelp.com/v3/businesses/search?latitude=' + 
			latitude + '&longitude=' + longitude + 
			'&sort_by=distance&category_filter=(landmarks, All)&Authorization=Bearer 0LIpgU9vKtvKHEk1TQQUk-yhmOGkOrHkBCgsxzUIgmikqcHbqHkwMpA1rhwlxxHhxt0P9y-xgBLRxw1_DotJKVZJ3SiT-JYQMrSdAZldMjJ_6dZYUpYaDJU255vVWXYx'

		return axios.get(encodedURI).then(function (response) {
				return response;
		}).catch(err => console.log(err))
	},*/

	getLocation: function () {
	    var showPosition = function (position) {
			var userLat = position.coords.latitude;
			var userLng = position.coords.longitude;
			var encodedURI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+userLat+","+userLng+"&key=AIzaSyAPcxvzzVjsR9zzeLUTBhV87D-a9OER6HQ";

			return axios.get(encodedURI).then(function (response) {
				//onsole.log('hi');
				//return response;
				console.log(response);
			}).catch(err => console.log(err))
		}

	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition)
	    }
	}
}
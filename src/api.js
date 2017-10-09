var rootUrl = 'api.openweathermap.org/data/2.5/weather?appid=add65b19e99e2370e9abc874f2d2fb5a&lat=11.53094&lon=104.9160883';

var kelvinToC = function(kelvin) {
	return Math.round(kelvin - 273.15) + '˚C' // To ˚C : kelvin - 273.15 - To ˚F : (kelvin - 273.15) * 1.8 + 32
};

module.exports = function(latitude, longitude) {
	// var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	var url = rootUrl;
	 // + '&lat=' + latitude + '&lon=' + longitude;

	return fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			return {
				city: json.name,
				temperature: kelvinToC(json.main.temp),
				description: json.weather[0].description
			}
		});
}
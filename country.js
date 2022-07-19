var countryNameEl = document.querySelector("#countryName");

var drinkingWaterInfo = document.querySelector("#drinkingWaterInfo");
console.log(drinkingWaterInfo);

var getCountryInfo = async (countryName) => {
    var queryString = document.location.search;
    var countryName = queryString.split('=')[1];

    if (countryName) {
        countryNameEl.textContent = countryName;
        console.log(countryNameEl.textContent);
        console.log(countryName);
    }

	return fetch(`https://travelbriefing.org/${countryName}?format=json`)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response);
			console.log(response.water);
			console.log(response.water.short);

			var water = document.createElement("div");
			console.log(response.water.short);
			water.innerHTML = "Drinking water in " + countryName + " is " + response.water.short + ".";
			console.log(water.innerHTML);
			drinkingWaterInfo.appendChild(water);

			// call map
			const latitude = response.maps.lat;
			const longitude = response.maps.long;
			const zoom = response.maps.zoom;
			
			setMap(latitude, longitude, zoom);
		})
		
};

getCountryInfo();

//google map
var map;

function initMap(lat = 39.952583, long = -75.165222, zoom = 8) {
	console.log(lat, long, zoom) 
	map = new google.maps.Map(document.getElementById("map"), {
	  center: { lat: lat, lng: long },
	  zoom: zoom,
	});
}

function setMap(lat = 39.952583, long = -75.165222, zoom = 8) {
	map.setCenter(new google.maps.LatLng(lat, long));
	map.setZoom(Number(zoom));
}
  
window.initMap = initMap;

//end of google map

var countryNameEl = document.querySelector("#countryName");

var drinkingWaterDescription = document.querySelector("#drinkingWaterDescription");
console.log(drinkingWaterDescription);
var drinkingWaterInfo = document.querySelector("#drinkingWaterInfo");
console.log(drinkingWaterInfo);

var timezoneDescription = document.querySelector("#timezoneDescription");
console.log(timezoneDescription);
var timezoneInfo = document.querySelector("#timezoneInfo");
console.log(timezoneInfo);

var currencyDescription = document.querySelector("#currencyDescription");
console.log(currencyDescription);
var currencyInfo = document.querySelector("#currencyInfo");
console.log(currencyInfo);

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
			// Travel Advise
			console.log(response);
			console.log(response.advise);
			console.log(response.advise.CA);
			console.log(response.advise.UA);
			console.log(response.advise.CA.advise);
			console.log(response.advise.UA.advise);
			console.log(response.advise.CA.url);
			console.log(response.advise.UA.url);


			var adviseDescription = document.createElement("div");
			adviseDescription.innerHTML = "Travel Advise";
			console.log(adviseDescription.innerHTML);
			travelAdviseDescription.appendChild(adviseDescription);

			var adviseCA = document.createElement("div");
			console.log(response.advise.CA.advise);
			adviseCA.innerHTML = "Canadian government: " + response.advise.CA.advise + " in " + countryName;
			console.log(adviseCA.innerHTML);
			travelAdviseInfo.appendChild(adviseCA);

			// Create anchor element.
			var urlCA = document.createElement('a'); 
			// Create the text node for anchor element.
			var link = document.createTextNode("Full Report from Canadian Government");
			// Append the text node to anchor element.
			urlCA.appendChild(link); 
			// Set the title.
			urlCA.title = "Full Report from Canadian Government";
			// Console log response.advise.CA.url
			console.log(response.advise.CA.url); 
			// Set the href property.
			urlCA.href = response.advise.CA.url;
			// Append the anchor element to the body.
			travelAdviseInfo.appendChild(urlCA); 

			var adviseUA = document.createElement("div");
			adviseUA.innerHTML = "Austrailian government: " + response.advise.UA.advise + " in " + countryName;
			console.log(adviseUA.innerHTML);
			travelAdviseInfo.appendChild(adviseUA);

			// Create anchor element.
			var urlUA = document.createElement('a'); 
			// Create the text node for anchor element.
			var link = document.createTextNode("Full Report from Australian Government");
			// Append the text node to anchor element.
			urlUA.appendChild(link); 
			// Set the title.
			urlUA.title = "Full Report from Australian Government";
			// Console log response.advise.CA.url
			console.log(response.advise.UA.url); 
			// Set the href property.
			urlUA.href = response.advise.UA.url;
			// Append the anchor element to the body.
			travelAdviseInfo.appendChild(urlUA);

			// Drinking water
			console.log(response);
			console.log(response.water);
			console.log(response.water.short);

			var waterDescription = document.createElement("div");
			waterDescription.innerHTML = "Drinking Water";
			console.log(waterDescription.innerHTML);
			drinkingWaterDescription.appendChild(waterDescription);
			var water = document.createElement("div");
			console.log(response.water.short);
			water.innerHTML = "Drinking tap water in " + countryName + " is " + response.water.short;
			console.log(water.innerHTML);
			drinkingWaterInfo.appendChild(water);

			// Timezone
			console.log(response);
			console.log(response.timezone);
			console.log(response.timezone.name);

			var timeDescription = document.createElement("div");
			timeDescription.innerHTML = "Timezone";
			console.log(timeDescription.innerHTML);
			timezoneDescription.appendChild(timeDescription);
			var time = document.createElement("div");
			console.log(response.timezone.name);
			time.innerHTML = response.timezone.name;
			console.log(time.innerHTML);
			timezoneInfo.appendChild(time);

			// Currency Converter
			console.log(response);
			console.log(response.currency);
			console.log(response.currency.code);

			var currDescription = document.createElement("div");
			currDescription.innerHTML = "Currency Converter";
			console.log(currDescription.innerHTML);
			currencyDescription.appendChild(currDescription);
			var currency = document.createElement("div");
			console.log(response.currency.code);
			currency.innerHTML = "The currency in " + countryName + " is " + response.currency.code + ".";
			console.log(currency.innerHTML);
			currencyInfo.appendChild(currency);

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

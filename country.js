// CountryName
var countryNameEl = document.querySelector("#countryName");
console.log(countryNameEl);

// Neighboring Countries
var neighboringCountryDescription = document.querySelector("#neighboringCountryDescription");
console.log(neighboringCountryDescription);
var neighboringCountryInfo = document.querySelector("#neighboringCountryInfo");
console.log(neighboringCountryInfo);

// Travel Advise 
var travelAdviseDescription = document.querySelector("#travelAdviseDescription");
console.log(travelAdviseDescription);
var travelAdviseInfo = document.querySelector("#travelAdviseInfo");
console.log(travelAdviseInfo);

// Drinking Water
var drinkingWaterDescription = document.querySelector("#drinkingWaterDescription");
console.log(drinkingWaterDescription);
var drinkingWaterInfo = document.querySelector("#drinkingWaterInfo");
console.log(drinkingWaterInfo);

// Timezone
var timezoneDescription = document.querySelector("#timezoneDescription");
console.log(timezoneDescription);
var timezoneInfo = document.querySelector("#timezoneInfo");
console.log(timezoneInfo);

// Currency
var currencyDescription = document.querySelector("#currencyDescription");
console.log(currencyDescription);
var currencyInfo = document.querySelector("#currencyInfo");
console.log(currencyInfo);

// Language
var languageDescription = document.querySelector("#languageDescription");
console.log(languageDescription);
var languageInfo = document.querySelector("#languageInfo");
console.log(languageInfo);

// Vaccinations and Health
var vaccinationsHealthDescription = document.querySelector("#vaccinationsHealthDescription");
console.log(vaccinationsHealthDescription);
var vaccinationsHealthInfo = document.querySelector("#vaccinationsHealthInfo");
console.log(vaccinationsHealth);

// Telephone
var telephoneDescription = document.querySelector("#telephoneDescription");
console.log(telephoneDescription);
var telephoneInfo = document.querySelector("#telephoneInfo");
console.log(telephoneInfo);

// Electricity
var electricityDescription = document.querySelector("#electricityDescription");
console.log(electricityDescription);
var electricityInfo = document.querySelector("#electricityInfo");
console.log(electricityInfo);

// Travel Briefing API URL
var travelRequestUrl = 'https://travelbriefing.org/countries.json';

// Nav Variables
var homeBtn = document.getElementById("home");
var homePage = 'index.html';
var browseBtn = document.getElementById("browse");
var browsePage = "countrylist.html";
var docBtn = document.getElementById("docs");
var docPage = 'doc.html';
var countryPage = 'country.html';
var travelPage = 'travel.html';
var surpriseBtn = document.getElementById("surprise");

var getCountryInfo = async (countryName) => {
	var queryString = document.location.search;
	console.log(queryString);
	var countryNameString = queryString.split('=')[1];
	console.log(countryNameString);
	console.log(countryNameString.replace('%20', ' '))
	var countryName = countryNameString.replace('%20', ' ');
	console.log(countryName);

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
			// Neighboring countries
			console.log(response);
			console.log(response.neighbors);

			// Neighboring countries description
			var neighborDescription = document.createElement("div");
			neighborDescription.innerHTML = "Neighboring Countries";
			console.log(neighborDescription.innerHTML);
			neighboringCountryDescription.appendChild(neighborDescription);

			// Neighboring countries info
			if (response.neighbors.length === 0) {
				var neighbor = document.createElement("div");
				neighbor.className = "neighbor";
				neighbor.innerHTML = "No data found";
				console.log(neighbor.innerHTML);
				languageInfo.appendChild(neighbor);
			} else {
				for (i = 0; i < response.neighbors.length; i++) {
					console.log(response.neighbors[i].name);
					var neighbor = document.createElement("div");
					neighbor.className = "neighbor";
					neighbor.innerHTML = response.neighbors[i].name;
					console.log(neighbor.innerHTML);
					neighboringCountryInfo.appendChild(neighbor);
				}
			}

			// Travel advise
			console.log(response);
			console.log(response.advise);

			// Travel advise description
			var adviseDescription = document.createElement("div");
			adviseDescription.innerHTML = "Travel Advise";
			console.log(adviseDescription.innerHTML);
			travelAdviseDescription.appendChild(adviseDescription);

			if (response.advise.length === 0) {
				var advise = document.createElement("div");
				advise.className = "advise";
				console.log(response.advise);
				advise.innerHTML = "No data found";
				console.log(advise.innerHTML);
				travelAdviseInfo.appendChild(advise);
			}

			// Canadian government travel advise summary
			if (response.advise.CA) {
				var adviseCA = document.createElement("div");
				adviseCA.className = "adviseCA";
				console.log(response.advise.CA.advise);
				adviseCA.innerHTML = "Canadian government: " + response.advise.CA.advise + " in " + countryName;
				console.log(adviseCA.innerHTML);
				travelAdviseInfo.appendChild(adviseCA);

				// Full report from Canadian govenment
				// Create anchor element
				var urlCA = document.createElement('a');
				// Add class name to anchor element
				urlCA.className = "urlCA";
				// Create the text node for anchor element
				var link = document.createTextNode("Full Report from Canadian Government");
				// Append the text node to anchor element
				urlCA.appendChild(link);
				// Set the title
				urlCA.title = "Full Report from Canadian Government";
				// Set the href property
				urlCA.href = response.advise.CA.url;
				// Append the anchor element to the body
				travelAdviseInfo.appendChild(urlCA);
			}

			// Australian government travel advise summary
			if (response.advise.UA) {
				var adviseUA = document.createElement("div");
				adviseUA.className = "adviseUA";
				adviseUA.innerHTML = "Austrailian government: " + response.advise.UA.advise + " in " + countryName;
				console.log(adviseUA.innerHTML);
				travelAdviseInfo.appendChild(adviseUA);

				// Full report from Australian govenment
				// Create anchor element.
				var urlUA = document.createElement('a');
				// Add class name to anchor element
				urlUA.className = "urlUA";
				// Create the text node for anchor element.
				var link = document.createTextNode("Full Report from Australian Government");
				// Append the text node to anchor element.
				urlUA.appendChild(link);
				// Set the title.
				urlUA.title = "Full Report from Australian Government";
				// Set the href property.
				urlUA.href = response.advise.UA.url;
				// Append the anchor element to the body.
				travelAdviseInfo.appendChild(urlUA);
			}

			// Drinking water
			console.log(response);
			console.log(response.water);
			console.log(response.water.short);

			// Drinking water description
			var waterDescription = document.createElement("div");
			waterDescription.innerHTML = "Drinking Water";
			console.log(waterDescription.innerHTML);
			drinkingWaterDescription.appendChild(waterDescription);

			// Drinking water info
			if (response.water.short === null) {
				var water = document.createElement("div");
				water.className = "water";
				water.innerHTML = "No data found";
				console.log(water.innerHTML);
				drinkingWaterInfo.appendChild(water);
			} else {
				var water = document.createElement("div");
				water.className = "water";
				water.innerHTML = "Drinking tap water in " + countryName + " is " + response.water.short;
				console.log(water.innerHTML);
				drinkingWaterInfo.appendChild(water);
			}

			// Timezone
			console.log(response);
			console.log(response.timezone);
			console.log(response.timezone.name);

			// Timezone description
			var timeDescription = document.createElement("div");
			timeDescription.innerHTML = "Timezone";
			console.log(timeDescription.innerHTML);
			timezoneDescription.appendChild(timeDescription);

			// Timezone info
			if (response.timezone.name === null) {
				var time = document.createElement("div");
				time.className = "time";
				time.innerHTML = "No data found";
				console.log(time.innerHTML);
				timezoneInfo.appendChild(time);
			} else {
				var time = document.createElement("div");
				time.className = "time";
				time.innerHTML = "The time zone in " + countryName + " is " + response.timezone.name;
				console.log(time.innerHTML);
				timezoneInfo.appendChild(time);
			}

			// Currency
			console.log(response);
			console.log(response.currency);
			console.log(response.currency.name);
			console.log(response.currency.symbol);

			// Currency description
			var currDescription = document.createElement("div");
			currDescription.innerHTML = "Currency";
			console.log(currDescription.innerHTML);
			currencyDescription.appendChild(currDescription);

			// Currency info
			if (response.currency.name === null) {
				var curr = document.createElement("div");
				curr.className = "curr";
				curr.innerHTML = "No data found";
				console.log(curr.innerHTML);
				currencyInfo.appendChild(curr);
			} else {
				var curr = document.createElement("div");
				curr.className = "curr";
				curr.innerHTML = "The currency in " + countryName + " is " + response.currency.name;
				console.log(curr.innerHTML);
				currencyInfo.appendChild(curr);
			}

			// Language
			console.log(response);
			console.log(response.language);

			// Language description
			var langDescription = document.createElement("div");
			langDescription.innerHTML = "Language";
			console.log(langDescription.innerHTML);
			languageDescription.appendChild(langDescription);

			// Language info
			if (response.language.length === 0) {
				var lang = document.createElement("div");
				lang.className = "lang";
				lang.innerHTML = "No data found";
				console.log(lang.innerHTML);
				languageInfo.appendChild(lang);
			} else {
				for (i = 0; i < response.language.length; i++) {
					console.log(response.language[i].language);
					var lang = document.createElement("div");
					lang.className = "lang";
					lang.innerHTML = response.language[i].language;
					console.log(lang.innerHTML);
					languageInfo.appendChild(lang);
				}
			}

			// Vaccinations and health
			console.log(response);
			console.log(response.vaccinations);

			// Vaccinations and health description
			var healthDescription = document.createElement("div");
			healthDescription.innerHTML = "Vaccinations and Health";
			console.log(healthDescription.innerHTML);
			vaccinationsHealthDescription.appendChild(healthDescription);

			// Vaccinations and health info
			if (response.vaccinations.length === 0) {
				var healthMessage = document.createElement("div");
				healthMessage.className = "healthMessage";
				healthMessage.innerHTML = "No data found";
				console.log(healthMessage.innerHTML);
				vaccinationsHealthInfo.appendChild(healthMessage);
			} else {
				for (i = 0; i < response.vaccinations.length; i++) {
					console.log(response.vaccinations[i].name);
					var healthName = document.createElement("div");
					healthName.className = "healthName";
					healthName.innerHTML = response.vaccinations[i].name;
					console.log(healthName.innerHTML);
					vaccinationsHealthInfo.appendChild(healthName);
					console.log(response.vaccinations[i].message);
					var healthMessage = document.createElement("div");
					healthMessage.className = "healthMessage";
					healthMessage.innerHTML = response.vaccinations[i].message;
					console.log(healthMessage.innerHTML);
					vaccinationsHealthInfo.appendChild(healthMessage);
				}
			}

			// Telephone
			console.log(response);
			console.log(response.telephone);
			console.log(response.telephone.calling_code);
			console.log(response.telephone.ambulance);
			console.log(response.telephone.fire);
			console.log(response.telephone.police);

			// Telephone description
			var phoneDescription = document.createElement("div");
			phoneDescription.innerHTML = "Telephone";
			console.log(phoneDescription.innerHTML);
			telephoneDescription.appendChild(phoneDescription);

			// Calling code telephone info
			if (response.telephone.calling_code === null) {
				var callingCode = document.createElement("div");
				callingCode.className = "callingCode";
				callingCode.innerHTML = " 📞 " + "No data found";
				console.log(callingCode.innerHTML);
				telephoneInfo.appendChild(callingCode);
			} else {
				var callingCode = document.createElement("div");
				callingCode.className = "callingCode";
				callingCode.innerHTML = " 📞 " + response.telephone.calling_code;
				console.log(callingCode.innerHTML);
				telephoneInfo.appendChild(callingCode);
			}

			// Ambulance telephone info
			if (response.telephone.ambulance === "") {
				var ambulance = document.createElement("div");
				ambulance.className = "ambulance";
				ambulance.innerHTML = "🚑 " + "No data found";
				console.log(ambulance.innerHTML);
				telephoneInfo.appendChild(ambulance);
			} else {
				var ambulance = document.createElement("div");
				ambulance.className = "ambulance";
				ambulance.innerHTML = "🚑 " + response.telephone.ambulance;
				console.log(ambulance.innerHTML);
				telephoneInfo.appendChild(ambulance);
			}

			// Fire telephone info
			if (response.telephone.fire === "") {
				var fire = document.createElement("div");
				fire.className = "fire";
				fire.innerHTML = "🔥 " + "No data found";
				console.log(fire.innerHTML);
				telephoneInfo.appendChild(fire);
			} else {
				var fire = document.createElement("div");
				fire.className = "fire";
				fire.innerHTML = "🔥 " + response.telephone.fire;
				console.log(fire.innerHTML);
				telephoneInfo.appendChild(fire);
			}

			// Police telephone info
			if (response.telephone.police === "") {
				var police = document.createElement("div");
				police.className = "police";
				police.innerHTML = "🚓 " + "No data found";
				console.log(police.innerHTML);
				telephoneInfo.appendChild(police);
			} else {
				var police = document.createElement("div");
				police.className = "police";
				police.innerHTML = "🚓 " + response.telephone.police;
				console.log(police.innerHTML);
				telephoneInfo.appendChild(police);
			}

			// Electricity
			console.log(response);
			console.log(response.electricity);
			console.log(response.electricity.voltage);
			console.log(response.electricity.frequency);
			console.log(response.electricity.plugs);

			// Electricity description
			var elecDescription = document.createElement("div");
			elecDescription.innerHTML = "Electricity";
			console.log(elecDescription.innerHTML);
			electricityDescription.appendChild(elecDescription);

			// Voltage electricity info
			if (response.electricity.voltage === "") {
				var voltage = document.createElement("div");
				voltage.className = "voltage";
				voltage.innerHTML = "Voltage: No data found";
				console.log(voltage.innerHTML);
				electricityInfo.appendChild(voltage);
			} else {
				var voltage = document.createElement("div");
				voltage.className = "voltage";
				voltage.innerHTML = "Voltage: " + response.electricity.voltage;
				console.log(voltage.innerHTML);
				electricityInfo.appendChild(voltage);
			}

			// Frequency electricity info
			if (response.electricity.frequency === "") {
				var frequency = document.createElement("div");
				frequency.className = "frequency";
				frequency.innerHTML = "Frequency: No data found";
				console.log(frequency.innerHTML);
				electricityInfo.appendChild(frequency);
			} else {
				var frequency = document.createElement("div");
				frequency.className = "frequency";
				frequency.innerHTML = "Frequency: " + response.electricity.frequency;
				console.log(frequency.innerHTML);
				electricityInfo.appendChild(frequency);
			}

			// Plugs electricity info
			if (response.electricity.plugs.length === 0) {
				console.log("Empty");
				var plug = document.createElement("div");
				plug.className = "plug";
				plug.innerHTML += "Plug type: No data found";
				electricityInfo.appendChild(plug);
			} else {
				var plugsResponse = response.electricity.plugs;
				plugsResponse.forEach(display)
				function display(item) {
					var plug = document.createElement("div");
					plug.className = "plug";
					plug.innerHTML += "Plug type: " + item + "<br>";
					electricityInfo.appendChild(plug);
				}
			}

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

// generate random country when user clicks 'surprise me'
$("#surprise").click(function () {
	var countryNames = [];
	$("#country-anchor").remove();
	$("#alert-message").remove();
	fetch(travelRequestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				countryNames.push(data[i].name);
				var randomIndex = Math.floor(Math.random() * countryNames.length);
				document.location.replace('./country.html?country=' + countryNames[randomIndex]);
			}
		})
})

$("#home").click(function () {
	document.location.replace(homePage);
})

$("#docs").click(function () {
	document.location.replace(docPage);
})

$("#browse").click(function () {
	document.location.replace(browsePage);
})
var countryNameEl = document.querySelector("#countryName");

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

// Visa Requirements
var visaRequirementsDescription = document.querySelector("#visaRequirementsDescription");
console.log(visaRequirementsDescription);
var visaRequirementsInfo = document.querySelector("#visaRequirementsInfo");
console.log(visaRequirementsInfo);

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

// Weather
var weatherDescription = document.querySelector("#weatherDescription");
console.log(weatherDescription);
var weatherInfo = document.querySelector("#weatherInfo");
console.log(weatherInfo);

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
			console.log(response.advise);
			console.log(response.advise.CA);
			console.log(response.advise.UA);
			console.log(response.advise.CA.advise);
			console.log(response.advise.UA.advise);
			console.log(response.advise.CA.url);
			console.log(response.advise.UA.url);

			// Travel advise description
			var adviseDescription = document.createElement("div");
			adviseDescription.innerHTML = "Travel Advise";
			console.log(adviseDescription.innerHTML);
			travelAdviseDescription.appendChild(adviseDescription);

			var adviseCA = document.createElement("div");
			adviseCA.className = "adviseCA";
			console.log(response.advise.CA.advise);
			adviseCA.innerHTML = "Canadian government: " + response.advise.CA.advise + " in " + countryName;
			console.log(adviseCA.innerHTML);
			travelAdviseInfo.appendChild(adviseCA);

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

			var adviseUA = document.createElement("div");
			adviseUA.className = "adviseUA";
			adviseUA.innerHTML = "Austrailian government: " + response.advise.UA.advise + " in " + countryName;
			console.log(adviseUA.innerHTML);
			travelAdviseInfo.appendChild(adviseUA);

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

			// Drinking water
			console.log(response);
			console.log(response.water);
			console.log(response.water.short);

			var waterDescription = document.createElement("div");
			waterDescription.innerHTML = "Drinking Water";
			console.log(waterDescription.innerHTML);
			drinkingWaterDescription.appendChild(waterDescription);

			var water = document.createElement("div");
			water.className = "water"; 
			water.innerHTML = "Drinking tap water in " + countryName + " is " + response.water.short;
			console.log(water.innerHTML);
			drinkingWaterInfo.appendChild(water);
			
			// Visa requirements

			// Timezone
			console.log(response);
			console.log(response.timezone);
			console.log(response.timezone.name);

			var timeDescription = document.createElement("div");
			timeDescription.innerHTML = "Timezone";
			console.log(timeDescription.innerHTML);
			timezoneDescription.appendChild(timeDescription);

			var time = document.createElement("div");
			time.className = "time";
			time.innerHTML = response.timezone.name;
			console.log(time.innerHTML);
			timezoneInfo.appendChild(time);

			// Currency
			console.log(response);
			console.log(response.currency);
			console.log(response.currency.code);

			var currDescription = document.createElement("div");
			currDescription.innerHTML = "Currency";
			console.log(currDescription.innerHTML);
			currencyDescription.appendChild(currDescription);

			var curr = document.createElement("div");
			curr.className = "curr";
			curr.innerHTML = "The currency in " + countryName + " is " + response.currency.code + ".";
			console.log(curr.innerHTML);
			currencyInfo.appendChild(curr);

			// Language
			console.log(response);
			console.log(response.language);
			console.log(response.language[0].language);

			var langDescription = document.createElement("div");
			langDescription.innerHTML = "Language";
			console.log(langDescription.innerHTML);
			languageDescription.appendChild(langDescription);

			var lang = document.createElement("div");
			lang.className = "lang";
			lang.innerHTML = "The language spoken in " + countryName + " is " + response.language[0].language;
			console.log(lang.innerHTML);
			languageInfo.appendChild(lang);

			// Weather

			// Vaccinations and health

			// Telephone
			console.log(response);
			console.log(response.telephone);
			console.log(response.telephone.calling_code);
			console.log(response.telephone.ambulance);
			console.log(response.telephone.fire);
			console.log(response.telephone.police);

			var phoneDescription = document.createElement("div");
			phoneDescription.innerHTML = "Telephone";
			console.log(phoneDescription.innerHTML);
			telephoneDescription.appendChild(phoneDescription);
			
			var callingCode = document.createElement("div");
			callingCode.className = "callingCode";
			callingCode.innerHTML = " 📞 +" + response.telephone.calling_code;
			console.log(callingCode.innerHTML);
			telephoneInfo.appendChild(callingCode);

			var ambulance = document.createElement("div");
			ambulance.className = "ambulance";
			ambulance.innerHTML = "🚑 " + response.telephone.ambulance;
			console.log(ambulance.innerHTML);
			telephoneInfo.appendChild(ambulance);

			var fire = document.createElement("div");
			fire.className = "fire";
			fire.innerHTML = "🔥 " + response.telephone.fire;
			console.log(fire.innerHTML);
			telephoneInfo.appendChild(fire);

			var police = document.createElement("div");
			police.className = "police";
			police.innerHTML = "🚓 " + response.telephone.police;
			console.log(police.innerHTML);
			telephoneInfo.appendChild(police);

			// Electricity
			console.log(response);
			console.log(response.electricity);
			console.log(response.electricity.voltage);
			console.log(response.electricity.frequency);
			console.log(response.electricity.plugs);

			var elecDescription = document.createElement("div");
			elecDescription.innerHTML = "Electricity";
			console.log(elecDescription.innerHTML);
			electricityDescription.appendChild(elecDescription);

			var voltage = document.createElement("div");
			voltage.className = "voltage";
			voltage.innerHTML = "Voltage: " + response.electricity.voltage;
			console.log(voltage.innerHTML);
			electricityInfo.appendChild(voltage);

			var frequency = document.createElement("div");
			frequency.className = "frequency";
			frequency.innerHTML = "Frequency: " + response.electricity.frequency;
			console.log(frequency.innerHTML);
			electricityInfo.appendChild(frequency);

			var plugsResponse = response.electricity.plugs;
			plugsResponse.forEach(display)
			function display(item) {
				var plug = document.createElement("div");
				plug.className = "plug";
				plug.innerHTML += "Plug type: " + item + "<br>";
				electricityInfo.appendChild(plug);
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

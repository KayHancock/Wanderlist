// CountryName
var countryNameEl = document.querySelector("#countryName");

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
			// Neighboring countries
			console.log(response);
			console.log(response.neighbors);
			console.log(response.neighbors[0].name);
			console.log(response.neighbors[1].name);
			console.log(response.neighbors[2].name);
			console.log(response.neighbors[3].name);
			console.log(response.neighbors[4].name);

			// Neighboring countries description
			var neighborDescription = document.createElement("div");
			neighborDescription.innerHTML = "Neighboring Countries";
			console.log(neighborDescription.innerHTML);
			neighboringCountryDescription.appendChild(neighborDescription);

			// Neighboring countries info
			var neighbor = document.createElement("div");
			neighbor.className = "neighbor";
			neighbor.innerHTML = "Some countries that neighbor " + countryName + " include: " + response.neighbors[0].name + ", " + response.neighbors[1].name + ", " + response.neighbors[2].name + ", " + response.neighbors[3].name + ", " + response.neighbors[4].name;
			console.log(neighbor.innerHTML);
			neighboringCountryInfo.appendChild(neighbor);

			// Travel advise
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

			// Canadian government travel advise summary
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

			// Australian government travel advise summary
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

			// Timezone description
			var timeDescription = document.createElement("div");
			timeDescription.innerHTML = "Timezone";
			console.log(timeDescription.innerHTML);
			timezoneDescription.appendChild(timeDescription);

			// Timezone info
			var time = document.createElement("div");
			time.className = "time";
			time.innerHTML = "The time zone in " + countryName + " is " + response.timezone.name;
			console.log(time.innerHTML);
			timezoneInfo.appendChild(time);

			// Currency
			console.log(response);
			console.log(response.currency);
			console.log(response.currency.code);

			// Currency description
			var currDescription = document.createElement("div");
			currDescription.innerHTML = "Currency";
			console.log(currDescription.innerHTML);
			currencyDescription.appendChild(currDescription);

			// Currency info
			var curr = document.createElement("div");
			curr.className = "curr";
			curr.innerHTML = "The currency in " + countryName + " is " + response.currency.code;
			console.log(curr.innerHTML);
			currencyInfo.appendChild(curr);

			// Language
			console.log(response);
			console.log(response.language);
			console.log(response.language[0].language);

			// Language description
			var langDescription = document.createElement("div");
			langDescription.innerHTML = "Language";
			console.log(langDescription.innerHTML);
			languageDescription.appendChild(langDescription);

			// Language info
			var lang = document.createElement("div");
			lang.className = "lang";
			lang.innerHTML = "The language spoken in " + countryName + " is " + response.language[0].language;
			console.log(lang.innerHTML);
			languageInfo.appendChild(lang);

			// Weather

			// Vaccinations and health
			console.log(response);
			console.log(response.vaccinations);
			console.log(response.vaccinations[0]);
			console.log(response.vaccinations[0].name);
			console.log(response.vaccinations[0].message);
			console.log(response.vaccinations[1]);
			console.log(response.vaccinations[1].name);
			console.log(response.vaccinations[1].message);
			console.log(response.vaccinations[2]);
			console.log(response.vaccinations[2].name);
			console.log(response.vaccinations[2].message);
			console.log(response.vaccinations[3]);
			console.log(response.vaccinations[3].name);
			console.log(response.vaccinations[3].message);
			console.log(response.vaccinations[4]);
			console.log(response.vaccinations[4].name);
			console.log(response.vaccinations[4].message);
			console.log(response.vaccinations[5]);
			console.log(response.vaccinations[5].name);
			console.log(response.vaccinations[5].message);

			var healthDescription = document.createElement("div");
			healthDescription.innerHTML = "Vaccinations and Health";
			console.log(healthDescription.innerHTML);
			vaccinationsHealthDescription.appendChild(healthDescription);
			
			var healthName0 = document.createElement("div");
			healthName0.className = "healthName0";
			healthName0.innerHTML = response.vaccinations[0].name;
			console.log(healthName0.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName0);

			var healthMessage0 = document.createElement("div");
			healthMessage0.className = "healthMessage0";
			healthMessage0.innerHTML = response.vaccinations[0].message;
			console.log(healthMessage0.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage0);

			var healthName1 = document.createElement("div");
			healthName1.className = "healthName1";
			healthName1.innerHTML = response.vaccinations[1].name;
			console.log(healthName1.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName1);

			var healthMessage1 = document.createElement("div");
			healthMessage1.className = "healthMessage1";
			healthMessage1.innerHTML = response.vaccinations[1].message;
			console.log(healthMessage1.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage1);

			var healthName2 = document.createElement("div");
			healthName2.className = "healthName2";
			healthName2.innerHTML = response.vaccinations[2].name;
			console.log(healthName2.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName2);

			var healthMessage2 = document.createElement("div");
			healthMessage2.className = "healthMessage2";
			healthMessage2.innerHTML = response.vaccinations[2].message;
			console.log(healthMessage2.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage2);

			var healthName3 = document.createElement("div");
			healthName3.className = "healthName3";
			healthName3.innerHTML = response.vaccinations[3].name;
			console.log(healthName3.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName3);

			var healthMessage3 = document.createElement("div");
			healthMessage3.className = "healthMessage3";
			healthMessage3.innerHTML = response.vaccinations[3].message;
			console.log(healthMessage3.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage3);

			var healthName4 = document.createElement("div");
			healthName4.className = "healthName4";
			healthName4.innerHTML = response.vaccinations[4].name;
			console.log(healthName4.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName4);

			var healthMessage4 = document.createElement("div");
			healthMessage4.className = "healthMessage4";
			healthMessage4.innerHTML = response.vaccinations[4].message;
			console.log(healthMessage4.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage4);

			var healthName5 = document.createElement("div");
			healthName5.className = "healthName5";
			healthName5.innerHTML = response.vaccinations[5].name;
			console.log(healthName5.innerHTML);
			vaccinationsHealthInfo.appendChild(healthName5);

			var healthMessage5 = document.createElement("div");
			healthMessage5.className = "healthMessage5";
			healthMessage5.innerHTML = response.vaccinations[5].message;
			console.log(healthMessage5.innerHTML);
			vaccinationsHealthInfo.appendChild(healthMessage5);

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
			var callingCode = document.createElement("div");
			callingCode.className = "callingCode";
			callingCode.innerHTML = " 📞 +" + response.telephone.calling_code;
			console.log(callingCode.innerHTML);
			telephoneInfo.appendChild(callingCode);

			// Ambulance telephone info
			var ambulance = document.createElement("div");
			ambulance.className = "ambulance";
			ambulance.innerHTML = "🚑 " + response.telephone.ambulance;
			console.log(ambulance.innerHTML);
			telephoneInfo.appendChild(ambulance);

			// Fire telephone info
			var fire = document.createElement("div");
			fire.className = "fire";
			fire.innerHTML = "🔥 " + response.telephone.fire;
			console.log(fire.innerHTML);
			telephoneInfo.appendChild(fire);

			// Police telephone info
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

			// Electricity description
			var elecDescription = document.createElement("div");
			elecDescription.innerHTML = "Electricity";
			console.log(elecDescription.innerHTML);
			electricityDescription.appendChild(elecDescription);

			// Voltage electricity info
			var voltage = document.createElement("div");
			voltage.className = "voltage";
			voltage.innerHTML = "Voltage: " + response.electricity.voltage;
			console.log(voltage.innerHTML);
			electricityInfo.appendChild(voltage);

			// Frequency electricity info
			var frequency = document.createElement("div");
			frequency.className = "frequency";
			frequency.innerHTML = "Frequency: " + response.electricity.frequency;
			console.log(frequency.innerHTML);
			electricityInfo.appendChild(frequency);

			// Plugs electricity info
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

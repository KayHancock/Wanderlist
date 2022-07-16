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
		})
		
};

getCountryInfo();
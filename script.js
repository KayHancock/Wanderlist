// Variables 
var travelRequestUrl = 'https://travelbriefing.org/countries.json';
var countryNames = [];
var submitBtnEl = $('#submitBtn');
var countrySelector = $('#country-selector');
// API Fetch Requests

// Hotel API
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9572fd035msh13565d5f0f8a81bp1f763bjsn7e7b5a735ea3',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// travel briefing
const getCountryInfo = async (country) => {
    return fetch(`https://travelbriefing.org/${country}?format=json`)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
};


fetch(travelRequestUrl)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			countryNames.push(data[i].name);
			}
	})

	console.log(countryNames);

$(function () {
	$("#country-selector").autocomplete({
		source: countryNames
	});
});

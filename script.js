// Variables 
var travelRequestUrl = 'https://travelbriefing.org/countries.json';
var countryNames = [];
var countrySelector = $('#country-selector');
var homeBtn = document.getElementById("home");
var homePage = 'index.html';
var browseBtn = document.getElementById("browse");
var browsePage = "countrylist.html";
var docBtn = document.getElementById("docs");
var docPage = 'doc.html';
var countryPage = 'country.html';
var travelPage = 'travel.html';
var surpriseBtn = document.getElementById("surprise");
var searchBtn = document.getElementById("search");
var countryRef = document.querySelector("#countryRef");
var countryEl = document.createElement('a');

// API Fetch Requests

// Hotel API
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9572fd035msh13565d5f0f8a81bp1f763bjsn7e7b5a735ea3',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};


// Travel-Breifing on page
function countrySearch() {
	$("#country-anchor").remove();
	$("#alert-message").remove();
	var country = countrySelector.val();
	console.log(country);
	if (countryNames.includes(countrySelector.val())) {
	countryEl.setAttribute('href', './country.html?country=' + country);
	countryEl.setAttribute('id', 'country-anchor')

	countryEl.innerHTML = country;
	countryRef.appendChild(countryEl);
	} else {
		var alertMessage = $("<p id='alert-message'></p>").text("Please select a country from the dropdown list or click 'Surprise Me'");
		$("#countryRef").append(alertMessage);
	}

}

// create array of countries from TravelBriefing API
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

// Autocomplete for country list in index.html search bar
$(function () {
	$("#country-selector").autocomplete({
		source: countryNames,
		classes:{
			"ui-autocomplete": "highlight"
		}
	});
});

// Functions

// generate random country when user clicks 'surprise me'
$("#surprise").click(function() {
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


$("#browse").click(function() {
	document.location.replace(browsePage);
})

$("#docs").click(function() {
	document.location.replace(docPage);
})


// Event Listeners
searchBtn.addEventListener("click", countrySearch);

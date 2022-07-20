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


function countrySearch() {
	var searchedCountry = countrySelector.val()
	document.location.replace('./country.html?country=' + searchedCountry)
	
}

function displayBrowse () {
	document.location.replace(browsePage);
}

function displayHome () {
	document.location.replace(homePage);
}

function displayDoc () {
	document.location.replace(docPage);
}

// Event Listeners
browseBtn.addEventListener("click", displayBrowse);
docBtn.addEventListener("click", displayDoc);
searchBtn.addEventListener("click", countrySearch);
surpriseBtn.addEventListener("click", displayCountry);

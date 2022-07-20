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

// API Fetch Requests
// Travel-Breifing on page
function countrySearch() {
	$("#country-anchor").remove();
	$("#alert-message").remove();
	var country = countrySelector.val();
	console.log(country);
	if (countryNames.includes(countrySelector.val())) {
		var countryEl = document.createElement('a');
	countryEl.setAttribute('href', './country.html?country=' + country);
	countryEl.setAttribute('id', 'country-anchor')

	countryEl.innerHTML = country;
	countryRef.appendChild(countryEl);
	} else {
		var alertMessage = $("<p id='alert-message'></p>").text("Please select a country from the dropdown list");
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
function countryLoad () {
	countrySearch()

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
homeBtn.addEventListener("click", displayHome);
docBtn.addEventListener("click", displayDoc);
searchBtn.addEventListener("click", countrySearch);
surpriseBtn.addEventListener("click", displayCountry);

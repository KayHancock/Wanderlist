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


// Travel-Breifing on page
function countrySearch() {
	var country = countrySelector.val();
	console.log(country);

	var countryEl = document.createElement('a');
    countryEl.setAttribute('href', './country.html?country=' + country);

	countryEl.innerHTML = country;
	countryRef.appendChild(countryEl);
}

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
if (searchBtn) {
	searchBtn.addEventListener("click", countrySearch);
}
surpriseBtn.addEventListener("click", displayCountry);


//google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.952583, lng: -75.165222 },
    zoom: 8,
  });
}

window.initMap = initMap;
//end of google map
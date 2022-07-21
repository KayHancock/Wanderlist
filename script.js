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



// Autocomplete for country list in index.html search bar
$(function () {
	$("#country-selector").autocomplete({
		source: countryNames,
		classes:{
			"ui-autocomplete": "highlight"
		}
	});
});

// Saved search history on homepage

function searchHistory () {
	var searchedCountry = localStorage.getItem('SavedSearch');
	if (typeof searchedCountry === 'string') {
		$('#saved-searches').removeClass("is-hidden");
		var browseCountry = document.createElement('a');
		browseCountry.setAttribute('href', './country.html?country=' + searchedCountry.innerHTML);
		browseCountry.innerHTML = searchedCountry;
		$("#saved-searches").append(browseCountry);
	}
}

searchHistory();

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

// dynamic redirect to country pages for searched country when user hits submit button
function countrySearch() {
	var searchedCountry = countrySelector.val()
	console.log(searchedCountry);
	if (countryNames.includes(searchedCountry)) {
		localStorage.setItem('SavedSearch', searchedCountry);
		document.location.replace('./country.html?country=' + searchedCountry);
	} else {
		var errorMessage = $("<p id=alert-message></p>").text("That is not a supported country.")
		$('#countryRef').append(errorMessage)
		}}

function displayBrowse () {
	document.location.replace(browsePage);
}

$("#browse").click(function() {
	document.location.replace(browsePage);
})

$("#docs").click(function() {
	document.location.replace(docPage);
})


// Event Listeners
searchBtn.addEventListener("click", countrySearch);
//surpriseBtn.addEventListener("click", displayCountry);


// search history to local storage
function getCountryToLocalStorage(){
	//console.log(localStorage.getItem("list-country"));
	return localStorage.getItem("list-country") ? JSON.parse(localStorage.getItem("list-country")) : [];
}
   
function saveCountryToLocalStorage(countrySearch){
   let countries = getCountryToLocalStorage()
   
   countries.push(countrySearch);
   
   localStorage.setItem("list-country",JSON.stringify(countries));
}

window.addEventListener("load", () => {
	displaySearchHistory()

})

function displaySearchHistory() {
	const countries = getCountryToLocalStorage();
	//console.log()
	const ul = document.createElement("ul")
	countries.map((country) => {
		const li = document.createElement("li");
	
		li.addEventListener("click", (e) => {
			// call search function
			console.log(e.target.textContent)
		})
	
		li.textContent = country;
		ul.appendChild(li);
	})
	document.getElementById("mo-whi").appendChild(ul)
};

   

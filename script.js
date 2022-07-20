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
		saveCountryToLocalStorage(country)
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

   

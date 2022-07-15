// Variables 
var homeBtn = document.getElementById("home");
var homePage = 'index.html';
var browseBtn = document.getElementById("browse");
var browsePage = "countrylist.html";
var docBtn = document.getElementById("docs");
var docPage = 'doc.html';
var countryPage = 'country.html';
var surpriseBtn = document.getElementById("surprise");
var searchBtn = document.getElementById("search");

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

// TravelBriefing API
const getCountryInfo = async (country) => {
    return fetch(`https://travelbriefing.org/${country}?format=json`)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
};


// Functions
function displayBrowse () {
	document.location.replace(browsePage);
}

function displayHome () {
	document.location.replace(homePage);
}

function displayDoc () {
	document.location.replace(docPage);
}

function displayCountry () {
	document.location.replace(countryPage);
}

// Event Listeners
browseBtn.addEventListener("click", displayBrowse);
homeBtn.addEventListener("click", displayHome);
docBtn.addEventListener("click", displayDoc);
searchBtn.addEventListener("click", displayCountry);


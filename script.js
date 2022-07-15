// Variables 
var homePage = document.getElementById("home");
var browsePage = document.getElementById("browse");
var docPage = document.getElementById("docs");
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

// travel briefing
// const getCountryInfo = async (country) => {
//     return fetch(`https://travelbriefing.org/${country}?format=json`)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
// };

// Travel-Breifing on page
var countryForm = document.querySelector("#countryForm");
var countryName = document.querySelector("#countryname");
var search = document.querySelector("#search");

function countrySearch() {
	var country = document.getElementById("countryname").value;
	console.log(country);
    var getCountryInfo = async (country) => {
        return fetch(`https://travelbriefing.org/${country}?format=json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                console.log(response);
            })
    };
	console.log(country);
    getCountryInfo(country);
}

search.addEventListener("click", countrySearch);


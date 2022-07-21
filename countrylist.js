// Travel Briefing API URL
var travelRequestUrl = 'https://travelbriefing.org/countries.json';

// Nav Variables
var homeBtn = document.getElementById("home");
var homePage = 'index.html';
var browseBtn = document.getElementById("browse");
var browsePage = "countrylist.html";
var docBtn = document.getElementById("docs");
var docPage = 'doc.html';
var countryPage = 'country.html';
var travelPage = 'travel.html';
var surpriseBtn = document.getElementById("surprise");

function displayBrowse () {
	console.log('displayBrowse');
	fetch(travelRequestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			console.log($("#countryList"));
			for (var i = 0; i < data.length; i++) {
				var browseCountry = document.createElement('a');
				browseCountry.setAttribute('href', './country.html?country=' + data[i].name);
				browseCountry.innerHTML = data[i].name;
				browseCountry.classList.add("countryList");
				$("#countryList").append(browseCountry);
			}	
		})
	
}

displayBrowse();

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

// Nav functions

$("#home").click(function() {
	document.location.replace(homePage);
})

$("#docs").click(function() {
	document.location.replace(docPage);
})

//Navbar Hamburger Toggle
$(document).ready(function() {

	$(".navbar-burger").click(function() {
  
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
  
	});
  });
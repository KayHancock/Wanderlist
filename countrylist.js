var travelRequestUrl = 'https://travelbriefing.org/countries.json';

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
				$("#countryList").append(browseCountry);
			}	
		})
	
}

displayBrowse();
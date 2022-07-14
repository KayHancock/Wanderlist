// Variables 

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
const getCountryInfo = async (country) => {
    return fetch(`https://travelbriefing.org/${country}?format=json`)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
};


<<<<<<< HEAD
// Travel Briefing API
const searchCountry = async (country) => {
  const countryInfo = await getCountryInfo(country);
  document.getElementById("search-result").innerHTML = `
    <ul>
      <li>Country Name: ${countryInfo.names.name}</li>
      <li>Full Country Name: ${countryInfo.names.full}</li>
      <li>ISO2: ${countryInfo.names.iso2}</li>
      <li>ISO3: ${countryInfo.names.iso3}</li>
      <li>Continent: ${countryInfo.names.continent}</li>
    </ul>
    <ul>
      <li>Latitude: ${countryInfo.maps.lat}</li>
      <li>Longitude: ${countryInfo.maps.long}</li>
      <li>Zoom: ${countryInfo.maps.zoom}</li>
    </ul>
    <ul>
      <li>Timezone: ${countryInfo.timezone.name}</li>
    </ul>
    <ul>
      <li>Language: ${countryInfo.language[0].language}</li>
      <li>Official: ${countryInfo.language[0].official}</li>
    </ul>
    <ul>
      <li>Currency: ${countryInfo.currency.name}</li>
      <li>Currency Code: ${countryInfo.currency.code}</li>
      <li>Symbol: ${countryInfo.currency.symbol}</li>
    </ul>
  `;
};

const getCountryInfo = async (country) => {
  return fetch(`https://travelbriefing.org/${country}?format=json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

document.getElementById("app").innerHTML = `
  <h1>Hello Traveller!</h1>
  <form id="form-search-country">
    <label for="country">Search by country:</label><br>
    <input type="text" id="country" name="country"><br>
    <input type="submit" value="Submit">
  </form> 
  <div id="search-result"></div>
`;

document
  .getElementById("form-search-country")
  .addEventListener("submit", function (evt) {
    evt.preventDefault();
    var data = new FormData(evt.target);
    searchCountry(data.get("country"));
  });
=======
>>>>>>> 91f74ed150d6deaed018069a797d1cd52717db8f

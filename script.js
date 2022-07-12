//Variables 


//API Fetch Requests
//Fixer API (currency exchange)
var myHeaders = new Headers();
myHeaders.append("apikey", "kSJyqbTcJpl631qdUTIm4KBNnsmZDdE0");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/convert?to=EUR&from=USD&amount=100", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//Functions
console.log(myHeaders);


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
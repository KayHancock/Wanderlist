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

//Functions
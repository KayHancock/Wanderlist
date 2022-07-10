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
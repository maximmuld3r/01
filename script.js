
const maxApi = require ("max-api");

var XMLhttprequest = require("xmlhttprequest").XMLHttpRequest;

let xhttp = new XMLhttprequest();

let url = "http://api.waqi.info/feed/shanghai/?token=fe37f5aae10ce023fe2e76576bdc889336c134fc";

maxApi.addHandler('makeRequest',function(){
  xhttp.open('GET', url, false);
  xhttp.send();

});

xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
  let response = JSON.parse(this.responseText);
  maxApi.outlet(response.data.aqi);
 
}
}

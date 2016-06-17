var prompt = require('prompt');
var open = require('open');
var request = require('request');



// Say hello
console.log("Welcome to the Space Jam please pick the YYYY-MM-DD you want to travel to (after 1996)!");
// prompt user for AP
prompt.start();
prompt.get(['setDate'], function (err, result) {
  console.log('Off to ' + result.setDate + ' away we go!')
  var nasaThing = new Nasapic(result.setDate);
});

function Nasapic(picDate){
 this.picDate = picDate;
 this.setDate();
}


Nasapic.prototype.setDate = function(){
 var self = this;
 request('https://api.nasa.gov/planetary/apod?api_key=tK09tzi66i3PQVen42IpjxYqDcPb7eN9biLCuehB&date=' + encodeURIComponent(this.picDate), function (error, response, body) {
   if (!error && response.statusCode == 200) {
     console.log(typeof body)
     var bodyObject = JSON.parse(body);
     console.log(typeof bodyObject)
     var image = bodyObject.url;
     open(image);
   };
 });

}


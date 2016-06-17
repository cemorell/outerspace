var prompt = require('prompt');
var open = require('open');
var request = require('request');
const delay = require('delay');


// Say hello
console.log("Can you handle the Space Jam? Pick a date (after 1996)");
prompt.start();
prompt.get(['findinfo'], function (err, result) {
  console.log('Off to ' + result.findinfo + ' away we go!')
  var nasaThing = new Nasapic(result.findinfo);
});


function Nasapic(picDate){
 this.picDate = picDate;
 this.setDate();
}


Nasapic.prototype.setDate = function(){
 var self = this;
 request('https://api.nasa.gov/planetary/apod?api_key=tK09tzi66i3PQVen42IpjxYqDcPb7eN9biLCuehB&date=' + encodeURIComponent(this.picDate), function (error, response, body) {
   if (!error && response.statusCode == 200) {
     var bodyObject = JSON.parse(body);
     console.log(bodyObject.title);
     console.log(bodyObject.explanation);
     var image = bodyObject.hdurl;
      delay(9000)
  .then(() => {
      open('https://www.youtube.com/watch?v=J9FImc2LOr8');
      delay(2300)
  .then(() => {
      open(image);
    });
  });

   };
 });

}


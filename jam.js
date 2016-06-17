// var request = require('request');

// function Nasapic(picDate, callback){
//  this.callback = callback;
//  this.picDate = picDate;
//  this.setDate();
//  this.url= url;
// }


// Nasapic.prototype.setDate = function(){
//  var self = this;
//  request('https://api.nasa.gov/planetary/apod?api_key=tK09tzi66i3PQVen42IpjxYqDcPb7eN9biLCuehB&date=' + encodeURIComponent(this.picDate), function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//      var bodyObject = JSON.parse(body);
//      var image = bodyObject.url;

//      // var tracksArray = bodyObject.tracks;
//    };
//  });
// }


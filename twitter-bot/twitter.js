var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require('request');


var fs = require('fs');

var command = process.argv[2];
var commandArgument = process.argv[3];

// var commandArgument = process.argv[3];
///twitter

var spotify = new Spotify({
  id: 'cf2e3bdd2f6a4a5792c6409196befee7',
  secret: '049eaca090384988a0169b470e2c9fa7'
});

switch(command){
  case 'my-tweets':
  myTweets();
  break;

  case 'spotify-this-song':
		mySpotify(commandArgument);
		break;

}

function myTweets() {

var client = new Twitter({
  consumer_key: 'RwqVXzDjzji6RF85KFWrq65kv',
  consumer_secret: 'TSKB58nbg8nPw79A9gcjv23e1cGU9vVqsLQs11fM997bZRHbd7',
  access_token_key: '889721993683238912-PALrUB3r09Q6Pgxp0oWe5hIzgnPqTWV',
  access_token_secret: 'pMlbEqZRGKbhcCwEzj9I6miLTbmjOBt2PCEjLEdwjMPAz'
});
client.get('statuses/user_timeline', function(error, tweets, response){
  for (var i = 0; i < tweets.length; i++){
    console.log(tweets[i].text);
  }
// end the get function
});

// end the myTweets function



}



function mySpotify(receivedSong) {
  var theSong = receivedSong ? receivedSong : 'back in black';

  spotify.search({ type: 'track', query: theSong}, function(err, data) {
    if (err) {
      return console.log("Error occured: " + err);
    }

    console.log(theSong.artist);

  });

}


////request
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

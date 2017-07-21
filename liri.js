var getKey = require("./key.js");

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var command = process.argv[2];
	console.log(command);
if (command === "mytweets") {
	myTweets();
};

// var command = "";
var tweetOutput;

 


function myTweets() {

	var params = {
		screen_name: 'JessicaGertler'
	};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
				if(!error) {
					for(var i = 0; i < tweets.length; i++) {
						tweetOutput = ('\n' + '@' + params.screen_name + ' says ' + tweets[i].text + ' at ' + tweets[i].created_at +'\n');
						console.log(tweetOutput);
					}
				} else {
					console.log('twitter error');
				}
		});

};




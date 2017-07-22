var getKey = require("./key.js");

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var request = require("request");

var command = process.argv[2];

var commandSearch = process.argv[3];


console.log("░░░░░░░░░░░░░▲")
console.log("░░░░░░░░░░░░▲ ▲")
console.log("░░░░░░░░░░░▲ ▲ ▲")
console.log("░░░░░░░░░░▲ ▲ ▲ ▲")
console.log("░░░░░░░░░▲ ▲ ▲ ▲ ▲")
console.log("░░░░░░░░▲ ▲ ▲ ▲ ▲ ▲")
console.log("░░░░░░░▲ ▲ ▲ ▲ ▲ ▲ ▲")
console.log("░░░░░░▲░░░My name░░░▲")
console.log("░░░░░▲ ▲░░░░is░░░░░▲ ▲")
console.log("░░░░▲ ▲ ▲░░LIRI░░░▲ ▲ ▲")
console.log("░░░▲ ▲ ▲ ▲░░░░░░░▲ ▲ ▲ ▲")
console.log("░░▲ ▲ ▲ ▲ ▲░░░░░▲ ▲ ▲ ▲ ▲")
console.log("░▲ ▲ ▲ ▲ ▲ ▲░░░▲ ▲ ▲ ▲ ▲ ▲")
console.log("▲ ▲ ▲ ▲ ▲ ▲ ▲░▲ ▲ ▲ ▲ ▲ ▲ ▲")
console.log("pick a command: <my-tweets>, <spotify-this-song 'song name'>, <movie-this 'movie name'> or <do-what-it-says>");



//-----------------------------------------------------------------//
var tweetOutput;


function myTweets() {
console.log("Command: ", command);
	var params = {
		screen_name: 'JessicaGertler'
	};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(!error) {
			for(var i = 0; i < tweets.length; i++) {
				tweetOutput = ('\n' + '@' + params.screen_name + ' says ' + tweets[i].text + ' at ' + tweets[i].created_at +'\n');
				console.log(tweetOutput);
				console.log("◥☼▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙☼◤◥☼▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙☼◤◥☼▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙☼◤");
			}
		} else {
			console.log('twitter error');
		}
	});

};


var client = new Twitter(getKey.twitterKeys);

// if (command === "my-tweets") {
// 	myTweets();
// };


//-----------------------------------------------------------------//



 
function movieThis (movieName) {
	// loop through argvs to create movieName variable
	var movieName = "";
	console.log("Command: ", command);
	for (var i = 3; i < process.argv.length; i++) {
	  if (i > 3 && i < process.argv.length) {
	    movieName = movieName + "+" + process.argv[i];
	  }
	  else {
	    movieName += process.argv[i];
	  }
	
	};
	// Then run a request to the OMDB API with the movieName variable put in
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
	// sanity check
	console.log(queryUrl);
	request(queryUrl, function(error, response, body) {
	  // If the request is successful
      if (error != null) {
            console.log("Error occurred: " + error);

      } else if (error === null && response.statusCode === 200) {
         	var data = JSON.parse(body);
                //console.log("Data after JSON.parse: ", data);
                if (data.Year != undefined) {
                    console.log("Title: ", data.Title);
                    // writeToLogFile("\nTitle: " + data.Title);
                    console.log("Year: ", data.Year); 
                    // writeToLogFile("\nYear: " + data.Year);
                    console.log("IMDB Rating: ", data.imdbRating);
                    // writeToLogFile("\nIMDB Rating: " + data.imdbRating);
                    console.log("Country: ", data.Country);
                    // writeToLogFile("\nCountry: " + data.Country);
                    console.log("Language: ", data.Language);
                    // writeToLogFile("\nLanguage: " + data.Language);
                    console.log("Plot: ", data.Plot);
                    // writeToLogFile("\nPlot: " + data.Plot);
                    console.log("Actors: ", data.Actors);
                    // writeToLogFile("\nActors: " + data.Actors);
                    console.log("Rotten Tomatoes URL: ", data.Website);   
                } 
           }	
     });

} //end movie function


// //-----------------------------------------------------------------//

//switch board different commands 
var pickCommand = function (caseData, functionData) {

	switch (caseData) {
	    case "my-tweets":
	        myTweets();
	        break;
	    case "spotify-this-song":
	        spotifyThis();
	        break;
	    case "movie-this":
	        movieThis();
	        break;
	    case "do-what-it-says":
	        doWhatItSays();
	        break;
	    default:
	        console.log("LIRI Say WHAT?");
	        
	}
};

pickCommand(command, commandSearch);


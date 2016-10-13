

var api = {
	root: "https://api.themoviedb.org/3",
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjUzNjdkZmMwZWQwY2RmMmJmOTk4NjkwYTFhZGU2OSIsInN1YiI6IjU4MDAwYjRhYzNhMzY4NGY2NDAwMDQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Q95rXxh2y3cC3bszJbvpFb9OKg4TgrkuezDAIiyE7s"
	// TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();

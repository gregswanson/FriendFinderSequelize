var Friends 		= require('../../model/friends.js');
//var path 			= require('path');
//var connection = require('../../config/connection.js')


module.exports = function(app){
	//API Routes
	app.get('/API/friends', function(req, res){

		Friends.findAll({})
		.then(function(result){
			res.json(result);
		})

	});

	

	app.post('/API/friends', function(req,res){
	var newscore = req.body.scores;
	var newscoreint = 0;
	var matchScore = [];

//friends object to variable
		var name = req.body.name;
		var photo = req.body.photo;
		//parse scores into integers
		var question1 = parseInt(newscore[0]);
		var question2 = parseInt(newscore[1]);
		var question3 = parseInt(newscore[2]);
		var question4 = parseInt(newscore[3]);
		var question5 = parseInt(newscore[4]);
		var question6 = parseInt(newscore[5]);
		var question7 = parseInt(newscore[6]);
		var question8 = parseInt(newscore[7]);
		var question9 = parseInt(newscore[8]);
		var question10 = parseInt(newscore[9]);
		 console.log(name);


	Friends.findAll({})
		.then(function(result){
		// 	res.json(result);
		// })

		// var queryString = 'SELECT * FROM friends';
		// connection.query(queryString, function(err, result) {
     		
          


	for (var i = 0; i < result.length; i++) {
		var absoluteScore = Math.abs(result[i].score1 - question1) +
							Math.abs(result[i].score2 - question2) +
							Math.abs(result[i].score3 - question3) +
							Math.abs(result[i].score4 - question4) +
							Math.abs(result[i].score5 - question5) +
							Math.abs(result[i].score6 - question6) +
							Math.abs(result[i].score7 - question7) +
							Math.abs(result[i].score8 - question8) +
							Math.abs(result[i].score9 - question9) +
							Math.abs(result[i].score10 - question10);
		matchScore.push(absoluteScore);
							
	}


// 	//find the lowest matching score
	var index = 0;
	var value = matchScore[0];
	for (var i = 1; i < matchScore.length; i++) {
	  if (matchScore[i] < value) {
	    value = matchScore[i];
	    index = i;
	  }
	}

// //send the friend with the lowest matching score
	res.send(result[index]);


	

	//console.log(index);
	
	

        //res.redirect('/');
	});

		/////////////////////////////////////////

//push newFriend object to mySQL
	Friends.create({
			name: name,
			photo: photo,
			score1: question1,
			score2: question2,
			score3: question3,
			score4: question4,
			score5: question5,
			score6: question6,
			score7: question7,
			score8: question8,
			score9: question9,
			score10: question10,
		});

/////////////////////////////////////////

 });

}

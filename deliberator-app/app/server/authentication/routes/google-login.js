// routes for '/auth/google'

var router = require('express').Router();
var request = require('request');
var jwt = require('jwt-simple');
var User = require('../user');
var createJWT = require('../middleware').createJWT;
var config = require('../config');

router.post('/', postGoogle);

function postGoogle(req, res){
	var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
	var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
	var params = {
		code: req.body.code,
		client_id: req.body.clientId,
		client_secret: config.GOOGLE_SECRET,
		redirect_uri: req.body.redirectUri,
		grant_type: 'authorization_code'
	};

	// Step 1. Exchange authorization code for access token.
	request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
		var accessToken = token.access_token;
		var headers = { Authorization: 'Bearer ' + accessToken };

		// Step 2. Retrieve profile information about the current user.
		request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
			console.log("Profile:");
			printObject(profile);
			if (profile.error) {
	    		return res.status(500).send({message: profile.error.message});
	    	}
	    	// Step 3a. Link user accounts.
	    	if (req.headers.authorization) {
	        	User.findOne({ google: profile.sub }, function(err, existingUser) {
	        		if (existingUser) {
	        			return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
	        		}
	        		var token = req.headers.authorization.split(' ')[1];
	        		var payload = jwt.decode(token, config.TOKEN_SECRET);
	        		User.findById(payload.sub, function(err, user) {
	            		if (!user) {
	              			return res.status(400).send({ message: 'User not found' });
	            		}
	            		user.google = profile.sub;
	            		user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
	            		user.displayName = user.displayName || profile.name;
	            		user.save(function() {
	              			var token = createJWT(user);
	              			res.send({ token: token });
	            		});
	          		});
	        	});
	    	} else {
	        	// Step 3b. Create a new user account or return an existing one.
	        	User.findOne({ google: profile.sub }, function(err, existingUser) {
	          		if (existingUser) {
	            		return res.send({ token: createJWT(existingUser) });
	          		}
	          		var user = new User();
	          		user.google = profile.sub;
	          		user.picture = profile.picture.replace('sz=50', 'sz=200');
	          		user.displayName = profile.name;
	          		user.email = profile.email;
	          		user.save(function(err) {
	            		var token = createJWT(user);
	            		res.send({ token: token });
	          		});
	        	});
	    	}
	    });
	});
}

//Helper function
function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  console.log(out);
}

module.exports = router;


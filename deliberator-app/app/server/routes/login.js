// routes for '/auth/login'

var router = require('express').Router();
var User = require('../user');
var createJWT = require('../middleware').createJWT;

router.post('/', postLogin);

function postLogin(req, res){
	User.findOne({ email: req.body.email }, '+password', function(err, user) {
	   	if (!user) {
	    	return res.status(401).send({ message: 'Invalid email and/or password' });
	    }
	    user.comparePassword(req.body.password, function(err, isMatch) {
	      	if (!isMatch) {
	        	return res.status(401).send({ message: 'Invalid email and/or password' });
	      	}
	      	res.send({ token: createJWT(user) });
	    });
	});
}

module.exports = router;

// routes for '/auth/signup'

var router = require('express').Router();
var User = require('../user');
var createJWT = require('../middleware').createJWT;

router.post('/', postSignUp);

function postSignUp(req, res){
	User.findOne({ email: req.body.email }, function(err, existingUser) {
    	if (existingUser) {
      		return res.status(409).send({ message: 'Email is already taken' });
    	}
    	var user = new User({
      		displayName: req.body.displayName,
      		email: req.body.email,
      		password: req.body.password
    	});
    	user.save(function(err, result) {
      		if (err) {
        		res.status(500).send({ message: err.message });
      		}
      		res.send({ token: createJWT(result) });
    	});
  	});
}

module.exports = router;
// routes for '/auth/unlink'

var router = require('express').Router();
var User = require('../user');
var ensureAuthenticated = require('../middleware.js').ensureAuthenticated;

router.use(ensureAuthenticated);
router.post('/', postUnlink);

function postUnlink(req, res){
	var provider = req.body.provider;
 	var providers = ['facebook', 'foursquare', 'google', 'github', 'instagram',
    	'linkedin', 'live', 'twitter', 'twitch', 'yahoo'];

  	if (providers.indexOf(provider) === -1) {
    	return res.status(400).send({ message: 'Unknown OAuth Provider' });
  	}

  	User.findById(req.user, function(err, user) {
    	if (!user) {
      		return res.status(400).send({ message: 'User Not Found' });
    	}
    	user[provider] = undefined;
    	user.save(function() {
      		res.status(200).end();
    	});
  	});
}

module.exports = router;
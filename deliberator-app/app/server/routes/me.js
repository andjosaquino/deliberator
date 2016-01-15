
// routes for '/api/me'

var router = require('express').Router();
var User = require('../user');
var ensureAuthenticated = require('../middleware').ensureAuthenticated;

router.use(ensureAuthenticated);
router.get('/', getMe);
router.put('/', putMe);

function getMe(req, res){
  	User.findById(req.user, function(err, user) {
    	res.send(user);
  	});
}

function putMe(req, res){
  	User.findById(req.user, function(err, user) {
    	if (!user) {
      		return res.status(400).send({ message: 'User not found' });
    	}
    	user.displayName = req.body.displayName || user.displayName;
    	user.email = req.body.email || user.email;
    	user.save(function(err) {
      		res.status(200).end();
    	});
  	});
}

module.exports = router;
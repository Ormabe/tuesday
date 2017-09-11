const express = require('express');
const router = express.Router();

const NY13DVoters = require('./models').NY13DVoters;
const Volunteers = require('./models').Volunteers;
const models = require('./models');

router.route('/voters')
	.get((req,res) => {
		NY13DVoters.findAll()
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			console.log(err)
		})
	})
	.post((req, res) => {
		return NY13DVoters.create({
			name: req.body.name,
			age: req.body.age,
			location: req.body.location,
			district: req.body.district,
			phone: req.body.phone,
			lastContact: req.body.lastContact
		})
		.then((voter) => {
			res.send(voter)
		})
		.catch((err) => {
			throw new Error(err)
		})
	});

router.route('/volunteers')
	.get((req, res) => {
		Volunteers.findAll()
		.then((volunteers) => {
			res.send(volunteers)
		})
		.catch((err) => {
			console.log()
		})
	})
	.post((req,res) => {
		return Volunteers.create({
			firstName: req.body.firstName,
			midInit: req.body.midInit,
			lastName: req.body.lastName,
			dob: req.body.dob,
			age: req.body.age,
			interests: req.body.interests,
			phone: req.body.phone,
			email: req.body.email,
			district: req.body.district,
			location: req.body.location
		})
		.then((volunteer) => {
			res.send(volunteer)
		})
		.catch((err) => {
			console.log(err)
		})
	});


router.route('/match')
    .post((req, res) => {
	return NY13DVoters.findOrCreate({
		where: [{
			$iLike: [{
				name: req.body.lastName
			}]
		}],
		defaults: {
			lastName: req.body.lastName,
			age: req.body.age,
			phone: req.body.phone,
			district: req.body.district,
			location: req.body.location
		}
	})
	.then((contact) => {
		console.log('CONTACT:',contact)
		
	})
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log(err);
	})
})


module.exports = router;
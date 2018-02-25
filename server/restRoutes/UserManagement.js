module.exports = function(app, db) {

	var UserManagement = require('user-management');

	/////////////////////////Registrater user/////////////////////////
	app.post('/registerUser', (req, res) => {
		console.log(req.body);
		// var UserManagement = require('user-management');
		var USERNAME = req.body.username;
		var PASSWORD = req.body.password;
		var EXTRAS = {
			email: req.body.email
		}

		var users = new UserManagement();
		users.load(function(err) {
		  console.log('Checking if the user exists');
		  users.userExists(USERNAME, function(err, exists) {
			if (exists) {
			  console.log('  User already exists');
			  users.close();
			} else {
			  console.log('  User does not exist');
			  console.log('Creating the user');
			  users.createUser(USERNAME, PASSWORD, EXTRAS, function (err) {
				console.log('  User created');
				users.close();
			  });
			}
		  });
		});
		// 	company: req.body.company,
		// 	phonenumber: req.body.phonenumber,
		// 	faxnumber:req.body.faxnumber,
		// 	address:req.body.address,
		// 	zippostalcode:req.body.zippostalcode,
		// 	city:req.body.city,
		// 	country:req.body.country,
		// 	state:req.body.state,
		// 	vat:req.body.vat,
		// 	eshop:req.body.eshop,
		// 	firstname:req.body.firstname,
		// 	middlename:req.body.middlename,
		// 	lastname:req.body.lastname,
		// 	verified: req.body.verified,
		// };
		// var users = new UserManagement();
		// users.load(function(err) {
		// 	//check if user exists
		// 	users.userExists(USERNAME, function(err, exists) {
		// 		if (exists) {
		// 			//user exists
		// 			users.close();
		// 			res.status(409);
		// 			res.send();
		// 		} else {
		// 			//user dosen't exists
		// 			users.createUser(USERNAME, PASSWORD, EXTRAS, function (err) {
		// 				//user created
		// 				const nodemailer = require('nodemailer');
		// 				const handlebars = require('handlebars');
		// 				const fs = require('file-system');
						
		// 				nodemailer.createTestAccount((err, account) => {
		// 					// var html = require('../style')
		// 					console.log("The username is: ", USERNAME);
		// 					var link;
		// 					var itemId;
		// 					var validToken;
				
		// 					var ObjectID = require('mongodb').ObjectID;
		// 					const details = { 'username': USERNAME };
		// 					db.collection('users').findOne(details, (err, item) => {
		// 						if (err) {
		// 							console.log(err);
		// 						} else {
		// 							console.log("the objectId of the item is: ", item._id);
		// 							itemId = item._id;
		// 							console.log("the itemId is: ", itemId);
		// 							console.log("the item email is: ", item.extras.email);
		// 							link = "http://" + req.get('host') + "/verify/" + itemId;
									
		// 							var readHTMLFile = function(path, callback) {
		// 								console.log("THE PATH IS: ", path);
		// 								fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
		// 									if (err) {
		// 										throw err;
		// 										callback(err);
		// 									}
		// 									else {
		// 										callback(null, html);
		// 									}
		// 								});
		// 							};

		// 							// create reusable transporter object using the default SMTP transport
		// 							let transporter = nodemailer.createTransport({
		// 								host: 'hermes.atc.gr', //HOST
		// 								port: 465,
		// 								secure: false,
		// 								requireTLS: true, 
		// 								auth: {
		// 									user: 'testmail@atc.gr', // USERNAME your ATC account
		// 									pass: '098POI)(*'  // PASSWORD
		// 								},
		// 								tls: { 
		// 									ciphers: 'SSLv3',
		// 									rejectUnauthorized: false
		// 								}
		// 							});
									
		// 							readHTMLFile(__dirname + '/email.html', function(err, html) {
		// 								var template = handlebars.compile(html);
		// 								var replacements = {
		// 									username: USERNAME,
		// 									linkEmail: link
		// 							   	};
		// 								var htmlToSend = template(replacements);

		// 								// setup email data with unicode symbols
		// 								let mailOptions = {
		// 									from: '"Test User" <testmail@atc.gr>', // sender address
		// 									to: item.extras.email, // list of receivers
		// 									subject: 'MyShopNet', // Subject line
		// 									text: 'MyShopNet', // plain text body
		// 									html: htmlToSend
		// 								};
														
		// 								// send mail with defined transport object
		// 								transporter.sendMail(mailOptions, (error, info) => {
		// 									if (error) {
		// 										return console.log(error);
		// 									}
		// 									console.log('Message sent: %s', info.messageId);
		// 									// Preview only available when sending through an Ethereal account
		// 									console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
									
		// 									// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
		// 									// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		// 								});
										
		// 								users.close();
		// 								res.status(202);
		// 								res.send();
		// 							});
		// 						};
		// 					});
		// 				});
		// 			});
		// 		}
		// 	});
		// });
	});

	/////////////////////////Login user/////////////////////////
	app.post('/login', (req, res) => {
		var UserManagement = require('user-management');
		var USERNAME = req.body.username;
		var PASSWORD = req.body.password;
		const details = { 'username': USERNAME };
		db.collection('users').findOne(details, (err, item) => {
			if (err) {
				console.log(err);
			} else if (!item) {
				console.log('user not exists');
				res.status(409).json({status: 409, result: "user not exists"});
				res.send();
			} else { 
				// console.log("the verified state of the item is: ", item.extras.verified);
				// if (item.extras.verified) {
					if ((USERNAME != "") && (PASSWORD != "")) {
						var users = new UserManagement();
						users.load(function(err) {
							users.authenticateUser(USERNAME, PASSWORD, function(err, result) {
								if (!result.userExists) {
									console.log('Invalid username');
									res.status(401).json({status: 401, result: "Invalid username"});
									res.send();
									users.close();
								} else if (!result.passwordsMatch) {
									console.log('Invalid password');
									res.status(408).json({status: 408, result: "Invalid password"});
									res.send();
									users.close();
								} else {
									console.log('User token is: '+ result.token);
									res.status(202).json({status: 202, token: result.token, username: USERNAME});
									res.send();
									users.close();
								}
							});
						});
					}
				}
			// }
		});
		
	});

	/////////////////////////Check if user is logged in/////////////////////////
	app.post('/checkUser', (req, res) => {
		var UserManagement = require('user-management');
		var USERNAME = req.body.Username;
		var users = new UserManagement();
		users.load(function(err) {
			users.getTokenForUsername(USERNAME, function(err, token) {
				users.isTokenValid(token, function(err, valid) {
					if (!valid) {
						console.log('The token is not valid');
						res.status(401).json({status: 401});
						res.send();
					} else {
						console.log('The token is valid' + token);
						res.status(202).json({status: 202});
						res.send();
					}
					users.close();
				});
			});
		});
	});

	/////////////////////////Get user's info/////////////////////////
	app.post('/userInfo', (req, res) => {
		var USERNAME = req.body.Username;
		var UserManagement = require('user-management');
		var users = new UserManagement();
		users.load(function(err) {
			users.getExtrasForUsername(USERNAME, function(err, extras) {
				res.json(extras);
				res.send();
				users.close();
			});
		});
	});

	/////////////////////////Set user's info/////////////////////////
	app.post('/setInfo', (req, res) => {

	var USERNAME = req.body.Username;
	var fields = req.body.Fields;

	//View new fields
	console.log("New fields-----------------");
	console.log(fields);
	db.collection('users').update({username: USERNAME}, { $set: fields },
	function(err, object) {
		if (err){
			console.warn(err.message);
			res.json({status: 401});
			res.send();
		}else{
			res.json({status: 202});
			res.send();
		}
	});

	});

	/////////////////////////Set industry data by replacing saved values/////////////////////////
	app.post('/setIndustry', (req, res) => {

	var USERNAME = req.body.Username;
	var fields = req.body.Fields;

	//View new fields
	console.log("New fields-----------------");
	console.log(fields);

		db.collection('users').update({username: USERNAME, "extras.industry.id": req.body.Industry}, 
			{$set: fields },
		function(err, object) {
			if (err){
				console.warn(err.message);
				res.json({status: 401});
				res.send();
			} else{
				res.json({status: 202});
				res.send();
			}
		});

	});

	/////////////////////////Get user id/////////////////////////
	app.post('/getId', (req, res) => {

		var USERNAME = req.body.Username;
		 db.collection('users').findOne({username: USERNAME}).then(function(user){
			res.json({userId: user._id});
			res.send();
		})

	});

	/////////////////////////Add industry data without replace saved values/////////////////////////
	app.post('/addIndustryData', (req, res) => {

	var USERNAME = req.body.Username;
	var fields = req.body.Fields;

	//View new fields
	console.log("New fields-----------------");
	console.log(fields);

		db.collection('users').update({username: USERNAME, "extras.industry.id": req.body.Industry}, 
			{$addToSet: fields },
		function(err, object) {
			if (err){
				console.warn(err.message);
				res.json({status: 401});
				res.send();
			}else{
				res.json({status: 202});
				res.send();
			}
		});

	});

	/////////////////////////Logout user/////////////////////////
	app.post('/logoutUser', (req, res) => {
		var UserManagement = require('user-management');
		var USERNAME = req.body.Username;
		console.log(USERNAME);
		var users = new UserManagement();
		users.load(function(err) {
			users.getTokenForUsername(USERNAME, function(err, token) {
				users.expireToken(token, function(err) {
					res.json({username: ''});
					res.send();
					users.close();
				});
			});
		});
	});

	/////////////////////////Check user's vat/////////////////////////
	app.post('/checkVAT', (req, res) => {
		var Country = req.body.CountryID;
		if (req.body.CountryID == "GR") { var Country = "EL"};
		var validate = require('validate-vat');
		validate( Country, req.body.vat,  function(err, validationInfo) {
			//Country doesn't belong to EU
			if (err) {
				res.json({code:100});
			}
			else {
				//User's vat exists
				if (validationInfo.valid) {
					res.json({code:200});
				}
				//User's vat doesn;t exist
				else {
					res.json({code:300});
				}
			}
		});
	});

	/////////////////////////Verify user /////////////////////////
	app.post('/checkId', (req, res) => {
		var id = req.body._id;
		var ObjectID = require('mongodb').ObjectID;
		console.log("the coming id from the api is: ", id);
		const details = { '_id': new ObjectID(id) };
			
		db.collection('users').update(details, {$set: { "extras.verified": true } },
		function(err, object) {
			if (err){
				console.warn(err.message);
				res.json({status: 401});
				res.send();
			} else {
				res.json({status: 202});
				res.send();
			}
		});
	});

	/////////////////////////Send email message/////////////////////////
	app.post('/sendEmailMessage', (req, res) => {
		console.log("the responce is " + req.body);
		console.dir(req.body);
		res.status(202);
		res.send();
		// const nodemailer = require('nodemailer');
		// const handlebars = require('handlebars');
		// const fs = require('file-system');

		// nodemailer.createTestAccount((err, account) => {
			
		// 	var readHTMLFile = function(path, callback) {
		// 		console.log("THE PATH IS: ", path);
		// 		fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
		// 			if (err) {
		// 				throw err;
		// 				callback(err);
		// 			}
		// 			else {
		// 				callback(null, html);
		// 			}
		// 		});
		// 	};

		// 	// create reusable transporter object using the default SMTP transport
		// 	let transporter = nodemailer.createTransport({
		// 		host: 'hermes.atc.gr', //HOST
		// 		port: 465,
		// 		secure: false,
		// 		requireTLS: true, 
		// 		auth: {
		// 			user: 'testmail@atc.gr', // USERNAME your ATC account
		// 			pass: '098POI)(*'  // PASSWORD
		// 		},
		// 		tls: { 
		// 			ciphers: 'SSLv3',
		// 			rejectUnauthorized: false
		// 		}
		// 	});
			
		// 	readHTMLFile(__dirname + '/emailNew.html', function(err, html) {
		// 		var template = handlebars.compile(html);
		// 		var replacements = {
		// 			details: req.body
		// 		};
		// 		var htmlToSend = template(replacements);

		// 		// setup email data with unicode symbols
		// 		let mailOptions = {
		// 			from: '"Test User" <testmail@atc.gr>', // sender address
		// 			to: 'testmail@atc.gr', // list of receivers
		// 			subject: 'MyShopNet', // Subject line
		// 			text: 'MyShopNet', // plain text body
		// 			html: htmlToSend
		// 		};
								
		// 		// send mail with defined transport object
		// 		transporter.sendMail(mailOptions, (error, info) => {
		// 			if (error) {
		// 				return console.log(error);
		// 			}
		// 			console.log('Message sent: %s', info.messageId);
		// 			// Preview only available when sending through an Ethereal account
		// 			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
			
		// 			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
		// 			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		// 		});

		// 		res.status(202);
		// 		res.send();
		// 	});
		// });
	});
};
module.exports = function(app, db) {

	/////////////////////////AluGroup create company/////////////////////////
	app.post('/AluGroupCreateCompany', (req, res) => {

		var soap = require('soap');
		var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';
		////////////////////////////////////////////////////////////////////////////// msn_createcompany
		var args = {
			user: "842.ecom.api",
			password: "4w6eenfwaqsgcyug",
			token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
			companydata: "<msncompany><name>" + checkVal(req.body.company) + "</name><initials>" + checkVal(req.body.companyinitials) + "</initials><vat>" + checkVal(req.body.vat) + "</vat><currency>" + checkVal(req.body.currency) + "</currency><shippinginfo><name>" + checkVal(req.body.firstname) + "</name><lastname>" + checkVal(req.body.lastname) + "</lastname><phonenumber>" + checkVal(req.body.phonenumber) + "</phonenumber><address>" + checkVal(req.body.address) + "</address><zipcode>" + checkVal(req.body.zippostalcode) + "</zipcode><city>" + checkVal(req.body.city) +"</city><state>" + checkVal(req.body.state) + "</state><country>" + checkVal(req.body.country) + "</country><email>" + checkVal(req.body.email) + "</email><comments /></shippinginfo><billinginfo><name>" + checkVal(req.body.firstname) + "</name><lastname>" + checkVal(req.body.lastname) + "</lastname><phonenumber>" + checkVal(req.body.phonenumber) + "</phonenumber><address>" + checkVal(req.body.address) + "</address><zipcode>" + checkVal(req.body.zippostalcode) + "</zipcode><city>" + checkVal(req.body.city) +"</city><state>" + checkVal(req.body.state) + "</state><country>" + checkVal(req.body.country) + "</country><email>" + checkVal(req.body.email) + "</email><comments /></billinginfo><smtpaddress>" + checkVal(req.body.smtpaddress) + "</smtpaddress><smtpport>" + checkVal(req.body.smtpport) + "</smtpport><smtpenablessl>" + checkVal(req.body.smtpssl) + "</smtpenablessl><smtpemailfrom>" + checkVal(req.body.smtpemailfrom ) + "</smtpemailfrom><smtpuser>" + checkVal(req.body.smtpuser) + "</smtpuser><smtppass>" + checkVal(req.body.smtppass) + "</smtppass><emailto>" + checkVal(req.body.emailto) + "</emailto><emailprimarycc>" + checkVal(req.body.emailprimarycc) + "</emailprimarycc><emailsecondarycc>" + checkVal(req.body.emailsecondarycc) + "</emailsecondarycc><paypalapi_username>" + checkVal(req.body.paypalapiusername) + "</paypalapi_username><paypalapi_password>" + checkVal(req.body.paypalapipassword) + "</paypalapi_password><paypalapi_signature>" + checkVal(req.body.paypalapisignature) + "</paypalapi_signature><logoweb>" + checkVal(req.body.logoweb) +"</logoweb> <logomodel>" + checkVal(req.body.logomodel) +"</logomodel></msncompany>",
			Lang: "es"
		};
		soap.createClient(url, function(err, client) {
			client.Service.ServiceSoap.msn_createcompany(args, function(err, result) {
				//View response
				console.log("AluGroup Response-----------------");
				console.log(JSON.stringify(result));
				res.json(result);
			});
		});
				
	});

	/////////////////////////AluGroup create material/////////////////////////
	app.post('/AluGroupCreateMaterial', (req, res) => {
		var soap = require('soap');
		var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';

		var args = {
			user: "842.ecom.api",
			password: "4w6eenfwaqsgcyug",
			token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
			materialdata: "<msnmaterial> <idcompany>" + req.body.id + "</idcompany><backend_name>" + checkVal(req.body.backend_name) + "</backend_name><manuf_name>" + checkVal(req.body.ManufacturerName) + "</manuf_name> <frontend_name>" + checkVal(req.body.PublicName) + "</frontend_name><frontend_desc>" + checkVal(req.body.frontend_desc) + "</frontend_desc><category>" + checkVal(req.body.Category) + "</category><texture_scale>" + checkVal(req.body.TextureScale) + "</texture_scale><colour_rgb>" + checkVal(req.body.RGB) + "</colour_rgb><parts_id>" + checkVal(req.body.parts_id) + "</parts_id><thumbnail>" + checkVal(req.body.thumbnail) + "</thumbnail><texture>" + checkVal(req.body.texture) + "</texture></msnmaterial>",
			Lang: "en"
		};
		soap.createClient(url, function(err, client) {
			client.Service.ServiceSoap.msn_creatematerial(args, function(err, result) {
				//View response
				console.log("AluGroup Response-----------------");
				console.log(JSON.stringify(result));
				res.json(result);
			});
		});

	});

	/////////////////////////AluGroup create model/////////////////////////
	app.post('/AluGroupCreateModel', (req, res) => {
		if (req.body.ProductImage) { var logo = req.body.ProductImage; } else { var logo = ""; };
		var soap = require('soap');
		var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';

		var args = {
			user: "842.ecom.api",
			password: "4w6eenfwaqsgcyug",
			token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
			modeldata: "<msnmodel><idcompany>" + req.body.id + "</idcompany> <backend_name>" + checkVal(req.body.backend_name) + "</backend_name> <manuf_name>" + checkVal(req.body.manuf_name) + "</manuf_name> <frontend_name>" + checkVal(req.body.frontend_name) + "</frontend_name><frontend_desc>" + checkVal(req.body.frontend_desc) + "</frontend_desc> <weight>" + checkVal(req.body.Weight) + "</weight> <wholesale_price>" + checkVal(req.body.WholesalePrice) + "</wholesale_price> <retail_price>" + checkVal(req.body.RetailPrice) + "</retail_price> <category>" + checkVal(req.body.ProductCategory) + "</category>  <product_type>" + checkVal(req.body.ProductType) + "</product_type> <logo>" +  checkVal(req.body.ProductImage) + "</logo>  <content>" + checkVal(req.body.content) + "</content> </msnmodel>",
			Lang: "en"
		};
			
		soap.createClient(url, function(err, client) {
			client.Service.ServiceSoap.msn_createmodel(args, function(err, result) {
				//View response
				console.log("AluGroup Response-----------------");
				console.log(JSON.stringify(result));
				res.json(result);
			});
		});

	});

	/////////////////////////AluGroup create size calculator/////////////////////////
	app.post('/AluGroupCreateSizeCalc', (req, res) => {

		var msnsize = req.body.msnsize;
		var sizes = "";
		for (id=0; id<msnsize.length; id++){
			sizes = sizes + "<msnsize ><size>" + msnsize[id].Size + "</size> <length>" + msnsize[id].Length + "</length> <width>" + msnsize[id].Width + "</width> </msnsize>";
		};

		var soap = require('soap');
		var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';

		var args = {
			user: "842.ecom.api",
			password: "4w6eenfwaqsgcyug",
			token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
			sizecalculatordata: "<msnsizecalculator> <idcompany>" + req.body.id + "</idcompany> <product_type>" + checkVal(req.body.SelectType) + "</product_type> <sizelist>" + sizes + "</sizelist> </msnsizecalculator>",
			Lang: "en"
		};
		soap.createClient(url, function(err, client) {
			client.Service.ServiceSoap.msn_sizecalculator(args, function(err, result) {
				//View response
				console.log("AluGroup Response-----------------");
				console.log(JSON.stringify(result));
				res.json(result);
			});
		});

	});

	/////////////////////////AluGroup create ecommerce/////////////////////////
	app.post('/AluGroupCreateEcommerce', (req, res) => {
		var soap = require('soap');
		var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';

		var args = {
			user: "842.ecom.api",
			password: "4w6eenfwaqsgcyug",
			token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
			ecommercedata: "<msnecommerce> <idcompany>" + req.body.id + "</idcompany> <ecommerce_url>" + req.body.URL + "</ecommerce_url> <ecommerce_type>" + req.body.Type + "</ecommerce_type> </msnecommerce>",
			Lang: "en"
		};
		soap.createClient(url, function(err, client) {
			client.Service.ServiceSoap.msn_integrate_ecommerce(args, function(err, result) {//View response
				console.log("AluGroup Response-----------------");
				console.log(JSON.stringify(result));
				res.json(result);
			});
		});

	});
	

	function checkVal(myVar) {
		if (typeof myVar != 'undefined') {
			return myVar;
		}
		else {
			return "";
		}
	}


	var fetch = require('node-fetch');

	/////////////////////////Bivolino create Affiliate/////////////////////////
	app.post('/bivolinoCreate', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/NopAffiliates/";
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log("THE RESPONSEJSON IS:");
			console.dir(responseJson);
			res.json({affiliateId: responseJson.affiliateId});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino update Affiliate/////////////////////////
	app.post('/bivolinoUpdate', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/NopAffiliates/"+req.body.affiliateId;
		fetch(url, {
			method: 'PUT',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => {
			console.log(response.status);
			res.json({status: response.body});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino delete Affiliate/////////////////////////
	app.delete('/bivolinoDelete/:id', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/NopAffiliates/" + req.params.id;
		fetch(url, {
			method: 'DELETE'
		})
		.then((response) => {
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino create Configurator/////////////////////////
	app.post('/bivolinoCreateConf', (req, res) => {
	let url = "http://myshopnet.atc.gr:5000/api/ConfConfigurators/";
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			res.json(responseJson);
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino create ConfConfiguratorNopAffiliates/////////////////////////
	app.post('/bivolinoCreateConfNopAffiliates', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/ConfConfiguratorNopAffiliates/";
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => {
			console.log(response.status);
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino create ConfConfiguratorConfCollections/////////////////////////
	app.post('/bivolinoCreateConfConfiguratorConfCollections', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/ConfConfiguratorConfCollections/";
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => {
			console.log(response);
			res.json(response);
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino create Size Predictor/////////////////////////
	app.post('/bivolinoSize', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/BivolinoSizepredictionWizards/";
		console.log("THE REQ BODY IS");
		console.dir(req.body);
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => {
			console.log(response.status);
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino delete Configurator/////////////////////////
	app.delete('/bivolinoDeleteConf/:id', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/ConfConfigurators/" + req.params.id;
		fetch(url, {
			method: 'DELETE'
		})
		.then((response) => {
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino delete Configurator Affiliates/////////////////////////
	app.delete('/bivolinoDeleteConfAffiliate/:id', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/ConfConfiguratorNopAffiliates/" + req.params.id;
		fetch(url, {
			method: 'DELETE'
		})
		.then((response) => {
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino delete Configurator Collections/////////////////////////
	app.delete('/bivolinoDeleteConfCollection/:id', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/ConfConfiguratorConfCollections/" + req.params.id;
		fetch(url, {
			method: 'DELETE'
		})
		.then((response) => {
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Bivolino delete Size Predictor/////////////////////////
	app.delete('/bivolinoDeleteSize/:id', (req, res) => {
		let url = "http://myshopnet.atc.gr:5000/api/BivolinoSizepredictionWizards/" + req.params.id;
		fetch(url, {
			method: 'DELETE'
		})
		.then((response) => {
			res.json({status: response.status});
			res.send();
		})
		.catch((error) => {
			res.json(error);
		})
	});


	/////////////////////////Change Vaas changeData/////////////////////////
	app.post('/changeData', (req, res) => {
		var url = "";
		switch (req.body.case) {
			case 1:
				url = "http://myshopnet.changeofparadigm.com/api/AvatarsLibrary/Types";
				break;
			case 2:
				url = "http://myshopnet.changeofparadigm.com/api/AvatarsLibrary/Finishes";
				break;
			case 3:
				url = "http://myshopnet.changeofparadigm.com/api/AvatarsLibrary/Textures";
				break;
			case 4:
				url = "http://myshopnet.changeofparadigm.com/api/MotionsLibrary";
				break;
			case 5:
				url = "http://myshopnet.changeofparadigm.com/api/PosesLibrary";
				break;

		}
		fetch(url, {
			method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
			res.json(responseJson);
		})
		.catch((error) => {
			res.json(error);
		})
	});

	/////////////////////////Change Vaas Post Order/////////////////////////
	app.post('/changeOrders', (req, res) => {
		console.log(JSON.stringify(req.body));
		let url = "https://copmyshopnet.azurewebsites.net/api/Orders/New";
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
			    "Content-Type": "application/json",
				"Authorization": "Basic bXlzaG9wbmV0OkREVTR4PGdeXXQzVXttbXg="
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			
			if (responseJson.Message == "An error has occurred.") {
				res.status(500).json("Error");
				console.log(responseJson);
			}
			else {
				res.status(200).json(responseJson);
				console.log(responseJson);
			}
		})
		.catch((error) => {
			res.json(error);
		})
		
	});


	/////////////////////////Change Vaas Upload Assets/////////////////////////
	app.post('/putFile', (req, res) => {
		
		var request = require('request');
		var fs = require('fs'),
	
		path = require('path'),
		filePath = path.join(__dirname, '../uploads/'+req.body.fileName);
        var file  = fs.createReadStream(filePath);
		
		
		var headerFile=new Buffer(filePath).length;		
		
		request.put(req.body.SignedUploadUrl,
		{
			headers: { "x-ms-blob-type": "BlockBlob" , 'content-length':headerFile},
			body: file
		}, function optionalCallback (err, httpResponse, bodymsg) {
			if (err) {
				console.log(err);
				res.json({"status": 404});
				res.send();
			} else {
				console.log(filePath);
				console.log(bodymsg);
				console.log(httpResponse.statusCode);
				
				console.log(httpResponse.headers["content-md5"]);
				console.log(httpResponse.headers);
				console.log("---------------------telos headers--------------------------");
				console.log("---------------------ti exw--------------------------");
				
	
				
				var crypto = require('crypto');
				var consoler1=crypto.createHash('md5').update(req.body.fileName).digest("hex");
				var consoler2=crypto.createHash('md5').update(req.body.fileName).digest("base64");
				var consoler3=crypto.createHash('md5').update(req.body.fileName).digest("latin1");
				var consoler4=crypto.createHash('md5').update(req.body.fileName);

				
				//trying all options
				var dconsoler1=crypto.createHash('md5').update(filePath).digest("hex");
				var dconsoler2=crypto.createHash('md5').update(filePath).digest("base64");
				var dconsoler3=crypto.createHash('md5').update(filePath).digest("latin1");
				var dconsoler4=crypto.createHash('md5').update(filePath);
				
				
				var vconsoler1=crypto.createHash('md5').update("jpg").digest("hex");
				var vconsoler2=crypto.createHash('md5').update("jpg").digest("base64");
				var vconsoler3=crypto.createHash('md5').update("jpg").digest("latin1");
				var vconsoler4=crypto.createHash('md5').update("jpg");
				
				
				var cconsoler1=crypto.createHash('md5').update(new Buffer(filePath)).digest("hex");
				var cconsoler2=crypto.createHash('md5').update(new Buffer(filePath)).digest("base64");
				var cconsoler3=crypto.createHash('md5').update(new Buffer(filePath)).digest("latin1");
				var cconsoler4=crypto.createHash('md5').update(new Buffer(filePath));
				
				//var xconsoler1=crypto.createHash('md5').update(req).digest("hex");
				//var xconsoler2=crypto.createHash('md5').update(req).digest("base64");
				//var xconsoler3=crypto.createHash('md5').update(req).digest("latin1");
				//var xconsoler4=crypto.createHash('md5').update(req);
				
				/*var yconsoler1=crypto.createHash('md5').update(new Buffer(file)).digest("hex");
				var yconsoler2=crypto.createHash('md5').update(new Buffer(file)).digest("base64");
				var yconsoler3=crypto.createHash('md5').update(new Buffer(file)).digest("latin1");
				var yconsoler4=crypto.createHash('md5').update(new Buffer(file));
				*/
                console.log(" ti exw  1 " + consoler1 + "  2 " + 	consoler2+ " 3 " + consoler3+ "  4 " + 	consoler4);		
				console.log(" ti exw  1 " + vconsoler1 + "  2 " + 	vconsoler2+ " 3 " + vconsoler3+ "  4 " + 	vconsoler4);		
			    console.log(" ti exw  1 " + cconsoler1 + "  2 " + 	cconsoler2+ " 3 " + cconsoler3+ "  4 " + 	cconsoler4);		
				console.log(" ti exw  1 " + dconsoler1 + "  2 " + 	dconsoler2+ " 3 " + dconsoler3+ "  4 " + 	dconsoler4);		
				//console.log(" ti exw  1 " + xconsoler1 + "  2 " + 	xconsoler2+ " 3 " + xconsoler3+ "  4 " + 	xconsoler4);		
				
				//console.log(" ti exw  1 " + yconsoler1 + "  2 " + 	yconsoler2+ " 3 " + yconsoler3+ "  4 " + 	yconsoler4);		
				
				console.dir(consoler4);
				console.log("---------------------ti exw telos--------------------------");
			var patchUrl = "https://copmyshopnet.azurewebsites.net/api/Orders/" + req.body.orderId + "/Assets/Done/" + req.body.assetId
				fetch(patchUrl, {
					method: 'PATCH',
					headers: {
						"Accept": "application/json",
					    "Content-Type": "application/json",
						"Authorization": "Basic bXlzaG9wbmV0OkREVTR4PGdeXXQzVXttbXg="
					},
					body: JSON.stringify(req.body)
				})
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);
					if (responseJson.Status == 1) {
						res.json({"status" : httpResponse.statusCode});
						res.send();
					} else {
						res.json({"status": 404});
						res.send();
					}
				})
				.catch((error) => {
					res.json(error);
				})
			}
		});
		
		/*var request = require('request');
		var fs = require('fs'),
		path = require('path'),
		filePath = path.join(__dirname, '../uploads/'+req.body.fileName);

		fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
			if (!err) {
				request.put(req.body.SignedUploadUrl,
				{
					headers: { "x-ms-blob-type": "BlockBlob"},
					body: data
				}, function optionalCallback (err, httpResponse, bodymsg) {
					if (err) {
						console.log(err);
						res.json({"status": 404});
						res.send();
					} else {
						console.log(filePath);
						console.log(bodymsg);
						console.log(httpResponse.statusCode);

						var patchUrl = "https://copmyshopnet.azurewebsites.net/api/Orders/" + req.body.orderId + "/Assets/Done/" + req.body.assetId
						fetch(patchUrl, {
							method: 'PATCH',
							headers: {
								"Accept": "application/json",
							    "Content-Type": "application/json",
								"Authorization": "Basic bXlzaG9wbmV0OkREVTR4PGdeXXQzVXttbXg="
							},
							body: JSON.stringify(req.body)
						})
						.then((response) => response.json())
						.then((responseJson) => {
							console.log(responseJson);
							if (responseJson.Status == 1) {
								res.json({"status" : httpResponse.statusCode});
								res.send();
							} else {
								res.json({"status": 404});
								res.send();
							}
						})
						.catch((error) => {
							res.json(error);
						})
					}
				});
			} else {
				console.log(err);
				res.json({"status": 404});
				res.send();
			}*/
             
			 
			 
			 
			//Test code below

			// let url = "https://copmyshopnet.blob.core.windows.net/orders/25/input/texture_file.jpg?sv=2017-04-17&sr=b&sig=MassS5%2B5POPTZsMIfpGUJ6KPCX93HA6stSE6qMfy9is%3D&se=2017-11-17T12%3A57%3A32Z&sp=rcw";
			// fetch(url, {
			// 	method: 'PUT',
			// 	headers: {
			// 		"x-ms-blob-type": "BlockBlob"
			// 	},
			// 	body: data
			// })
			// .then((response) => {
			// 	console.log("2");
			// 	console.log(response);
			// 	res.json({"file" : data});
			// 	res.send();
			// })
			// .catch((error) => {
			// 	console.log(error);
			// 	res.json(error);
			// })

		//});
        
		
		
		
	});
	
	
	///////////////////////// Create XML /////////////////////////
	app.post('/createXML/:affiliateId', (req, res) => {
		
		console.dir(req.params.affiliateId);
		
	    var fs = require('fs');
		var serializer = new (require('xmldom')).XMLSerializer;
		var implementation = new (require('xmldom')).DOMImplementation;
		
	    var testSource = '<?xml version="1.0" encoding="utf-8"?><root><urlExample><value1url>'+req.params.affiliateId+'</value1url> </urlExample></root>';
		var DOMParser = require('xmldom').DOMParser;
	
		var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(testSource, "text/xml"); //important to use "text/xml"

		fs.writeFile(
			"./tmp/plugin_biv/config.xml", 
			serializer.serializeToString(xmlDoc), 
			function(error) {
				if (error) {
					console.log(error);
					res.json({status: 500});
					res.send();
				} else {
					callToArchive();
				}
			}
		);		
		
		//require modules
		function callToArchive(){
			var archiver = require('archiver');
			var archive = archiver.create('zip', {});
			var output = fs.createWriteStream('./tmp/'+req.params.affiliateId+'.zip');

			output.on('close', function() {
				callToDelete();
			});
			
			archive.on('error', function(err) {
				res.json({status: 500});
				res.send();				
				throw err;				
			});
			
			archive.pipe(output);

			archive
			.directory('./tmp/plugin_biv','plugin_biv');
			archive.finalize();
			
		}
			
		function callToDelete(){
			fs.stat('./tmp/plugin_biv/config.xml', function (err, stats) {
				console.log(stats);//here we got all information of file in stats variable

				if (err) {
					res.json({status: 500});
					res.send();
					return console.error(err);
				}

				fs.unlink('./tmp/plugin_biv/config.xml',function(err){
					if(err) return console.log(err);
				});

				res.json({status: 200});
				res.send();
			});		
		}
			
	});
	
	
	
	
	
	
	
	
	/////////////////////////Change Vaas Encrypted String for Image/////////////////////////
	app.post('/changeEncString', (req, res) => {
		
		//res.status(200).json('{ "keySigned":"KeySignedURL"}');
		
		console.log("the responce is " + req.body);
		console.dir(req.body);
		/*let url = "https://copmyshopnet.blob.core.windows.net/orders/4/input/pattern_data.dxf?sv=2017-04-17&sr=b&sig=2iMPl6EUnPLxs7BLdZtkPo9J0pfXV3KbIVn8n8HGK8c%3D&se=2017-11-08T10%3A52%3A23Z&sp=rcw";
		fetch(url, {
			method: 'PUT',
			headers: {
				"Accept": "application/json",
			   "Content-Type": "application/json"
				"x-ms-blob-type: BlockBlob"
			},
			body: JSON.stringify(req.body)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log("to json");
			console.log(responseJson);
			if (responseJson.Message == "An error has occurred.") {
				res.status(500).json("Error");
			}
			else {
				res.status(200).json(responseJson);
			}
		})
		.catch((error) => {
			res.json(error);
		})*/
	
		
	});
};
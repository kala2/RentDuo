module.exports = (app) => {
	
	const multer = require('multer');
	var x;

	const storage = multer.diskStorage({
		destination: './uploads/',
		filename: function (req, file, cb) {
			// Mimetype stores the file type, set extensions according to filetype
			
			switch (file.mimetype) {
				case 'image/jpeg':
					ext = '.jpeg';
				break;
				case 'image/png':
					ext = '.png';
				break;
				case 'image/gif':
					ext = '.gif';
				break;
				case 'application/pdf':
					ext = '.pdf';
				break;
				case 'application/octet-stream':
					ext= '.dxf';
				break;
				case 'application/x-zip-compressed':
					ext= '.zip';
				break;
				
			}
			//x=file.originalname.slice(0, 4) + Date.now() + ext;
			cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
			//cb(null, file.originalname);
		}

	});

	const upload = multer({storage: storage});

	app.get('/*', function(req, res) {
		res.sendFile(__dirname + '/index.html');
	});
	

	app.post('/uploadHandler', upload.single('file'), function (req, res, next) {
		
		if (req.file && req.file.originalname) {
			console.log("The file name is: ", req.file.filename);
			res.send({ responseText: req.file.filename,x }); // You can send any response to the user here
		}
	});

	app.post('/uploadRemote', function (req, res, next) {

	//TODO Check why file size is only 22.

      console.log("to onoma tou einai "+ req.body.file);
		if (req.body.file) {

			var Client = require('ftp'); 
			var fs = require('fs');
			var c = new Client();
    
	      
		     
		    path = require('path'),
		    filePath = path.join(__dirname, '../uploads/'+req.body.file);

		
			
			
				console.log(req.body.file);
				var file  = fs.createReadStream(filePath);
							c.on('ready', function() {
							c.put(file, "registrationForms/uploads/"+req.body.file, function(err) {
								if (err) throw err;
								res.status(200);
								res.send();
								c.end();
							});
						});
						c.connect({
							host: 'myshopnet.atc.gr',
							secure: false,
							port: 21,
							user: 'blockachain',
							password: 'my$H0Pn3t'
						});
						
						
						
				
			
			
			
			
		
	
	
			
		}
		
		
						
					  
		
		
		
         
	});

	app.post('/deleteHandler',function (req, res, next) {
		var fs = require('fs');
		var filePath = './uploads/'+req.body.file;
		console.log("the req body file is: ", req.body.file);
		console.log("the deleted file path is: ", filePath);
		fs.unlinkSync(filePath);
		res.send({ responseText: req.data,x });
	});

}
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/mongo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/mongo', (req, res) => {
    console.log(req.body);
    const note = { username: req.body.Username, password: req.body.Password, email: req.body.Email };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {

        //soap testing
        
        /*var soap = require('soap');        
        var url = 'http://matlabwstest.alugroup.es/service.asmx?WSDL';
        var args = {
          user: "842.ecom.api",
          password: "4w6eenfwaqsgcyug",
          token: "YTgxMDIxNTVmZTE2MTI0ZDM5OTRlOTZmMTA3NDVlZDVkMjE2NDE3OTA1NDA3ZGE5",
          companydata: "<![CDATA[<name>ewrer</name><initials>ewrwer</initials><vat>werwer</vat><currency>werewr</currency>]]>",
          Lang: "el"
        };
        soap.createClient(url, function(err, client) {
            client.Service.ServiceSoap.msn_createcompany(args, function(err, result) {
                console.log("Result: " + JSON.stringify(result) + "Error: " + err);
            });
        });*/

        // var args = {
        //   email: "testtest2",
        //   password: "testtest2",
        //   Lang: "el"
        // };
        // soap.createClient(url, function(err, client) {
        //     client.Service.ServiceSoap.registerUser(args, function(err, result) {
        //         console.log("Result: " + JSON.stringify(result) + "Error: " + err);
        //     });
        // });

        var request = require('request');
        request('<API Call>', function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var info = JSON.parse(body)
            }
        })
                
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/mongo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  app.put('/mongo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { username: req.body.Username, password: req.body.Password };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

};

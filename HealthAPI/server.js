var bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var fs = require('fs');

var Patient = require("./models/patientSchema");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//import mongoose and connect to IMLab cloud server
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hpate45:Sanbha123@cluster0-h2gik.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true  });
//check for successful connection or throw an error
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connection alive");
});

var router = express.Router();
const port = 3000

// app.use(express.static(__dirname+"/public"));

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    console.log('Something is happening');
    next();
});

app.get('/', (request, response) => {
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./index.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})

app.get('/getIllness', (request, response) => {

	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	console.log(query.symptom,query.year,query.gender);

  	return response.send({
  		symptom: query.symptom,
  		age: query.year,
  		gender: query.gender
  	});

})

app.get('/getPatientRecords', (request, response) => {

	Patient.find({},function(err,patient){
            if(err){
                response.send(err);
            } else {
                response.send(patient);
            }
        })

})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


var firebase = require('firebase-admin');
var bodyParser = require('body-parser')
var serviceAccount = require('./serviceKey.json');
const express = require('express')
const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var fs = require('fs');

const port = 4000

app.use(express.static(__dirname + '/public'));


firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://enactushacks-1b6b8.firebaseio.com/'
});


var db = firebase.database();

var ref = db.ref("patients");

ref.once('value', gotData, errData);

function gotData(data){
	console.log(data.val());
}

function errData(err){
  console.log("Error");
  console.log(err);
}


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



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


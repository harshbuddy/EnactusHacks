var bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var fs = require('fs');

const port = 3000

app.use(express.static(__dirname+"/public"));

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

	console.log(query.symptom,query.age,query.gender);

  	return response.send({
  		symptom: query.symptom,
  		age: query.age,
  		gender: query.gender
  	});

})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


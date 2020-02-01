var cors = require('cors')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors({
  origin: 'localhost:3000'
}));

var fs = require('fs');

const port = 3000

app.use(express.static(__dirname));

app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/' ,(request, response) => {
  	
	fs.readFile('./test2.html', null, function(error,data){
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


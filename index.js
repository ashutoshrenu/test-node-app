var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var app=express();
var http=require('http').Server(app);
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


 app.get("/api/v1/getData", async function (req, res) {
 			res.status(200).send({
          statusCode: 200,
          status: true,
          data: [{'name': 'pramod', 'phone': 11111111111}],
          message: "Greetings from test app",
        });
	});

http.listen(5000,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log(http.address());
		

	}
});

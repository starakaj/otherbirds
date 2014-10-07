var express = require("express");
var app = express();

app.set('port', process.env.PORT || 80);

// Serve shit static
app.use(express.compress);
app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'), function() {
	console.log("Otherbirds started on port: " + app.get('port'));
});
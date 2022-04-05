//. app.js
var express = require( 'express' ),
    app = express();

var MyNode = require( './docs/jsnodejs' );
var myNode = new MyNode();

app.use( express.static( __dirname + '/docs' ) );

app.get( '/pnum', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  var results = myNode.pnum( 1000 );
  res.write( JSON.stringify( { status: true, results: results }, null, 2 ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

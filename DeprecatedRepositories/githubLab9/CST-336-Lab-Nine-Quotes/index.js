/* Require external APIs and start our application instance */
var express = require('express');
var mysql = require('mysql');
var app = express();

/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');

/* Configure MySQL DBMS */
const connection = mysql.createConnection({
    host: 'g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'b9oxrh0rxm2z3khm',
    password: 'pkrweo17a8cm6lok',
    database: 'sb1dfjg2tfdpd71v'
});
connection.connect();

/* The handler for the DEFAULT route */
app.get('/', function(req, res){
  var blah = 'select country from l9_author';
    connection.query(blah, function(error, results) {
        if(error) throw error;
        var arr = [];
        results.forEach(function(r) {
            if (!arr.includes(r.country)) {
                arr.push(r.country);
            }
        });
        
        res.render('home', {countries: arr});
    });
});

/* The handler for the /author route */
app.get('/author', function(req, res){
    var blah = 'select * from l9_author where firstName=\'' 
                + req.query.firstname + '\' and lastName=\'' 
                + req.query.lastname + '\';'
	connection.query(blah, function(error, found){
	    var author = null;
	    if(error) throw error;
	    if(found.length){
	        author = found[0];
	        // Convert the Date type into the String type
	        author.dob = author.dob.toString().split(' ').slice(0,4).join(' ');
	        author.dod = author.dod.toString().split(' ').slice(0,4).join(' ');
	    }
	    res.render('author', {author: author});
	});
});

/* The handler for the /author/name/id route */
app.get('/author/:aid', function(req, res){
    var stmt = 'select quote, firstName, lastName ' +
               'from l9_quotes, l9_author ' +
               'where l9_quotes.authorId=l9_author.authorId ' + 
               'and l9_quotes.authorId=' + req.params.aid + ';'
    connection.query(stmt, function(error, results){
        if(error) throw error;
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

/* The handler for the GENDER route */
app.get('/gender', function(req, res){
    var stmt = 'select quote, firstName, lastName ' +
               'from l9_quotes, l9_author ' +
               'where sex=\'' + req.query.gender + '\';';
    connection.query(stmt, function(error, results){
        if(error) throw error;
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

/* The handler for the KEY route */
app.get('/keyword', function(req, res){
    var stmt = 'select quote, firstName, lastName ' +
               'from l9_quotes, l9_author ' +
               'where l9_quotes.authorId=l9_author.authorId ' + 
               'and quote like\'%' + req.query.keyword + '%\';';
    connection.query(stmt, function(error, results){
        if(error) throw error;
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

/* the handler for the COUNTRY route */
app.get('/category', function(req, res){
    var stmt = 'select quote, firstName, lastName ' +
               'from l9_quotes, l9_author ' +
               'where l9_quotes.authorId=l9_author.authorId ' + 
               'and country=\'' + req.query.country + '\';';
    connection.query(stmt, function(error, results){
        if(error) throw error;
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});


/* The handler for undefined routes */
app.get('*', function(req, res){
   res.render('error'); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})
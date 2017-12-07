var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js');
var connection = mysql.createConnection(config);
connection.connect();
console.log(connection)


/* GET home page. */
router.get('/getStudents', function(req, res, next) {
	const selectQuery = `SELECT * FROM students`;
	connection.query(selectQuery,(error,results)=>{
		if (error){
			throw error;
		} else {
			res.json(results);
		}
	});
});

router.post('/addStudent', (req,res)=>{
	res.json(req.body);
})

module.exports = router;

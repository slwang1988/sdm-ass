var mysql  = require('mysql');  
var rows=[];
var series =[];
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'blog', 
});

connection.connect();
var  sql = 'SELECT id,hapilevel FROM hapi_level ';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------SELECT----------------------------');
       rows = JSON.stringify(result);
       var series = JSON.parse(rows);      
       //console.log(series);
       recall.recall(series,Response);
       console.log('------------------------------------------------------------\n\n');  
});
connection.end();
console.log(series);

/*for (var i=0; i< rows.length; i++) {
series.push({"id" : rows[i].id, "hapilevel" : rows[i].hapilevel})
};*/





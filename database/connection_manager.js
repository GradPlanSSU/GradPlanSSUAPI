/**
 * Created by Snore Train on 4/7/2017.
 */
var mysql = require('mysql');
var db = require('./db_connection');
var pool = mysql.createPool(db.config);

module.exports = {
    query: function(){
        var sql_args = [];
        var args = [];
        for(var i=0; i < arguments.length; i++){
            args.push(arguments[i]);
        }
        var callback = args[args.length-1]; //last arg is callback
        pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                return callback(err);
            }
            if(args.length > 2){
                sql_args = args[1];
            }
            connection.query(args[0], sql_args, function(err, results) {
                connection.release(); // always put connection back in pool after last query
                if(err){
                    console.log(err);
                    return callback(err);
                }
                callback(null, results);
            });
        });
    },
    refresh: function(){
        var callback = arguments[arguments.length-1];
        pool.getConnection(function(err, connection){
            if (err) {
                console.log(err);
                return callback(err);
            }
            connection.release();
            callback(null, 'Connection is good');
        });
    }
};
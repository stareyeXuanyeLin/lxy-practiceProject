// 数据库配置文件
// 引入MySQL数据库依赖
let mysql = require("mysql");

module.exports = mysql.createPool({
	host:"phpmyadmin.qieqiong.com",
	user:"mysql2340726",
	password:"axCt9MDr1h",
	database:"mysql2340726_db"
});
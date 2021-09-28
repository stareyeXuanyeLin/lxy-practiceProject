// 数据库配置文件
// 引入MySQL数据库依赖
const mysql = require("mysql");

const data =  mysql.createPool({
	host:"phpmyadmin.qieqiong.com",
	user:"mysql2340726",
	password:"axCt9MDr1h",
	database:"mysql2340726_db"
});

module.exports = data;
// 用户核心账户表
class UserAccountDao {
    database = require("../dispose/mysql");

    // 根据账号获取用户
    getByUname(uname) {
        return new Promise((resovle, reject) => {
            this.database.query("select * from userAccount where uname =?",uname,(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 根据id获取数据
    getById(id) {
        return new Promise((resovle, reject) => {
            this.database.query("select * from userAccount where id =?",id,(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 往表中添加数据
    addData(userAccount) {
        return new Promise((resovle, reject) => {
            this.database.query("insert into userAccount set ?",userAccount,(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 设置用户信息表id
    setInformation(userAccount) {
        return new Promise((resovle, reject) => {
            this.database.query("update userAccount set ? where id=?",[userAccount,userAccount.id],(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
}

module.exports = new UserAccountDao();
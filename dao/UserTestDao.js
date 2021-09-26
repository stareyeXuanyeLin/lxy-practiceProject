
class UserTestDao {
    data = require("../dispose/mysql")

    // 获取所有表元素
    getUserTestAll() {
        return new Promise((resovle, reject) => {
            this.data.query("select * from userTest",(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 删除表元素
    deleteUserTestByID(id) {
        return new Promise((resovle, reject) => {
            this.data.query("delete from userTest where id=?",id,(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 插入表元素
    insertUserTest(userTest) {
        return new Promise((resovle, reject) => {
            this.data.query("insert into userTest set ?",userTest,(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
    // 根据id修改表元素
    updateUserTestByID(userTest) {
        return new Promise((resovle, reject) => {
            this.data.query("update userTest set ? where id=?",[userTest,userTest.id],(err,data)=> {
                if (err) return reject(err);
                resovle(data);
            })
        })
    }
}

module.exports = new UserTestDao();
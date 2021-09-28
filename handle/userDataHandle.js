// 数据库用户表操作模块
// 导入持久层
const UserTestDao = require("../dao/UserTestDao");

// 获取全部用户
exports.getUserAll = (req, res)=> {
    UserTestDao.getUserTestAll().then((data)=> {
        res.send(data);
    }).catch((err)=> {
        console.log(err);
    })
}
// 根据id修改用户
exports.updateUserById = (req,res)=> {
    UserTestDao.updateUserTestByID(req.body).then((data)=> {
        res.send(data);
    }).catch((err)=> {
        console.log(err);
    })
}
// 根据id删除用户
exports.deleteUserById = (req,res)=> {
    UserTestDao.deleteUserTestByID(req.body.id).then((data)=> {
        res.send(data);
    }).catch((err)=> {
        console.log(err);
    })
}
// 添加用户
exports.insertUser = (req,res)=> {
    UserTestDao.insertUserTest(req.body).then((data)=> {
        res.send(data);
    }).catch((err)=> {
        console.log(err);
    })
}
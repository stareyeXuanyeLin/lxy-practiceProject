// 引入路由
let express = require("express");
// 创建用于返回的路由对象集
let router = express.Router();
// 导入持久层
const UserTestDao = require("../dao/UserTestDao");

// 获取表的所有数据
router.get("/getUserTestAll",(req,res)=> {
	UserTestDao.getUserTestAll().then((data)=> {
		res.send(data);
	}).catch((err)=> {
		console.log(err);
	})
})
// 根据ID删除数据
router.post("/deleteUserTestByID",(req,res)=> {
	UserTestDao.deleteUserTestByID(req.body.id).then((data)=> {
		res.send(data);
	}).catch((err)=> {
		console.log(err);
	})
})
// 根据ID修改数据
router.post("/updateUserTestByID",(req,res)=> {
	UserTestDao.updateUserTestByID(req.body).then((data)=> {
		res.send(data);
	}).catch((err)=> {
		console.log(err);
	})
})
// 向表中插入数据
router.post("/insertUserTest",(req,res)=> {
	UserTestDao.insertUserTest(req.body).then((data)=> {
		res.send(data);
	}).catch((err)=> {
		console.log(err);
	})
})

module.exports = router;
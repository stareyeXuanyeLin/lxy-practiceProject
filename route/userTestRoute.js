// 引入路由
const express = require("express");
// 创建用于返回的路由对象集
const router = express.Router();
// 导入数据库用户表操作模块
const userDataHandle = require("../handle/userDataHandle")

// 获取表的所有数据
router.get("/getUserTestAll",userDataHandle.getUserAll)
// 根据ID删除数据
router.post("/deleteUserTestByID",userDataHandle.deleteUserById)
// 根据ID修改数据
router.post("/updateUserTestByID",userDataHandle.updateUserById)
// 向表中插入数据
router.post("/insertUserTest",userDataHandle.insertUser)

module.exports = router;
// 引入服务器依赖
const express = require("express");
// 引入生成jwt字符串依赖
const jwt = require("jsonwebtoken");
// 引入还原jwt字符串依赖
const expressJwt = require("express-jwt");
// 创建用于返回的路由对象
const router = express.Router();

//将 expressJwt 导入静态资源
router.use(expressJwt({
    secret:"test",
    algorithms:[]
}).unless({ path:[/^\/jwt\/api/] }));

// 检查登录
router.get("/login",(req, res) => {
    res.send(jwt.sign({ username:"admin" },"test",{ expiresIn:"360s" }));
})
router.get("/apiLogin",(req, res) => {
    res.send(jwt.sign({ username:"admin" },"test",{ expiresIn:"360s" }));
})
// 验证账号
// router.post("/login",(req, res) => {
//     let userData = jwt.sign({ username:"admin" },"test",{ expiresIn:"360s" });
//     let user;
// ?Authorization=Bearer
// })
router.get("/getUser",(req, res) => {
    console.log(req.headers);
    res.send("我来了");
})
module.exports = router;
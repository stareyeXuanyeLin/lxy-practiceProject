// 登录相关路由
const express = require("express");
const session = require("express-session");
// 创建用于返回的路由对象集
const router = express.Router();
//将 session 导入静态资源中
router.use(session({
    secret:"test",
    resave:false,
    saveUninitialized:true
}))

//登录接口
router.post("/login", (req, res) => {
    //判断账号密码是否正确
    if (req.body.uname !== "admin" || req.body.pass !== "123456") {
        return res.send({ code:400,msg:"登录失败"})
    }
    req.session.user = req.body;
    req.session.isLoing = true;
    res.send({ code:200,msg:"登录成功" });
})
// 检查是否处于登录状态
router.get("/isLogin",(req, res) => {
    if (req.session.user) {
        res.send({ code:200,msg:"登录成功" });
    } else {
        res.send({ code:400,msg:"登录失败" });
    }
})
//路由·退出登录
router.get("/loginOut",(req, res) => {
    req.session.destroy();
    res.send({ code:200,msg:"退出成功"});
})

module.exports = router;
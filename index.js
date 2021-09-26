// 引入服务器依赖
const express = require("express");
// 引入跨域依赖
const cors = require("cors");
// 创建服务器
const app = express();

// 解决浏览器跨域问题
app.use(cors());

// 解决post请求返回中文时乱码的问题
app.use(express.urlencoded({extended: false}));
// 默认打开主页
app.use("/", express.static("web"));
// 导入数据表获取路由
app.use("/user", require("./route/userTestRoute"));
//导入登录相关路由
app.use("/login",require("./route/loginRoute"));
// 导入jwt静态
app.use("/jwt",require("./route/jwtLoginRotue"));
// 导入错误路由中间件
app.use("/",require("./next/errRoutueNext"));

// 监听系统端口
app.listen("8080", () => {
    console.log("服务器已启动。");
});
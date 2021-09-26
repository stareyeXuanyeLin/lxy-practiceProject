// 错误路由中间件
module.exports = (err,req,res,next)=> {
    if (err.name === "UnauthorizedError") {
        switch (err.status) {
            case 401:res.send("错误401：无效的token！");break;
            case 500:res.send("错误500：未知的错误！");break;
        }
    }
    next();
}
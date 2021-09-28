// 用户账户操作模块
// 导入加密依赖
const bcrypt = require("bcryptjs");
// 导入数据表对象
const UserAccountDao = require("../dao/UserAccountDao");
// 导入时间格式化方法
// Date.prototype.cs = require("./dateFormatHandle");

//根据账号获取用户
exports.login = (req,res)=> {
    // 接收传入的表单数据
    let formData = req.body;
    // 检查账号与密码是否为空
    if (formData.uname==="" || formData.password==="") {
        return res.send({ code:400,msg:"账号或密码不能为空"});
    }
    // 根据传入的账号获取用户
    UserAccountDao.getByUname(formData.uname).then((data)=> {
        // 检查密码是否正确
        bcrypt.compare(formData.password,data[0].password).then((boole)=> {
            if (boole) {
                res.send({ code:200,msg:"登录成功"});
            } else res.send({ code:400,msg:"账号或密码错误"});
        })
    }).catch(()=> {
        // 未查找到用户
        res.send({ code:400,msg:"账号或密码错误"});
    })
}

// 注册新用户
exports.register = (req,res)=> {
    let formData = {
        uname:req.body.uname,
        password:req.body.password
    }
    // 检查传入密码是否相同
    if (formData.uname==="" || formData.password==="" || req.body.password_s==="") {
        return res.send({code: 400, msg: "账号或密码不能为空"});
    }else if (formData.password !== req.body.password_s) {
        return res.send({ code:400,msg:"两次输入的密码不一致"});
    }
    // 检查账号是否重复
    UserAccountDao.getByUname(formData.uname).then((data)=> {
        if (data.length > 0) {
            return res.send({ code:400,msg:"该账号已被注册"});
        }
        // 对密码进行加密
        formData.password = bcrypt.hashSync(formData.password,12);
        // 添加数据状态
        formData.status = 1;
        // 添加注册时间与最后登录时间
        let date = new Date();
        formData.registerTime = date;
        formData.endLoginTime = date;
        // 添加用户资料id
        formData.information = 0;
        // 向数据库中插入数据
        UserAccountDao.addData(formData).then((data)=> {
            if (data.affectedRows===1) {
                // 添加用户资料表
                UserAccountDao.getByUname(formData.uname).then((data)=> {
                    // 计算用户资料表id
                    data[0].information = function(date) {
                        let time = date.getFullYear().toString();
                        time += date.getMonth()+1>9?(date.getMonth()+1).toString():"0"+(date.getMonth()+1).toString();
                        time += date.getDate() > 9?date.getDate().toString():"0"+date.getDate().toString();
                        return +time;
                    } (new Date(data[0].registerTime))+(data[0].id+data[0].status).toString();
                    // 设置用户资料表id
                    UserAccountDao.setInformation(data[0]).then(()=> {
                        res.send({ code:200,msg:"注册完成" });
                    }).catch((err)=> {
                        console.log(err)
                        res.send({ code:400,msg:"错误位置3："+err.sqlMessage });
                    })
                })
            }
        }).catch((err)=> {
            res.send({ code:400,msg:"错误位置2："+err.sqlMessage });
        })
    }).catch((err)=> {
        res.send({ code:400,msg:"错误位置1："+err.sqlMessage })
    })
}

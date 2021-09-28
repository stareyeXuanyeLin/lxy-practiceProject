$(()=> {
    // 注册事件
    $("#butt-register").click(()=> {
        let user = {
            uname:$("#user-uname").val(),
            password:$("#user-password_1").val(),
            password_s:$("#user-password_2").val()
        }
        $.ajax({
            url:"http://localhost:8080/login/register",
            method:"post",
            data:user,
            success:(data)=> {
                if (data.code===200) {
                    layer.msg(data.msg,{
                        time:20000,
                        btn:["确定"]
                    });
                } else {
                    layer.msg(data.msg,{
                        time:20000,
                        btn:["确定"]
                    });
                }
            }
        })
    })
})
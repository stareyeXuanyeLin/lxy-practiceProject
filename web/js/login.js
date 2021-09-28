$(()=> {
    // 账号输入栏获取焦点，改变图标div的边框样式
    $(".login-form input").focus((e)=> {
        const ele = e.target;
        if ($(ele).prop("type")==="text") {
            $(ele).parent().siblings().css("border-color","#D2D2D2");
        }
    }).blur((e)=> {
        const ele = e.target;
        if ($(ele).prop("type")==="text") {
            $(ele).parent().siblings().css("border-color","#ECECEC");
        }
    })
    // 登录事件
    $("#butt-login").click((e)=> {
        e.preventDefault();
        let user = {
            uname:$("#layer-uname").val(),
            password:$("#layer-password").val()
        }
        $.ajax({
            url:"http://localhost:8080/login/login",
            method:"post",
            data:user,
            success:(data)=> {
                if (data.code===200) {
                    location.href = "http://localhost:8080/dataWeb.html";
                } else {
                    layer.msg(data.msg,{
                        time:20000,
                        btn:["确定"]
                    });
                    location.reload();
                }
            }
        })
    })
})
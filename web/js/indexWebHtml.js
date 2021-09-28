// 添加按钮

// 请求表所有数据
function getDataBaseAll() {
	$.ajax({
		type: "get",
		url: "http://localhost:8080/user/getUserTestAll",
		data: null,
		dataType: "json",
		success: (data) => {
			let butt = "<button type='button' class='btn btn-success'>修改</button><button type='button' class='btn btn-danger'>删除</button>";
			let tbody = $("tbody");
			// 删除表身所有子元素
			$(tbody).empty();
			// 重新添加表身
			for (let i = 0; i < data.length; i++) {
				let th1 = `<th>${data[i].id}</th>`;
				let th2 = `<th>${data[i].name}</th>`;
				let th3 = `<th>${data[i].sex}</th>`;
				$(tbody).append(`<tr>${th1+th2+th3}<th>${butt}</th></tr>`);
			}
		}
	})
}
$(() => {
	// 循环创建表格内容
	getDataBaseAll();
	// 绑定按钮点击事件
	$("table").click((e) => {
		let ele = e.target;
		if ($(ele).prop("nodeName") === "BUTTON") {
			// 修改数据
			if ($(ele).text() === "修改") {
				$("#exampleInputId").attr({
					"disabled":"disabled",
					"placeholder":$($(ele).parents("tr").children()[0]).text()
				})
				$("#exampleInputName").attr({
					"placeholder":$($(ele).parents("tr").children()[1]).text(),
				}).val("");
				if ($($(ele).parents("tr").children()[2]).text() === "男") {
					$("#sex1").attr("checked", true);
				} else $("#sex0").attr("checked", true);
				$("button").attr("id","update");
				$(".back").show();
			}
			// 删除数据
			if ($(ele).text() === "删除") {
				$.ajax({
					type: "post",
					url: "http://localhost:8080/user/deleteUserTestByID",
					data: { id: $($(ele).parents("tr").children()[0]).text() },
					dataType: "josn",
				})
				getDataBaseAll();
			}
			// 添加数据
			if ($(ele).text() === "添加") {
				$("#exampleInputId").attr({
					"disabled":"disabled",
					"placeholder":0
				})
				$("#exampleInputName").attr("placeholder","").val("");
				$("#sex1").attr("checked", true);
				$("button").attr("id","add")
				$(".back").show();
			}
		}
	})
	// 修改表单的事件
	$("form").click((e) => {
		let ele = e.target;
		if ($(ele).prop("nodeName") === "DIV" && $(ele).text() === "X") {
			$(".back").hide();
		}
		if ($(ele).prop("nodeName") === "BUTTON" && $(ele).text() === "提交") {
			let exampleInputId = $("#exampleInputId");
			let exampleInputName = $("#exampleInputName");
			let userTest = {
				id: $(exampleInputId).val()?$(exampleInputId).val():$(exampleInputId).prop("placeholder"),
				name: $(exampleInputName).val()?$(exampleInputName).val():$(exampleInputName).prop("placeholder"),
				sex: $("input[name='sex']:checked").val()
			}
			let route = undefined;
			if ($(ele).prop("id")==="update") {
				route = "updateUserTestByID";
			} else if ($(ele).prop("id")==="add") {
				route = "insertUserTest";
			}
			$.ajax({
				type: "post",
				url: `http://localhost:8080/user/${route}`,
				data:userTest,
				dataType: "josn",
			});
			getDataBaseAll();
			$(".back").hide();
		}
	})
})

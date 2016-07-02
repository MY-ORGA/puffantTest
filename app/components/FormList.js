import React, {Component} from 'react';
import Form from './Form';
import FormSelect from './FormSelect';

export default class FormList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			configs: [
				{
					label: "用户名",
					type: "input",
					checkFunction: function (name) {
						var len = name.length;
						if (len>=4 && len<=16) {
							return 1;
						} else if (len === 0) {
							return 2;
						} else {
							return 3;
						}
					},
					rules: ['必填，长度为4-16个字符', '用户名可用', '用户名不可以为空', '用户名格式错误']
				},
				{
					label: "手机号码",
					type: "input",
					checkFunction: function (phone) {
						var len = phone.length;
						var regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
						if (regPhone.test(phone)) {
							return 1;
						} else if (len == 0) {
							return 2;
						} else {
							return 3;
						}
					},
					rules: ['必填，请输入您的电话号码', '号码可用', '号码不可以为空', '号码格式错误']
				},
				{
					label: "邮箱",
					type: "input",
					checkFunction: function (email) {
						var len = email.length;
						var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/g;
						if (regEmail.test(email)) {
							return 1;
						} else if (len == 0) {
							return 2;
						} else {
							return 3;
						}
					},
					rules: ['必填，请输入您的邮箱', '邮箱格式正确', '邮箱不可以为空', '邮箱格式错误']
				},
				{
					label: "密码",
					type: "password",
					checkFunction: function (password) {
						// 密码中是否含有不合法字符标志位
						var flag = true;
						var len = password.length;
						for (var i=0; i<password.length; i++) {
							var charCode = password.charCodeAt(i);
							if (charCode > 128) {
								flag = false;
							}
						}
						if (flag) {
							if (len>=4 && len<=16) {
								return 1;
							} else if (len === 0) {
								return 2;
							} else {
								return 3;
							}
						} else {
							return 3;
						}
					},
					rules: ['必填，长度为4-16个字符', '密码可用', '密码不可以为空', '密码格式错误']
				},
				{
					label: "重复密码",
					type: "password",
					checkFunction: function (repassword) {
						// 获取第一次输入密码值
						var password = document.querySelector("input[type='password']").value;
						var len = repassword.length;
						if (repassword !== password) {
							return 3;
						} else if (len === 0) {
							return 2;
						} else {
							return 1;
						}
					},
					rules: ['请再次输入您的密码', '密码正确', '密码不可以为空', '密码不一致']
				}
			]

		};
	}
	submit () {
		let inputs = document.querySelectorAll("input");
		for (let i=0; i<inputs.length-1; i++) {
			if (inputs[i].style.borderColor !== "rgb(153, 153, 153)") {
				alert("提交失败！");
				return 0;
			}
		}
		// 提交数据
		// ....
		alert("提交成功！");
	}
	render () {
		return (
			<form className="form">
				{this.state.configs.map((config) => {
					return <Form configuration={config} />;
				})}
				<FormSelect />
				<input type="button" className="submit" value="提交" onClick={this.submit.bind(this)}/>
			</form>
		);
	}
}
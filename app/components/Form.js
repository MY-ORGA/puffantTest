import React, {Component} from 'react';

export default class Form extends Component {
	blur () {
		var input = this.refs.inputValue;
		var info = this.refs.noticeInfo;
		var flagNum = this.props.configuration.checkFunction(input.value);
		info.innerText = this.props.configuration.rules[flagNum];
		switch (flagNum) {
			case 1:
				// 不同状态下iuput边框，提醒文字颜色不同
				info.style.color = "rgb(95, 185, 72)";
				input.style.borderColor = "#999";
				break;
			case 2:
				info.style.color = "red";
				input.style.border = "1px solid red";
				break;
			case 3:
				info.style.color = "red";
				input.style.borderColor = "red";
				break;
		}
	}
	render () {
		return (
			<div className="form-item" >
				<label>{this.props.configuration.label}</label>
				<input type={this.props.configuration.type} ref="inputValue" onBlur={this.blur.bind(this)}/>
				<span ref="noticeInfo">{this.props.configuration.rules[0]}</span>
			</div>
		);
	}
}
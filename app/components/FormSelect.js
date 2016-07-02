import React, {Component} from 'react';

export default class FormSelect extends Component {
	render () {
		const yearArr = function() {
			let arr = [], i = 1900;
			while (i<=2016) {arr.push(i++);}
			return arr;
		}();
		const monthArr = function() {
			let arr = [], i = 1;
			while (i<=12) {arr.push(i++);}
			return arr;
		}();
		return (
			<div className="form-item">
				<label>
					出生年月
				</label>
				<select className="year">
					<option value="年">年</option>
					{
						yearArr.map((i) => {
								return <option value={i}>{i}年</option>;
						})
					}
				</select>
				<select className="month">
					<option value="月">月</option>
					{
						monthArr.map((i) => {
								return <option value={i}>{i}月</option>;
						})
					}
				</select>
			</div>
		);
	}
}
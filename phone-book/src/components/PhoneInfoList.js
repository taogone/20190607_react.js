// file: src/components/PhoneInfoList.js
import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
	// static defaultProps = {
	// 	data: []
	// };

	render() {
		console.log("this.props: ", this.props);
		const { data } = this.props;
		console.log("data: ", { data });
		const list = data.map(info => <PhoneInfo key={info.id} info={info} />);
		console.log("list: ", { list });

		return (
			<div>
				{list}
			</div>
		);
	}
}

export default PhoneInfoList;

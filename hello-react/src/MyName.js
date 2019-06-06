import React from "react";

// class MyName extends Component {
// 	static defaultProps = {
// 		name: "Young Ki Kim"
// 	};
// 	render() {
// 		return (
// 			<div>
// 				안녕하신감. 내 이름은 <b>{this.props.name}</b> 라네
// 			</div>
// 		);
// 	}
// }

const MyName = ({ name }) => {
	return (
		<div>
			안녕. 내 이름은 {name}이야.
		</div>
	);
};

export default MyName;

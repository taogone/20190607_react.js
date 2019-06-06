import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
	id = 2;
	state = {
		information: [
			{
				id: 0,
				name: "김영기",
				phone: "010-2738-6682"
			},
			{
				id: 1,
				name: "이선희",
				phone: "010-3932-6682"
			}
		]
	};

	handleCreate = data => {
		const { information } = this.state;
		this.setState({
			information: information.concat({ id: this.id++, ...data })
		});
	};

	render() {
		console.log(this.state.information);
		return (
			<div>
				<div>
					<PhoneForm onCreate={this.handleCreate} />
					<PhoneInfoList data={this.state.information} />
				</div>
			</div>
		);
	}
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
	handleCreate = data => {
		console.log(data);
	};
	render() {
		return (
			<div>
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<PhoneForm onCreate={this.handleCreate} />
				</div>
			</div>
		);
	}
}

export default App;

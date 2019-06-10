import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
	id = 3;

	state = {
		input: "",
		todos: [
			{ id: 0, text: "리액트 소개", checked: false },
			{ id: 1, text: "리액트 소개", checked: true },
			{ id: 2, text: "리액트 소개", checked: false }
		]
	};

	handelChange = e => {
		this.setState({
			input: e.target.value
		});
	};

	handleCreate = e => {
		const { input, todos } = this.state;
		this.setState({
			input: "", // input을 비우고
			// concat을 사용하여 배열에 추가
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false
			})
		});
	};

	handleKeyPress = e => {
		// Enter 키가 눌려지면 handleCreate 호출
		if (e.key === "Enter") {
			this.handleCreate();
		}
	};

	handleToggle = id => {
		const { todos } = this.state;

		// 파라미터로 받은 id로 몇 번째 아이템인지를 찾음
		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index]; // 선택된 객체
		const nextTodos = [...todos]; // 배열을 복사

		// 기존 값들을 복사하고, checked 값 덮어쓰기
		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};
		this.setState({
			todos: nextTodos
		});
	};

	handleRemove = id => {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter(todo => todo.id !== id)
		});
	};
	render() {
		const { input, todos } = this.state;
		const { handelChange, handleCreate, handleKeyPress } = this;

		return (
			<TodoListTemplate
				form={
					<Form
						value={input}
						onKeyPress={handleKeyPress}
						onChange={handelChange}
						onCreate={handleCreate}
					/>
				}
			>
				<TodoItemList
					todos={todos}
					onToggle={this.handleToggle}
					onRemove={this.handleRemove}
				/>
			</TodoListTemplate>
		);
	}
}

export default App;

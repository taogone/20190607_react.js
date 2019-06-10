import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;
		return (
			<div>
				<TodoItem text="김영기" />
				<TodoItem text="이선희" />
				<TodoItem text="김지윤" />
				<TodoItem text="김지민" />
			</div>
		);
	}
}

export default TodoItemList;

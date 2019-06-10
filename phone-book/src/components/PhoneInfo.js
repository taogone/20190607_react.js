// file: src/components/PhoneInfo.js
import React, { Component } from "react";

class PhoneInfo extends Component {
	static defaultProps = {
		info: {
			name: "이름",
			phone: "000-0000-0000",
			id: 0
		}
	};

	// 수정 버튼을 눌렀을 때 editing 값을 true로 설정
	// 이 값이 true일 때는 기존 텍스트 형태로 보여주던 값들을 input 형태로 보여줌
	state = {
		editing: false,
		name: "",
		phone: ""
	};

	handleRemove = () => {
		// 삭제 버튼이 클릭되면 onRemove에 id를 넣어서 호출
		const { info, onRemove } = this.props;
		onRemove(info.id);
	};

	// editing 값을 반전시키는 함수
	// false -> true, true -> false
	handleToggleEdit = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};

	// input에서 onChange 이벤트 발생 시 호출되는 함수
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	componentDidUpdate(prevProps, prevState) {
		// editing 값이 바뀔 때 처리 로직
		// 수정 클릭 시 기존 갑이 input에 나타나고
		// 수정 적용 시, input 값들을 부모에게 전달

		const { info, onUpdate } = this.props;
		if (!prevState.editing && this.state.editing) {
			// editing 값이 false에서 true로 전환될 때
			// info 값을 state에 넣어줌
			this.setState({
				name: info.name,
				phone: info.phone
			});
		}

		if (prevState.editing && !this.state.editing) {
			// editing 값이 true에서 false로 전환될 때
			onUpdate(info.id, {
				name: this.state.name,
				phone: this.state.phone
			});
		}
	}

	render() {
		console.log("render PhoneInfo" + this.props.info.id);
		const style = {
			border: "1px solid black",
			padding: "8px",
			margin: "8px"
		};

		const { editing } = this.state;

		if (editing) {
			return (
				<div style={style}>
					<div>
						<input
							value={this.state.name}
							name="name"
							placeholder="이름"
							onChange={this.handleChange}
						/>
					</div>
					<div style={style}>
						<input
							value={this.state.phone}
							name="phone"
							placeholder="전화번호"
							onChange={this.handleChange}
						/>
					</div>
					<button onClick={this.handleToggleEdit}>적용</button>
					<button onClick={this.handleRemove}>삭제</button>
				</div>
			);
		}
		// 일반 모드
		const { name, phone } = this.props.info;

		return (
			<div style={style}>
				<div>
					<b>
						{name}
					</b>
				</div>
				<div>
					{phone}
				</div>
				<button onClick={this.handleToggleEdit}>수정</button>
				<button onClick={this.handleRemove}>삭제</button>
			</div>
		);
	}
}

export default PhoneInfo;

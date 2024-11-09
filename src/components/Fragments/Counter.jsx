import React from "react";
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
		
	}

	render() {
		return (
			<div className="flex items-center gap-2">
				<h1 className="text-xl font-bold">{this.state.count}</h1>
				<button className="bg-black text-white p-3 rounded-md w-16" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
			</div>
		)
	}
}

export default Counter;
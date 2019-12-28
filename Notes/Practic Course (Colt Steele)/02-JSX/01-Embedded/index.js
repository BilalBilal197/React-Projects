// class Hello extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 				<h1>Hello There</h1>
// 				<h1>Hello There</h1>
// 				<h1>Hello There</h1>

// 			</div>

// 		)
// 	}
// }

// function Hello(){
// 	return (
// 			<div>
// 				<h1>Hello There</h1>
// 				<h1>Hello There</h1>
// 				<h1>Hello There</h1>

// 			</div>

// 		)
// }


// ReactDOM.render(<Hello/>, document.getElementById('root'));




// class JSXDemo extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 				<h1>Hello There</h1>
// 				<img src='https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' />

// 			</div>
// 			);

// 	}
// }

// ReactDOM.render(<JSXDemo/>, document.getElementById('root'));

function getMood(){
	const moods=['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid']
	return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
	render(){
		return(
			<div>
					<h1>My number is: {2 * 8.4}</h1>
					<h1>My Current modd is: {getMood()}</h1>
			</div>
			);

	}
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));
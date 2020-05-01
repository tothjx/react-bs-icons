import React from 'react';
import './styles/App.scss';

const MIN_WORD_LENGTH = 3; // minimal length for keyword

class App extends React.Component {
	constructor(props, word) {
		super(props);

		this.placeholder = 'searching for icons [min ' + MIN_WORD_LENGTH.toString() + ' chars]';
		this.timeout = 0;
		this.state = {
			icons: [],
			filteredIcons: [],
			word: ''
		}

		this.getList(); // get all data from api
	}

	componentDidMount() {
		this.filterIcons(this.state.word);
	}

	getList = async () => {
		//
	};

	filterIcons(word) {
		this.setState({word: word});

		if (word.length >= MIN_WORD_LENGTH) {
			this.setState({filteredIcons: []});
			let filteredIcons = [];

			this.state.icons.forEach((item) => {
				if (item.title.toLocaleLowerCase().search(this.state.word.toLocaleLowerCase()) !== -1) {
					filteredIcons.push(item);
				}
			});

			this.setState({filteredIcons: filteredIcons});
		} else {
			this.setState({filteredIcons: this.state.icons});
		}
	}

	changeWord = (e) => {
		e.preventDefault();
		let word = e.target.value;

		if(this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.filterIcons(word);
		}, 300);
	}

	reload(){
		window.location.reload();
	}

	render() {
		return (
			<React.Fragment>
				<div className="App">
					<div className='header'>
						<div className='main-title'>
							<span 
								title='icon-screenshots'
								className='title-text'
								onClick={this.reload}
							>icons</span>
						</div>

						<div className='icon-search'>
							<input
								className='word' 
								type='search' 
								name='word' 
								id='word'
								placeholder={this.placeholder}
								onChange={this.changeWord}
							/>
						</div>
					</div>

					<div className='icons'>
						{this.state.filteredIcons.map((item) => (
							<iconWidget
								key={item.alias}
								icon={item}
							/>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

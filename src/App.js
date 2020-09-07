import React from 'react';
import * as cfg from './components/config';
import icons from './components/icons';
import IconWidget from './components/icon-widget';
import '../src/styles/App.scss';

class App extends React.Component {
	constructor(props, word) {
		super(props);
		this.timeout = 0;
		this.state = {
			icons: icons,
			filteredIcons: icons,
			word: ''
		}
	}

	componentDidMount() {
		this.filterIcons(this.state.word);
	}

	filterIcons(word) {
		this.setState({word: word});

		if (word.length >= cfg.MIN_WORD_LENGTH) {
			this.setState({filteredIcons: []});
			let filteredIcons = [];

			this.state.icons.forEach((item) => {
				if (item.toLocaleLowerCase().search(this.state.word.toLocaleLowerCase()) !== -1) {
					filteredIcons.push(item);
				}
			});

			this.setState({filteredIcons: filteredIcons});
		} else {
			this.setState({filteredIcons: this.state.icons});
		}

		console.log('number of icons: ', this.state.filteredIcons.length);
	}

	changeWord = (e) => {
		e.preventDefault();
		let word = e.target.value;

		if(this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.filterIcons(word);
		}, 1);
	}

	reload(){
		window.location.reload();
	}

	render() {
		return (
			<React.Fragment>
				<div className="App">
					<div className='icon-search'>
						<input
							className='word' 
							type='search' 
							name='word' 
							id='word'
							placeholder={cfg.PLACEHOLDER}
							onChange={this.changeWord}
						/>
					</div>
					
					<div className='icons'>
						{this.state.filteredIcons.map((item) => (
							<IconWidget
								icon={item}
								key={item}
							/>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

import React, { Component } from 'react';

class News extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: [],
			// know when the item is loaded from the API
			loading: true
		};
	}

	// renders once
	async componentDidMount() {
		let url ='https://newsapi.org/v2/sources?apiKey=ffa4ba652a7349d6a1f2984547f01598';
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.sources);
		this.setState({ news: data.sources, loading: false });
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.news ? (
					<div>Loading...</div>
				) : (
					<div>
						{this.state.news.map(data => (
              <ul>
                <li key={data.id}>{data.name}</li>
              </ul>
            ))}
					</div>
				)}
			</div>
		);
	}
}

export default News;

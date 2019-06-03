import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateArticles } from '../store/actions';
class Headlines extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: true
		};
	}

	async componentDidMount() {
		let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ffa4ba652a7349d6a1f2984547f01598';
		const response = await fetch(url);
		const data = await response.json();
    console.log(data.articles[0]);
    this.props.updateArticles(data.articles);
		this.setState({ articles: data.articles, loading: false });
	}

	render() {
    const {  loading } = this.state;
    const { articles }= this.state
		return (
			<div className="headlines">
				<h2 className="headlines__text">Top Headlines</h2>
				{loading || !articles ? (
					<h2>Loading...</h2>
				) : (
					articles.map((article) => (
						<div className="headlines__card">
							<img className="headlines__card-image" src={article.urlToImage} alt="" />
							<div className="headlines__content">
								<h5 className="headlines__heading">{article.title}</h5>
								<p className="headlines__news">{article.description}</p>
								<p className="headlines__source">Source: {article.source.name}</p>
								<div className="headlines__footer">
									<a className="headlines__footer-link" href={article.url}>
										View More
									</a>
									<span className="headlines__footer-icon">Star Icon</span>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state.articles;
}



export default connect(mapStateToProps, { updateArticles })(Headlines);

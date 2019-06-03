import React, { Component } from 'react';
import { updateArticles } from '../store/actions';
import { connect } from 'react-redux';

class Sources extends Component {
	constructor(props) {
		super(props);
		this.state = {
      sources: [],
      articles: [],
      loading: true,
      sourceId: ''
		};
  }
  
   async handleClick (sourceId)  {
    let url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=ffa4ba652a7349d6a1f2984547f01598`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ sources: data.articles, loading: false });
    this.props.updateArticles(data.articles);
    console.log(response);
    
  }

  

	// renders once
	async componentDidMount() {
		let url = 'https://newsapi.org/v2/sources?apiKey=ffa4ba652a7349d6a1f2984547f01598';
		const response = await fetch(url);
		const data = await response.json();
    this.setState({ sources: data.sources, loading: false });
    console.log(response); 
  }
  
  // 
	render() {
		const { sources } = this.state;
		return (
			<div className="sources">
				<h2 className="sources__heading"> Sources Filter</h2>
				<select name="sources" id="sources" className="sources__select">
					{this.state.loading || !this.state.sources ? (
						<option className="sources__option" value="">
							Select a source
						</option>
					) : (
						sources.map((source) => (
							<option className="sources__option" onClick={()=>this.handleClick(source.id)} value={({sourceId: source.id})}>
								{source.name}
							</option>
						))
					)}
				</select>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state.articles;
}


export default connect(mapStateToProps,{updateArticles})(Sources);

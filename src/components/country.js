import React, { Component } from 'react';

class Country extends Component {

	render() {
		return (
			<div className="country">
				<h2 className="country__select"> Country Filter</h2>
				<ul className="country__list">
					<li className="country__item"><a href="/" title="at" className="country__item-link">Austria</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="au">Australia</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="br">Brazil</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="ca">Canada</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="ch">Switzerland</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="cn">China</a></li>
          <li className="country__item"><a href="/"  className="country__item-link" title="de">Germany</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="my">Malaysia</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="ng">Nigeria</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="nl">Netherlands</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="in">India</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="no">Norway</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="ng">Nigeria</a></li>
          <li className="country__item"><a href="/"  className="country__item-link"  title="sa">Saudi Arabia</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="gb">United Kingdom</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="us">United States</a></li>
					<li className="country__item"><a href="/"  className="country__item-link"  title="ae">UAE</a></li>
					<li className="country__item"><a href="/"  className="country__item-link" title="za">South Africa</a></li>
				</ul>
			</div>
		);
	}
}

export default Country;

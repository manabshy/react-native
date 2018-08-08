"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>Welcome to NCSC</h1>
				<p>The NCSC was set up to help protect our critical services from cyber attacks, managing major incidents and improve the underlying security of the UK Internet through technological improvement and advice to citizens and organisations. Our vision is to help make the UK the safest place to live and do business online.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;
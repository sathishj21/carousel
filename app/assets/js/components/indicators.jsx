var
	React = require('react');

module.exports = React.createClass({
	handleClick: function(event) {
		this.props.whenClicked(event.target.getAttribute('data-slide-to'));		
	},
	render: function () {
		var itemIndicator = this.props.data.items.map(function(item, index){
			return <li key={index} onClick={this.handleClick} data-slide-to={index} className={index == this.props.setActive ? "active" : ""}></li>
		}.bind(this));

		return (
			<ol className="carousel-indicators">
	      		{itemIndicator}
			</ol>
		)
	}
});
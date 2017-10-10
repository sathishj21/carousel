var
	React = require('react');

module.exports = React.createClass({
	handleClick: function(event) {
		event.preventDefault();	
		this.props.whenClicked(event.target.getAttribute('data-slide'));			
	},
	render: function() {
		return (
			<a href="#" onClick={this.handleClick}  data-slide={this.props.arrowType}>
				<div className={"control-" + this.props.arrowDir} data-slide={this.props.arrowType}>
		      		<span className={"glyphicon glyphicon-chevron-" + this.props.arrowDir} aria-hidden="true" data-slide={this.props.arrowType}></span>
		      		<span className="sr-only">{this.props.arrowDesc}</span>
		      	</div>
			</a>
		)
	}
});
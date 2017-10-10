var
	React = require('react');

module.exports = React.createClass({
	render: function() {
		var dataItems = this.props.data.items.map(function(item, index){
			return <div key={index} className={"item" + (index == this.props.setActive ? " active" : "")}>
				<img src={item.img} />
				<div className="carousel-caption">
			        <h3>{item.caption}</h3>
			    </div>
			</div>
		}.bind(this));

		return (
				<div className="carouselWrapper">
				<div className="carouselInner" style={{marginLeft:+("-"+this.props.setScroll)+"px"}} role="listbox">
					{dataItems}			
			    </div>
			</div>
		)
	}
});
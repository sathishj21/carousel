var
	React = require('react'),
	Indicators = require('./indicators.jsx'),
	Items = require('./items.jsx'),
	Controls = require('./controls.jsx');

var Carousel = React.createClass({
	getInitialState: function(){
		return {
			activeItem: 0,
			width: window.outerWidth,
			scroll: 0
		}
	},
	handleSlide: function(itemIndex) {
		var 
			itemLength = this.props.data.items.length,
		 	activeSlide = this.state.activeItem,
		 	activeIndex = 0;

		if(itemIndex == "prev"){ activeIndex = (((activeSlide + itemLength) - 1) % itemLength);	}
		if(itemIndex == "next") { activeIndex = ((this.state.activeItem + 1) % itemLength); }
		if(parseInt(itemIndex) >= 0) { activeIndex = parseInt(itemIndex); }

		this.setState({
			activeItem : activeIndex,
			scroll: (this.state.width * activeIndex)
		});	

	},
	componentDidMount :function(){ 	
        this.setState({ width : React.findDOMNode(this.refs.carouselSlider).offsetWidth });
    },
	render: function() {
		return (
			<div ref="carouselSlider" className="carouselSlider">				
				<Indicators data={this.props.data} setActive={this.state.activeItem} whenClicked={this.handleSlide} />
				<Items data={this.props.data} setActive={this.state.activeItem} setScroll={this.state.scroll} setWidth={this.state.width} />
				<Controls arrowDir="left" arrowType="prev" arrowDesc="Previous" whenClicked={this.handleSlide} />
				<Controls arrowDir="right" arrowType="next" arrowDesc="Next" whenClicked={this.handleSlide} />
			</div>
		)
	}
});

module.exports = Carousel;
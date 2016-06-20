import React, {
	Component
}
from 'react';

import Book from '../paper/book';


export default class Home extends Component {

	render() {

		return (
			<div id="fullpage">			
				<div className="section">Slide1</div>
				<div className="section">Slide2</div>
				<div className="section">Slide3</div>
				<div className="section">Slide4
				<Book />

				</div>
			</div>
		);
	}

	componentDidMount() {

		$(document).ready(function() {
			$('#fullpage').fullpage({
				//Navigation
				menu: '#menu',
				lockAnchors: false,
				anchors: ['11111', '22222', '3333', '44444'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['firstSlide', 'secondSlide', '3333333', '444444'],
				showActiveTooltip: false,
				slidesNavigation: true,
				slidesNavPosition: 'bottom',

				//Scrolling
				css3: true,
				scrollingSpeed: 1200,
				autoScrolling: true,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//Design
				controlArrows: true,
				verticalCentered: true,
				resize: false,
				sectionsColor: ['', 'green', 'orange', 'gray'],
				paddingTop: '100px',
				paddingBottom: '100px',
				fixedElements: '.header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				//events
				onLeave: function(index, nextIndex, direction) {},
				afterLoad: function(anchorLink, index) {},
				afterRender: function() {},
				afterResize: function() {},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
			});
		});
	}



}
import React, {
	Component
}
from 'react';

import Book from '../paper/book';

import HomeCard from './home-card';


export default class Home extends Component {

	render() {
		let styles = {
			margin: '0 auto',
			maxWidth: '1000px'
		};

		return (
			<div id="fullpage">			
				<div className="section section1" >
				<p>6666666666666</p>
				<div style={styles}>


				<HomeCard
		     		heading="users"
                    route="/users"
                    img="images/get-started.svg"
                    firstChild={true}/>
                <HomeCard
		     		heading="login"
                    route="/users/login"
                    img="images/get-started.svg"
                    />
                <HomeCard
		     		heading="register"
                    route="/users/register"
                    img="images/get-started.svg"
                    lastChild={true}/>
                </div>

				</div>
				<div className="section section2">
				<h2>Slide2</h2>

				</div>
				<div className="section section3">Slide3</div>
				<div className="section section4">Slide4
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
				scrollingSpeed: 900,
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
				sectionsColor: ['gray', 'green', 'orange', 'gray'],
				paddingTop: '100px',
				paddingBottom: '100px',
				fixedElements: '.header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				//events
				onLeave: function(index, nextIndex, direction) {
					switch (index) {
						case 1:
							// move('.section1 div').scale(1.5).duration('2s').scale(1.1).duration('2s').end();
							move('.section1 div').add('margin-left', 250).end();
							move('.section1 p').set('margin-left', '1%').duration('1s').end();

							// move('.section1 div').scale(1).duration('1s').end();

							break;
						case 2:
							// move('.section1 div').scale(1.5).end();
							move('.section2 h2').sub('margin-top', 100).duration('1s').end();

							break;
						case 3:
							// move('.section2 h2').sub('margin-left', 200).duration('1s').end();
							break;
						case 4:
							break;
						default:
							break;

					}
				},
				afterLoad: function(anchorLink, index) {
					switch (index) {
						case 1:
							// move('.section1 div').scale(1.5).duration('2s').scale(1.1).duration('2s').end();
							move('.section1 div').add('margin-left', 250).duration('1s').end();
							move('.section1 p').set('margin-left', '50%').duration('1s').end();

							// move('.section1 div').scale(1).duration('1s').end();

							break;
						case 2:
							// move('.section1 div').scale(1.5).end();
							move('.section2 h2').add('margin-top', 100).duration('1s').end();

							break;
						case 3:
							// move('.section2 h2').add('margin-left', 200).duration('1s').end();
							break;
						case 4:
							break;
						default:
							break;

					}

				},
				afterRender: function() {},
				afterResize: function() {},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

				}
			});
		});
	}

	componentWillUnmount() {
		$.fn.fullpage.destroy('all');
	}



}
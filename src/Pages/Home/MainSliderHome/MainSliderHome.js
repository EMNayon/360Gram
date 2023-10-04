import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MainSliderHome.css';
import sliderImage1 from '../../../assets/images/backgrounds/slider-3-shape-1.jpg';
import sliderImage2 from '../../../assets/images/backgrounds/slider-3-shape-2.jpg';
import sliderImage3 from '../../../assets/images/backgrounds/slider-3-shape-3.jpg';

import sliderShape1 from '../../../assets/images/shapes/slider-3-shape-1.png';
import sliderShape2 from '../../../assets/images/shapes/slider-3-shape-2.png';
import sliderShape3 from '../../../assets/images/shapes/slider-3-shape-3.png';
import { Link } from 'react-router-dom';
// import { hover } from "@testing-library/user-event/dist/hover";
 
const MainSliderHome = () => {
	const Image1 = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage1})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '100%', // Width set korte chaile
		height: '540px', // Height set korte chaile
	};

	const Image2 = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage2})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '100%', // Width set korte chaile
		height: '540px', // Height set korte chaile
	};

	const Image3 = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage3})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '100%', // Width set korte chaile
		height: '540px', // Height set korte chaile
	};
	const divStyle1 = {
		backgroundImage: `url(${sliderShape1})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '10%', // Width set korte chaile
		height: '100%', // Height set korte chaile
	};

	const divStyle2 = {
		backgroundImage: `url(${sliderShape2})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '100%', // Width set korte chaile
		height: '100%', // Height set korte chaile
	};

	const divStyle3 = {
		backgroundImage: `url(${sliderShape3})`,
		backgroundSize: 'cover', // Image size set korte chaile
		backgroundRepeat: 'no-repeat', // Image repeat korte chaile
		width: '100%', // Width set korte chaile
		height: '100%', // Height set korte chaile
	};
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				// ssr={false} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				// autoPlaySpeed={2000}
				keyBoardControl={true}
				customTransition='all .5'
				transitionDuration={100}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}
				//   deviceType={this.props.deviceType}
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
				className='-z-0 parent-container'
			>
				<div className='grid grid-cols-12 '>
					<div className='col-span-6 bg-black text-white '>
						<div className='absolute transform -translate-y-1/2 left-24 top-1/2 parent-container-text'>
							<h2 className=' text-2xl text-white'>
								WELCOME TO CREATIVE AGENCY0
							</h2>
							<br />
							<h2 className='text-6xl text-white py-12 '>
								WE'ARE <br /> DEGITAL <br /> MARKETING <br /> AGENCY0
							</h2>
							<Link to='/about-us'>DISCOVER MORE</Link>
						</div>
					</div>
					<div
						className='absolute transform -translate-y-1/2 left-[650px] top-0'
						style={divStyle1}
					></div>
					<div
						className='absolute bottom-0 left-[-520px] z-20 absolute1'
						style={divStyle2}
					></div>
					<div
						className='absolute bottom-0 left-[-540px]  absolute1'
						style={divStyle3}
					></div>

					<div
						className='col-span-6 bg-black text-white parent-container-image'
						style={Image1}
					></div>
				</div>

				<div className='grid grid-cols-12'>
					<div className='col-span-6 bg-black text-white'>
						<div className='absolute transform -translate-y-1/2 left-24 top-1/2  '>
							<h2 className=' text-2xl text-white'>
								WELCOME TO CREATIVE AGENCY1
							</h2>
							<br />
							<h2 className='text-6xl text-white py-12'>
								WE'ARE <br /> DEGITAL <br /> MARKETING <br /> AGENCY1
							</h2>
							<Link to='/about-us'>DISCOVER MORE</Link>
						</div>
					</div>
					<div
						className='absolute transform -translate-y-1/2 left-[650px] top-0'
						style={divStyle1}
					></div>
					<div
						className='absolute bottom-0 left-[-520px] z-20 absolute1'
						style={divStyle2}
					></div>
					<div
						className='absolute bottom-0 left-[-540px]  absolute1'
						style={divStyle3}
					></div>

					<div className='col-span-6 bg-black text-white' style={Image2}></div>
				</div>

				<div className='grid grid-cols-12  '>
					<div className='col-span-6 bg-black text-white'>
						<div className='absolute transform -translate-y-1/2 left-24 top-1/2 '>
							<h2 className=' text-2xl text-white'>
								WELCOME TO CREATIVE AGENCY2
							</h2>
							<br />
							<h2 className='text-6xl text-white py-12'>
								WE'ARE <br /> DEGITAL <br /> MARKETING <br /> AGENCY2
							</h2>
							<Link to='/about-us'>DISCOVER MORE</Link>
						</div>
					</div>
					<div
						className='absolute transform -translate-y-1/2 left-[650px] top-0'
						style={divStyle1}
					></div>
					<div
						className='absolute bottom-0 left-[-520px] z-20 absolute1'
						style={divStyle2}
					></div>
					<div
						className='absolute bottom-0 left-[-540px]  absolute1'
						style={divStyle3}
					></div>

					<div className='col-span-6 bg-black text-white' style={Image3}></div>
				</div>
			</Carousel>
		</div>
	);
};

export default MainSliderHome;

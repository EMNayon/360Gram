import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretRight, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/images/360-removebg-preview.png';
import { RxCross2 } from 'react-icons/rx';
// import {AiFillCaretRight} from 'react-icons/ai'
import './Header.css';

const serviceStyle = {
	':hover': {
		backgroundColor: '#ed0a77',
		cursor: 'pointer',
		color: 'white',
	},
};

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const jsonData = [
		{ path: '/graphics', title: 'Graphics Design', id: 1 },
		{ path: '/website-design', title: 'UI/UX Design', id: 2 },
		{ path: '/content-creation', title: 'Content', id: 3 },
		{ path: '/social-market', title: 'Social Media Advertisment', id: 4 },
		{ path: '/seo-content', title: 'Searce Engine Optimization (SEO)', id: 5 },
		{ path: '/email-marketing', title: 'Email Marketing', id: 6 },
		{ path: '/website-dev', title: 'Website Developement And Design', id: 7 },
		{ path: '/mobile-app', title: 'Mobile Application', id: 8 },
	];

	const [activeMenuItemId, setActiveMenuItemId] = useState(null);

	const handleMenuItemHover = (id) => {
		setActiveMenuItemId(id);
	};

	const handleMenuItemLeave = () => {
		setActiveMenuItemId(null);
	};
	const handleMenuItemClick = () => {
		setActiveMenuItemId(null);
	};

	return (
		<header className='bg-black text-white  shadow py-4  sticky top-0 z-50 '>
			<div className='flex items-center justify-between'>
				<img src={logo} alt='Company Logo' className='h-14 w-28' />

				<div className='hidden md:block lg:block'>
					<div
						className='space-x-10 px-12 active:border-white'
						style={{ display: 'flex', alignItems: 'center' }}
					>
						<Link
							to='/'
							className='text-color p-1 rounded  active:border-white active:text-black'
						>
							HOME
						</Link>

						<div>
							<ul className='about-menu'>
								<li
									tabIndex={0}
									className='m-1  hover:bg-black p-1 text-color  rounded'
								>
									ABOUT
									<ul tabIndex={0} className='text-color'>
										<li className='flex justify-between sublinks'>
											<Link to='/about-us'>
												<span>ABOUT US</span>{' '}
											</Link>
										</li>

										<li className='flex sublinks'>
											<Link to='/our-team' className=''>
												<span>Our Team</span>{' '}
											</Link>
										</li>

										<li className='flex   sublinks'>
											<Link to='/mison-vison' className=''>
												<span>Misson/Vision</span>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div>
							<ul className='service-menu'>
								<li className='m-1 text-white  text-color  p-1 rounded text-color '>
									SERVICE
									<ul tabIndex={0} className='text-color '>
										{jsonData.map((data) => (
											<li key={data.id} className='text-color sublinks'>
												<label className=''>
													<Link
														to={data.path}
														className='flex justify-between items-center '
													>
														<span>{data.title}</span>
													</Link>
												</label>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
						{/* <ul className='  animation-menu'>
							<li
								tabIndex={0}
								className='m-1 text-white  text-color  p-1 rounded text-color '
							>
								<span>SERVICES</span>
								<ul
									tabIndex={0}
									className='dropdown-content z-[1] menu bg-white hover:bg-black '
								>
									{jsonData.map((data) => (
										<li
											key={data.id}
											className='dropdown relative'
											onMouseEnter={() => handleMenuItemHover(data.id)}
											onMouseLeave={handleMenuItemLeave}
											onClick={handleMenuItemClick}
										>
											<label className=' md:w-60  text-black sublinks'>
												<Link
													to={data.path}
													className='flex justify-between items-center '
												>
													<span>{data.title}</span>
												</Link>
												<span style={{ marginLeft: 'auto' }}>
													{activeMenuItemId === data.id && <AiFillCaretRight />}
												</span>
											</label>
										</li>
									))}
								</ul>
							</li>
						</ul> */}

						{/* service  */}

						<Link to='/portfolio' className=' text-color p-1 rounded'>
							PORTFOLIO
						</Link>
						<Link to='/carrer' className=' text-color p-1 rounded'>
							CAREER
						</Link>
						<Link to='/blog' className=' text-color  p-1 rounded'>
							BLOG
						</Link>
						<Link to='/contact' className=' text-color  p-1 rounded'>
							CONTACT
						</Link>
					</div>
				</div>

				<div className=' md:hidden'>
					<button
						className='text-red-700 text-3xl mr-5 focus:outline-none'
						onClick={toggleMenu}
					>
						{showMenu ? <RxCross2 /> : <AiOutlineMenu />}
					</button>
				</div>
			</div>
			{/* Dropdown menu */}
			{showMenu && (
				<div
					className={`absolute left-0 w-full transform transition-transform duration-500 ${
						showMenu ? 'translate-x-0' : '-translate-x-full'
					} md:hidden`}
				>
					<div className='bg-white text-black flex flex-col w-full '>
						<Link to='/' className=''>
							HOME
						</Link>
						<div className='dropdown '>
							<label tabIndex={0} className=''>
								ABOUT
							</label>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] menu bg-white text-black hover:bg-red-300  w-full'
							>
								<Link to='/about-us' className=''>
									<li className=' border-1 hover:bg-black'>
										<span className='justify-between'>
											ABOUT US <AiFillCaretRight />
										</span>
									</li>
								</Link>
								<Link to='/our-team' className=''>
									<li className='flex hover:bg-black border-1'>
										<span className='justify-between'>
											OUR TEAM <AiFillCaretRight />
										</span>
									</li>
								</Link>

								<Link to='/mison-vison' className=''>
									<li className='flex hover:bg-black border-1'>
										<span className='justify-between'>
											MISSION/VISION <AiFillCaretRight />
										</span>
									</li>
								</Link>
							</ul>
						</div>

						<div className='dropdown dropdown-hover '>
							<label tabIndex={0} className=' text-black hover:text-slate-950 '>
								SERVICES
							</label>
							<ul
								tabIndex={0}
								className=' dropdown-content z-[1] menu bg-white mbMenu '
							>
								{jsonData.map((data) => (
									<li
										key={data.id}
										className='dropdown relative '
										// onMouseEnter={() => handleMenuItemHover(data.id)}
										// onMouseLeave={handleMenuItemLeave}
									>
										<label className='  md:w-60   text-black  hover:bg-slate-950 hover:text-white'>
											<Link
												to={data.path}
												className='flex hover:bg-black md:p-1 hover:text-white justify-between items-center w-full'
											>
												{data.title}
												{activeMenuItemId === data.id && (
													<AiFillCaretRight className='ml-5' />
												)}
											</Link>
										</label>
									</li>
								))}
							</ul>
						</div>

						<Link to='/portfolio' className=''>
							PORTFOLIO
						</Link>
						<Link to='/carrer' className=''>
							CAREER
						</Link>
						<Link to='/contact' className=''>
							CONTACT
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;

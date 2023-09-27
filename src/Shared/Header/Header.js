import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/360-removebg-preview.png";
import {RxCross2} from 'react-icons/rx'
// import {AiFillCaretRight} from 'react-icons/ai'
import "./Header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const jsonData = [
    {path: "/graphics", title: "GRAPHICS DESIGN",  id: 1, },
    { path: "/website-design", title: "UI/UX DESIGN", id: 2 },
    { path: "/content-creation", title: "CONTENT CREATION", id: 3 },
    { path: "/social-market", title: "SOCIAL MEDIA ADVERTISING", id: 4 },
    {path: "/seo-content", title: "SEARC ENGINE OPTIMIZATION (SEO)",  id: 5 },
    {path: "/email-marketing", title: "EMAIL MARKETING",  id: 6 },
    { path: "/website-dev", title: "WEBSITE DEVELOPMENT AND DESIGN", id: 7 },
    { path: "/mobile-app", title: "MOBILE APPLICATION", id: 8 },

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
    <header className="bg-black text-white  shadow py-4  sticky top-0 z-50 ">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Company Logo" className="h-14 w-28" />

        <div className="hidden md:block lg:block">
          <div className="space-x-10 px-12 active:border-white">
            <Link
              to="/"
              className="text-color p-1 rounded  active:border-white active:text-black"
            >
              HOME
            </Link>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="m-1  hover:bg-black p-1 text-color  rounded"
              >
                ABOUT
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-white text-black hover:bg-red-300  w-60"
              >
                <Link
                  to="/about-us"
                  className=""
                >
                  <li className="flex hover:bg-black">
                     <span>ABOUT US <AiFillCaretRight  /></span>
                  </li>
                </Link>
                <Link
                  to="/our-team"
                  className=""
                >
                  <li className="flex hover:bg-black">
                     <span>Our Team <AiFillCaretRight  /></span>
                  </li>
                </Link>

                <Link
                  to="/mison-vison"
                  className=""
                >
                  <li className="flex hover:bg-black">
                     <span>Misson/Vision <AiFillCaretRight  /></span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="m-1 text-white  text-color  p-1 rounded"
              >
                SERVICES
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-white hover:bg-black"
              >
                {jsonData.map((data) => (
                  <li
                    key={data.id}
                    className="dropdown relative"
                    onMouseEnter={() => handleMenuItemHover(data.id)}
                    onMouseLeave={handleMenuItemLeave}
                    onClick={handleMenuItemClick}
                  >
                    <label className=" md:w-60  text-black  hover:bg-slate-950 hover:text-white">
                      <Link to={data.path} className="flex hover:bg-black md:p-1 hover:text-white justify-between items-center">
                        {data.title}
                        {activeMenuItemId === data.id && (
                          <AiFillCaretRight className="ml-5" />
                        )}
                      </Link>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/portfolio"
              className=" text-color p-1 rounded"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/carrer"
              className=" text-color p-1 rounded"
            >
              CAREER
            </Link>
            <Link
              to="/blog"
              className=" text-color  p-1 rounded"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className=" text-color  p-1 rounded"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className=" md:hidden">
          <button
            className="text-red-700 text-3xl mr-5 focus:outline-none"
            onClick={toggleMenu}
          >
           {showMenu ? (<RxCross2/>) :( <AiOutlineMenu />)}
          </button>
        </div>
      </div>
      {/* Dropdown menu */}
      {showMenu && (
        <div className={`absolute left-0 w-full transform transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}>
          <div className="bg-white text-black flex flex-col w-full ">
            <Link to="/" className="">
              HOME
            </Link>
            <div className="dropdown ">
              <label
                tabIndex={0}
                className=""
              >
                ABOUT
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-white text-black hover:bg-red-300  w-full"
              >
                <Link
                  to="/about-us"
                  className=""
                >
                  <li className=" border-1 hover:bg-black">
                     <span className="justify-between">ABOUT US <AiFillCaretRight  /></span>
                  </li>
                </Link>
                <Link
                  to="/our-team"
                  className=""
                >
                  <li className="flex hover:bg-black border-1">
                     <span className="justify-between">OUR TEAM <AiFillCaretRight  /></span>
                  </li>
                </Link>

                <Link
                  to="/mison-vison"
                  className=""
                >
                  <li className="flex hover:bg-black border-1">
                     <span className="justify-between">MISSION/VISION <AiFillCaretRight  /></span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className=" text-black hover:text-slate-950 "
              >
                SERVICES
              </label>
              <ul
                tabIndex={0}
                className=" dropdown-content z-[1] menu bg-white mbMenu "
              >
                {jsonData.map((data) => (
                  <li
                    key={data.id}
                    className="dropdown relative "
                    onMouseEnter={() => handleMenuItemHover(data.id)}
                    onMouseLeave={handleMenuItemLeave}
                  >
                    <label className="  md:w-60   text-black  hover:bg-slate-950 hover:text-white">
                      <Link to={data.path} className="flex hover:bg-black md:p-1 hover:text-white justify-between items-center w-full">
                        {data.title}
                        {activeMenuItemId === data.id && (
                          <AiFillCaretRight className="ml-5" />
                        )}
                      </Link>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/portfolio" className="">
              PORTFOLIO
            </Link>
            <Link to="/carrer" className="">
              CAREER
            </Link>
            <Link to="/contact" className="">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

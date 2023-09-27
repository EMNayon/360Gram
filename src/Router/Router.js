import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
// import AboutUs from "../Pages/About/AboutUs/AboutUs";
import AboutUs from "../Pages/About/AboutUs/AboutUs";
import Team from "../Pages/OurTeam/Team/Team";
import Portfolio from "../Pages/Portfolio/Portfolio/Portfolio";
import Career from "../Pages/Career/Career/Career";
import Blog from "../Pages/Blog/Blog/Blog";
import Contact from "../Pages/Contact/Contact/Contact";
import WebsiteDesiging from "../Pages/Services/WebsiteDesiging/WebsiteDesiging/WebsiteDesiging";
import WebsiteDv from "../Pages/Services/WebsiteDv/WebsiteDv/WebsiteDv";
import MoblieApplication from "../Pages/Services/MobileApplication/MobileApplication/MoblieApplication";
import DigitalMarketing from "../Pages/Services/DigitalMarketing/DigitalMarketing/DigitalMarketing";
import SocailMarketing from "../Pages/Services/SocialMarketing/SocialMarketing/SocailMarketing";
import SeoContentW from "../Pages/Services/SeoContentW/SeoContentW/SeoContentW";
import GraphicsDesign from "../Pages/Services/GraphicsDesign/GraphicsDesign/GraphicsDesign";
import EmailMarketing from "../Pages/Services/EmailMarketing/EmailMarketing/EmailMarketing";
import MisonVison from "../Pages/About/MisionVison/MisionVison/MisonVison";
import Faq from "../Pages/Faq/Faq/Faq";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/mison-vison',
                element: <MisonVison/>
            },
            {
                path: '/graphics',
                element: <GraphicsDesign></GraphicsDesign>
            },
            {
                path:'/email-marketing',
                element: <EmailMarketing/>
            },
            {
                path: '/website-design',
                element: <WebsiteDesiging></WebsiteDesiging>
            },
            {
                path: '/website-dev',
                element: <WebsiteDv></WebsiteDv>
            },
            {
                path: '/mobile-app',
                element: <MoblieApplication></MoblieApplication>
            },
            {
                path: '/content-creation',
                element: <DigitalMarketing></DigitalMarketing>
            },
            {
                path: '/social-market',
                element: <SocailMarketing></SocailMarketing>
            },
            {
                path: '/seo-content',
                element: <SeoContentW></SeoContentW>
            },
            {
                path: '/our-team',
                element: <Team></Team>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/carrer',
                element: <Career></Career>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])

export default router;
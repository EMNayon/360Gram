// import React, { useEffect } from 'react';
import Agency from '../Agency/Agency';
import ServicesOne from '../ServicesOne/ServicesOne';
import Feature from '../Feature/Feature';
import OurServices from '../OurServices/OurServices';
import MainSliderHome from '../MainSliderHome/MainSliderHome';
import NisozSolution from '../NisozSolution/NisozSolution';
import BuisnessFeature from '../BuisnessFeature/BuisnessFeature';
import PortfolioOne from '../PortfolioOne/PortfolioOne';
import AgencyBenifits from '../AgencyBenifits/AgencyBenifits';
import BlogOneHome from '../BlogOneHome/BlogOneHome';
import ContactOneHome from '../ContactOneHome/ContactOneHome';
import { useEffect } from 'react';
// import SliderHome from '../SliderHome/SliderHome';

// import Header from '../../../Shared/Header/Header';

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    return (
        <div >
            {/* <Header/> */}
           <MainSliderHome/>
           {/* <SliderHome/> */}
           <OurServices/>
           <Agency/>
           <ServicesOne/>
           <Feature/>
           <NisozSolution/>
           <BuisnessFeature/>
           <PortfolioOne/>
           <AgencyBenifits/>
           <BlogOneHome isShow={true}/>
           <ContactOneHome/> 
        </div>
    );
};

export default Home;
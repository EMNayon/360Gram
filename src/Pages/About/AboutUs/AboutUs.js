import React, { useEffect } from 'react';
// import Topbar from '../Topbar/Topbar';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutAgency from '../AboutAgency/AboutAgency';
import TestimonialAbout from '../TestimonialAbout/TestimonialAbout';
import NisozSolution from '../../Home/NisozSolution/NisozSolution';
import AgencyBenifits from '../../Home/AgencyBenifits/AgencyBenifits';
import ExperiencedTeam from '../ExperiencedTeam/ExperiencedTeam';
import AboutContact from '../AboutContact/AboutContact';
const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            
            {/* <Topbar/> */}
            <AboutHeader/>
            <AboutAgency isShowMission1={true}/>
            <TestimonialAbout/>
            <NisozSolution/>
            <AgencyBenifits/>
            <ExperiencedTeam isShow={true}/>
            <AboutContact/>
        </div>
    );
};

export default AboutUs;
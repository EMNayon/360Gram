import React, { useEffect } from 'react';
import SocialMarketingHeader from '../SocailMarketingHeader/SocialMarketingHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const SocailMarketing = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <SocialMarketingHeader></SocialMarketingHeader>
            <ServicesAll isShowTitle4={true}></ServicesAll>
        </div>
    );
};

export default SocailMarketing;
import React, { useEffect } from 'react';
import DigitalMarketingHeader from '../DigitalMarketingHeader/DigitalMarketingHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const DigitalMarketing = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <DigitalMarketingHeader></DigitalMarketingHeader>
            <ServicesAll isShowTitle3={true}></ServicesAll>
        </div>
    );
};

export default DigitalMarketing;
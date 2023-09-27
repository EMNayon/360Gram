import React, { useEffect } from 'react';
import SeoContentHeader from '../SeoContentHeader/SeoContentHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const SeoContentW = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <SeoContentHeader></SeoContentHeader>
            <ServicesAll isShowTitle5={true}></ServicesAll>
        </div>
    );
};

export default SeoContentW;
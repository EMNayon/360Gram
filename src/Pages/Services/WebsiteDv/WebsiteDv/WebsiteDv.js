import React, { useEffect } from 'react';
import WebsiteDvHeader from '../WebsiteDvHeader/WebsiteDvHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const WebsiteDv = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <WebsiteDvHeader></WebsiteDvHeader>
            <ServicesAll isShowTitle7={true}></ServicesAll>
        </div>
    );
};

export default WebsiteDv;
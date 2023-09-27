import React, { useEffect } from 'react';
import WebsiteDesignHeader from '../WebsiteDesignHeader/WebsiteDesignHeader';
import ServicesAll from '../ServicesAll/ServicesAll';

const WebsiteDesiging = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <WebsiteDesignHeader></WebsiteDesignHeader>
            <ServicesAll isShowTitle2={true}></ServicesAll>
        </div>
    );
};

export default WebsiteDesiging;
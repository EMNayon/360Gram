import React, { useEffect } from 'react';
import MoblieAppHeader from '../MobileAppHeader/MoblieAppHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const MoblieApplication = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <MoblieAppHeader></MoblieAppHeader>
            <ServicesAll isShowTitle8={true}></ServicesAll>
        </div>
    );
};

export default MoblieApplication;
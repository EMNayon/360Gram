import React, { useEffect } from 'react';
import CarrerHeader from '../CareerHeader/CarrerHeader';
import CarrerProductDv from '../CarrerProductDv/CarrerProductDv';


const Career = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
          
            
            <CarrerHeader></CarrerHeader>
            <CarrerProductDv isShow={true}></CarrerProductDv>
        </div>
    );
};

export default Career;
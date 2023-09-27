import React, { useEffect } from 'react';
import FaqHeader from '../FaqHeader/FaqHeader';
import FaqContent from '../FaqContent/FaqContent';

const Faq = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <FaqHeader/>
            <FaqContent/>
        </div>
    );
};

export default Faq;
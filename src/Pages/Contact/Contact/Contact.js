import React, { useEffect } from 'react';
import ContactHeader from '../ContactHeader/ContactHeader';
import CotnactMap from '../ContactMap/CotnactMap';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactUs from '../ContactUs/ContactUs';


const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className='bg-black'>
           
            <ContactHeader></ContactHeader>
            <CotnactMap></CotnactMap>
            <ContactInfo></ContactInfo>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Contact;
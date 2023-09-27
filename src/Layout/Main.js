import React from 'react';
import Header from '../Shared/Header/Header';
 
import Footer from '../Shared/Footer/Footer';
 
import { Outlet } from 'react-router-dom';
 import Topbar from '../Pages/About/Topbar/Topbar';
import CompanyName from '../Shared/360GRAM/CompanyName';
const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
        <Header/>
        <Outlet/>
        <CompanyName/>
        <Footer/>
        </div>
    );
};

export default Main;
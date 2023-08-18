import React from 'react';
import './About_Page.css';
import NavigationBar from '../../Component/Navbar/NavigationBar';
import AboutPageCom1 from './Component1/AboutPageCom1';
import AboutPageCom2 from './Component2/AboutPageCom2';
import AboutPageCom3 from './Component3/AboutPageCom3';
import AboutPageCom4 from './Component4/AboutPageCom4';
import Footer from '../../Component/Footer/Footer';


export default function About_Page() {
    return (
        <>
            <div className="about-page-flex">
                <NavigationBar />
            </div>

            <div className="about-page-component-main-pad">

                <AboutPageCom1 />

                <AboutPageCom2 />

                <AboutPageCom3 />

                <AboutPageCom4 />
            </div>

            <Footer />




        </>
    );
}

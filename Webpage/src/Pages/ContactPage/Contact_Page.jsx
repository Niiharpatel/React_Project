import React from 'react';
import './Contact_Page.css';
import NavigationBar from '../../Component/Navbar/NavigationBar';
import ContactPageCom1 from './Components/Component1/ContactPageCom1';

export default function Contact_Page() {
    return (
        <>
            <div className="bg-color-contactPage">
                <NavigationBar />
            </div>
            

            <ContactPageCom1 />
        </>
    );
}

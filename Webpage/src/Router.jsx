import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Plant from './Pages/Plant/Plant';
import About_Page from './Pages/About_Page/About_Page';
import Contact_Page from './Pages/ContactPage/Contact_Page';
import Error_404 from './Component/Error/Error_404';
import LoginForm from './Pages/Form/LoginForm';
import Auth from './Pages/Auth/Auth';
import NavigationBar from './Component/Navbar/NavigationBar';
import Footer from './Component/Footer/Footer';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Auth>
                    <NavigationBar />
                    <Routes>


                        <Route path='/' element={<Homepage />} />
                        <Route path='/plant' element={<Plant />} />
                        <Route path='/about' element={<About_Page />} />
                        <Route path='/contact' element={<Contact_Page />} />
                        <Route path='/LoginForm' element={<LoginForm />} />
                        <Route path='*' element={<Error_404 />} />

                    </Routes>
                    <Footer />
                </Auth>

            </BrowserRouter>
        </>
    );
}

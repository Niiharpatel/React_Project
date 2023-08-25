import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from './Pages/HomePage/Homepage';
import Plant from './Pages/Plant/Plant';
import About_Page from './Pages/About_Page/About_Page';
import Contact_Page from './Pages/ContactPage/Contact_Page';
import Error_404 from './Component/Error/Error_404';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Homepage />}></Route>
                    <Route path='/plant' element={<Plant />}></Route>
                    <Route path='/about' element={<About_Page />}></Route>
                    <Route path='/contact' element={<Contact_Page />}></Route>
                    <Route path='*' element={<Error_404 />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

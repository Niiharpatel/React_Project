import React, { useState } from 'react';
import './Homepage.css';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "../../Component/Card/Card.css";
import HomeData from './HomeData.json';
import NavigationBar from '../../Component/Navbar/NavigationBar';
import CardStructure from '../../Component/Card/CardStructure';
import TestimonialMap from '../../Component/Testimonial/TestimonialMap';
import Ourstory from '../../Component/OurStory/Ourstory';
import GiftCardCom from '../../Component/GiftCard/GiftCardCom';
import Footer from '../../Component/Footer/Footer';

function Homepage() {

    let [data, setData] = useState(HomeData);

    const navigate = useNavigate();
    return (
        <>

            <div className="main" style={{ top: "0" }}>



                <div className="bg-img">
                    <div className="home-content">
                        <div><h6>WELCOME TO THE STORE</h6></div>
                        <div className="heading1"><h1>Let’s Bring the Spring to</h1></div>
                        <div className="heading2"><h1>Your Home</h1></div>

                        <div className="btn-hompage"><Button onClick={() => navigate("/plant")} variant="light">Shop Now</Button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <WebSlider /> */}


            <div className='card-flex'>
                {

                    data?.map?.((e, i) => {
                        return <CardStructure data={e} key={i} />;


                    })
                }
            </div>

            <Ourstory />


            <TestimonialMap />

            <GiftCardCom />


            {/* <Footer /> */}


        </>
    );
}

export default Homepage;
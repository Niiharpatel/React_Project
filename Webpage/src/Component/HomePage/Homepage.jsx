import React, { useEffect, useState } from 'react'
import './Homepage.css';
import Button from 'react-bootstrap/esm/Button';
import NavigationBar from '../Navbar/NavigationBar';
import CardStructure from '../Card/CardStructure';
import "../Card/Card.css";
import HomeData from './HomeData.json'
import PlantData from '../../Utils/PlantData.json'
import TestimonialMap from '../Testimonial/TestimonialMap';
import Footer from '../Footer/Footer';
import WebSlider from '../Slider/WebSlider';
import Ourstory from '../OurStory/Ourstory';
import GiftCardCom from '../GiftCard/GiftCardCom';

function Homepage() {

    let [data, setData] = useState(HomeData);


    return (
        <>

            <div className="main" style={{ position: "relative" }}>

                <div style={{ position: "absolute", top: "0px", width: "100%" }}>

                    <NavigationBar search={false} />

                </div>

                <div className="bg-img">
                    <div className="home-content">
                        <div><h6>WELCOME TO THE STORE</h6></div>
                        <div className="heading1"><h1>Let’s Bring the Spring to</h1></div>
                        <div className="heading2"><h1>Your Home</h1></div>

                        <div className="btn-hompage">
                            <a href=""><Button variant="light">Shop Now</Button></a>
                        </div>
                    </div>
                </div>

            </div>

            {/* <WebSlider /> */}


            <div className='card-flex'>
                {

                    data?.map?.((e, i) => {
                        return <CardStructure data={e} key={i} />


                    })
                }
            </div>

            <Ourstory />


            <TestimonialMap />

            <GiftCardCom />


            <Footer />


        </>
    )
}

export default Homepage
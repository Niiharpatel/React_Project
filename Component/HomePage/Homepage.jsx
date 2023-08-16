import React from 'react'
import './Homepage.css';
import Button from 'react-bootstrap/esm/Button';
import NavigationBar from '../Navbar/NavigationBar';

function Homepage() {
    return (
        <>

            <div className="main" style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "0px", width: "100%" }}>
                    <NavigationBar />

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
        </>
    )
}

export default Homepage
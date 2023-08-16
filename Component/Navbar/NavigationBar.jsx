import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './NavigatioBar.css';

function NavigationBar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"><a href=""><img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" style={{ width: "70px", height: "72px" }} alt="" /></a></Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">Plant</Nav.Link>
                        <Nav.Link href="#services">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                    <Form inline>
                        <div className="nav-right-content">
                            <div className="box-1">
                                <div className="currency">
                                    <a href=""><i class="fa-solid fa-dollar-sign"></i></a>0.00
                                </div>
                                <div className="cart-icon">
                                    <a href=""><i class="fa-solid fa-cart-shopping"><sup> 0</sup></i></a>
                                </div>
                            </div>
                            <div className="box-2">
                                <input type="text" placeholder='Find your plants here!' />
                            </div>


                        </div>

                    </Form>
                </Container>
            </Navbar>

        </>
    )
}

export default NavigationBar
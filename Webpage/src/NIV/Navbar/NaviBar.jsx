import React from 'react';
import { UserCircle } from 'lucide-react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';

function NaviBar({ setSearchData }) {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"><a href=""><img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" style={{ width: "70px", height: "72px" }} alt="" /></a></Navbar.Brand>

                    <Nav className="me-auto">
                        <a style={{ color: "white", textDecoration: "none" }}>Home</a>
                        <a style={{ color: "white", textDecoration: "none" }}>Plant</a>
                        <a style={{ color: "white", textDecoration: "none" }}>About</a>
                        <a style={{ color: "white", textDecoration: "none" }}>Contact</a>
                    </Nav>


                    <Form >
                        <div className="nav-right-content">
                            <div className="box-1">
                                <div className="currency">
                                    <a href=""><i className="fa-solid fa-dollar-sign"></i></a>0.00
                                </div>
                                <div className="cart-icon">
                                    <a href=""><i className="fa-solid fa-cart-shopping"><sup> 0</sup></i></a>
                                </div>
                            </div>

                            {

                                <div className="box-2">
                                    <input type="text" placeholder='Find Your Plants Here!' onChange={(e) => setSearchData(e?.target?.value)} />
                                </div>
                            }

                            <div className="user-icon">
                                <a href=""><UserCircle size={28} strokeWidth={1.5} /></a>
                            </div>

                        </div>

                    </Form>
                </Container>
            </Navbar >

        </>
    );
}

export default NaviBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './NavigatioBar.css';
import { UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavigationBar({ setSearchText, search }) {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"><a href=""><img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" style={{ width: "70px", height: "72px" }} alt="" /></a></Navbar.Brand>
                    
                    <Nav className="me-auto">
                        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        <Link to={"/plant"} style={{ color: "white", textDecoration: "none" }}>Plant</Link>
                        <Link to={"/about"} style={{ color: "white", textDecoration: "none" }}>About</Link>
                        <Link to={"/contact"} style={{ color: "white", textDecoration: "none" }}>Contact</Link>
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

                            {

                                search && <div className="box-2">
                                    <input type="text" placeholder='Find Your Plants Here!' onChange={(e) => setSearchText(e.target.value)} />
                                </div>
                            }

                            <div className="user-icon">
                                <a href=""><UserCircle size={28} strokeWidth={1.5} /></a>
                            </div>

                        </div>

                    </Form>
                </Container>
            </Navbar>

        </>
    );
}

export default NavigationBar;
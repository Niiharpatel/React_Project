import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-main">
                <div className="footer-bg">
                    <div className="line-1">
                        <li><a href="">Home</a></li>
                        <li><a href="">Plants</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </div>
                    <div className="box-2">
                        <div className="line-2">
                            <h4>Subscribe to our newsletter</h4>
                        </div>
                        <div className="line-3">
                            <div>
                                <input type="text" placeholder='Your email address...' />
                            </div>
                            <div>
                                <button>Subscribe</button>
                            </div>
                        </div>
                        <div className="line-4">
                            <a href=""><i className='fa-brands fa-instagram'></i></a>
                            <a href=""><i className='fa-brands fa-facebook-square'></i></a>
                            <a href=""><i className='fa-brands fa-twitter'></i></a>
                        </div>

                        <div className="footer-bottom">
                            <p className='para'>
                                © 2023 Plant Shop. Powered by Niihar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
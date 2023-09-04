import React from 'react';
import './Ourstory.css';
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../../Pages/Auth/Auth';

function Ourstory() {
    const Navigate = useNavigate();

    let { user } = userAuth();

    function Ourstory() {

        if (!user) {
            Navigate('/alertbox');

        } else {
            Navigate('/about');
        }

    }
    return (
        <>

            <div className="our-story-main">
                <div className="our-story-bg">
                    <div className="our-story-flex">
                        <div className="our-story-leftside">
                            <img src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-story-section-img.jpg" alt="" />
                        </div>
                        <div className="our-story-rightside">
                            <div className="our-story-rightside-content">
                                <div className="line2"><h5>OUR STORY</h5></div>
                                <div className="line3"><h2>For People Who Love Plants</h2></div>
                                <div className="line4"><p>Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.</p></div>
                                <div className="line5">
                                    <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p>
                                </div>
                                <div className="line6"> <button className='our-story-btn' onClick={() => Ourstory()}>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Ourstory;

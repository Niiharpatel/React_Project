import React from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

function CardStructure({ data }) {

    const Navigate = useNavigate();
    return (
        <>
            <div className="Cardmain">

                <img src={data?.img} />

                <div className='card_det'>
                    <div className="inner-det">
                        <h4>{data?.name}</h4>
                        <p className='card-desc3'>{data?.description3}</p>
                        <span className='card-price'>{data?.price}</span>
                        <a onClick={() => Navigate('/plant')}><h6 className='card_det-link'>{data?.link}</h6></a>
                    </div>
                </div>

                <div className="cart-logo">
                    <acronym title="Add to cart"> <a href=""> <i className="fa-solid fa-cart-arrow-down"></i></a></acronym>
                </div>
            </div>
        </>
    );
}

export default CardStructure;

import React from 'react';
import "./Card.css";

function CardStructure(props) {
    return (
        <>

            <div className="Cardmain">

                <img src={props?.cardData?.img} />

                <div className='card_det'>
                    <div className="inner-det">
                        <h4>{props?.cardData?.variety}</h4>
                        <p>{props?.cardData?.Description1}</p>
                        <p>{props?.cardData?.Description2}</p>
                        <a href=""><h6 className='card_det-link'>{props?.cardData?.link}</h6></a>
                    </div>
                </div>

                <div className="cart-logo">
                    <abbr title="Add to cart">
                        <a href=""> <i className="fa-solid fa-cart-arrow-down"></i></a>
                    </abbr>
                </div>
            </div>


        </>
    );
}

export default CardStructure;

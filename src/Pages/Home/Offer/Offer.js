import React from 'react';
import './Offer.css'
const Offer = () => {
    return (
        <div>
            <h2 className='offer'>Hurrah-Offer</h2>
            <div className='offer-section'>
                <div className='left-side'>
                    <img width={450} height={350} src="https://i.ibb.co/zQ1W4yM/offer.jpg" alt="" />
                </div>
                <div className="right-side">
                    <p>A retailer might offer a men's watch for $2,000, meaning that the retailer will sell the watch for that amount. However, a customer might come into the store and offer $1,500 for the watch, meaning that the customer is expressing an interest in buying the watch for that amount</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;
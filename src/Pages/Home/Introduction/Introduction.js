import React from 'react';
import bike from '../../../images/bike.png'
import './Introduction.css';
const Introduction = () => {
    return (
        <div className='main'>
            <div className='left-side'>
                <h1 className='headline'>This is Bike Store.</h1>
                <h2>
                    <p className='paragraph'>
                        This is the best bike house in this city.People can buy different types of stylish good bike in this shop.This Bike house has 3 branch. You can buy any branch. Thank You</p>
                </h2>
                <div data-aos='zoom-in'>
                    <h1 className='thanks'>Thank you</h1>
                </div>
            </div>
            <div className="right-side">
                <img width={500} src={bike} alt="" />
            </div>
        </div>
    );
};

export default Introduction;
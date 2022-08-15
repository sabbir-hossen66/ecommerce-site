import React from 'react';
import Introduction from './Introduction/Introduction';
import Offer from './Offer/Offer';
import Service from './Service/Service';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            <Services></Services>
            <Offer></Offer>
        </div>
    );
};

export default Home;
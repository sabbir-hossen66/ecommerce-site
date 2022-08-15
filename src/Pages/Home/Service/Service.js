import React from 'react';
import '../Service/Service.css';

const Service = ({ service }) => {
    const { name, url, id, price, description } = service
    return (
        <div className='service-container'>
            {/* <h2 className='primary'>Which bike do you want?</h2> */}
            <img width={250} height={200} src={url} alt="" />
            <p>Id: {id}</p>
            <p>Price: {price}</p>
            <h4>Name: {name}</h4>
            <p>{description}</p>
            <a href="/">
                <button className='button-style'>Buy: {name}</button>
            </a>


        </div>
    );
};

export default Service;
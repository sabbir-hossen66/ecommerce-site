import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-info fs-4 mt-5 bg-dark py-5'>

            <p className='text-center '>Copyright © {year}</p>
        </footer >
    );
};

export default Footer;
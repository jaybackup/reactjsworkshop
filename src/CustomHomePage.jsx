import React from 'react';
import Header from './Components/Header.jsx';
import MainBody from './Components/MainBody.jsx';
import Footer from './Components/Footer.jsx';
import Slider from './Components/Slider.jsx';


const CustomHomePage = () => {
    return (
        <>

            <Header />
            <Slider />
            <MainBody />
            <Footer />

        </>
        // <div>

        //     <h2>Jay </h2>
        //     <h2>Amin </h2>
        // </div>
    );
};

export default CustomHomePage;
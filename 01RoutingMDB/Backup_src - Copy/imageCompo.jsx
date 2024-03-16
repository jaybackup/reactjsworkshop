import React from 'react';
import logo from './logo.svg';


const ImageCompo = () => {
    return (
        <div>
            {logo}
            <img src={logo}/>
        </div>
    );
};

export default ImageCompo;
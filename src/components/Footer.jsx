import React from 'react';

var date = new Date();

var currentyear = date.getFullYear();


function Footer(){
    return (
        <footer>
            <p>Copright @ {currentyear}</p>
        </footer>
        
    );
}

export default Footer;
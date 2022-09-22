import React from "react";
import './Header.css'
const link = 'https://docs.google.com/document/d/1t-zEBLlul8pdTlBFJbEtmiuizZPxSQ-vMrY7bUZxc7Q/edit?usp=sharing'

function Header() {
    return (
        <header>
            <h1>COSI 12b Grading</h1>
            <p>By Archer</p>
            <a href={link} target='_blank' rel="noreferrer">Grading rubric</a>
        </header>
    )
}


export default Header;
import React from 'react';
import styles, { layout } from "../styles";
import Footer from './Footer';
import Button from './Button';
import { ourTeam } from '../assets';

const Contributers = () => {
    return (
        <section id="features" className={layout.sectionCol}>
            <img src={ourTeam} alt="Contributers" className="rounded-3xl" />
            <Footer />
        </section>
    )
}

export default Contributers;
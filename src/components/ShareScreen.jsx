import React from 'react';
import { sharescreen } from '../assets';
import styles from '../styles';
import Footer from './Footer';

const ShareScreen = () => {
    return (
        <React.Fragment>
            <section id="home" className={`flex flex-col md:p-[10rem] justify-center items-center ${styles.paddingY}`}>
                <img src={sharescreen} alt="" />
                <p className={styles.paragraph}>We're sorry to inform you that his feature isn't working at the moment, as it requires a paid back-end service to maintain working. This feature was only being used during the creation of our graduation project, and now it's out of service.</p>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default ShareScreen;
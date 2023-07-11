import React, { useState } from 'react';
import styles, { layout } from "../styles";
import Footer from './Footer';
import Button from './Button';

const About = () => {
    const [activeTab, setActiveTab] = useState(false);

    const toggleActiveTab = () => {
        setActiveTab(!activeTab);
    }

    const tabClass = "flex flex-row p-6 rounded-[20px] feature-card mb-5 cursor-pointer m-[1rem]";
    return (
        <section id="features" className={layout.sectionCol}>
            <div className={`${layout.sectionImg} flex`}>
                <div className={activeTab ? `${tabClass}` : `${tabClass} active-tab`} onClick={toggleActiveTab}>
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
                        Presentation
                    </h2>
                </div>

                <div className={activeTab ? `${tabClass} active-tab` : `${tabClass}`} onClick={toggleActiveTab}>
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
                        Book
                    </h2>
                </div>
            </div>

            <div id="Description" className={activeTab ? `hidden ${styles.flexCenter} flex flex-col z-0` : `block ${styles.flexCenter} flex flex-col z-0`}>
                <iframe src="https://onedrive.live.com/embed?resid=317E50C5E6FB11CA%21355&authkey=!AGBRAYQDvqN2wc8&em=2" className='w-[1333px] h-[750px]' frameborder="0" scrolling="no"></iframe>
                <Button link="https://raw.githubusercontent.com/TheHero100/Intelligent-Mobile-Robot-IMR/main/Documentations/v2/IMR%20presentaion%20final.pdf" content="Download Presentation" />
            </div>

            <div id="Specifications" className={activeTab ? `block ${styles.flexCenter} flex flex-col z-0` : `hidden ${styles.flexCenter} flex flex-col z-0`}>
                <iframe src="https://onedrive.live.com/embed?resid=317E50C5E6FB11CA%21353&authkey=!AFs9VS72l3EKxVE&em=2" className='w-[793px] h-[1122px]' frameborder="0" scrolling="no"></iframe>
                <Button link="https://raw.githubusercontent.com/TheHero100/Intelligent-Mobile-Robot-IMR/bb0b1829b285ddb869d8a41f85ae3a66b9649c72/Documentations/v2/IMR%20Final%20Book.pdf" content="Download Book" />
            </div>

            <div className='mt-[10rem]'>
                <Footer />
            </div>
        </section>
    )
}

export default About;
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

            <div id="Description" className={activeTab ? `hidden ${styles.flexCenter} flex flex-col` : `block ${styles.flexCenter} flex flex-col`}>
                <iframe src="https://onedrive.live.com/embed?resid=317E50C5E6FB11CA%21352&authkey=!AMz45dAOsWNpKQ4&em=2" className='w-[1333px] h-[750px]' frameborder="0" scrolling="no"></iframe>
                <Button link="https://public.bn.files.1drv.com/y4mwO7a-O8MA_Jf8NddCVN3_B69Y_PKpBpu2l_lqg-jXIQMUmaRZXlUWuqQ5tQUpICjSyDjPZnGNdEOS2v8wJLi5aW4-beiQzoLXGmAenZihYdouVqZ95-UxULKoYJY10dKrK_--PqFAeOmDAoDMIAZILI-7evmuzSmZJZEI8PTM3kTRwCPKuv-dkICuCjDRPccmiu_09Ysxpw5fNycTZVwxC6KhQjHAQE5J02-c9BCeu4?AVOverride=1" content="Download Presentation" />
            </div>

            <div id="Specifications" className={activeTab ? `block ${styles.flexCenter} flex flex-col` : `hidden ${styles.flexCenter} flex flex-col`}>
                <iframe src="https://onedrive.live.com/embed?resid=317E50C5E6FB11CA%21353&authkey=!AFs9VS72l3EKxVE&em=2" className='w-[793px] h-[1122px]' frameborder="0" scrolling="no"></iframe>
                <Button link="https://public.bn.files.1drv.com/y4mSfSkr-fdiRgRBsd1DkGheZqCDSPDn9YHiWl5q8LFhjS42yT4iSZxXubr3ECLM4LFLRjMhDLmeJQi942rpHhoOEAWHq22MAfu5YR-jfv2MPks7n0KHe0RpkNQOSTCgmjHO0AiPNSTDWIKJjwtRkcXiZe-PG4zu_IEhL5GL0zZNCgOga8TCo3WJUuvak3TMWScsOuj1eW1hG6YrfXES7JYwYsa1cwhi9-ImOE4_jadleA?AVOverride=1" content="Download Book" />
            </div>

            <div className='mt-[10rem]'>
                <Footer />
            </div>
        </section>
    )
}

export default About;
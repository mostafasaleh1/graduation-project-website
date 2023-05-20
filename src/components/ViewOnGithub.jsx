// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "../styles";
import { arrowUp } from '../assets';

const ViewOnGithub = () => {
    return (
        <div className={`${styles.flexCenter} w-[130px] h-[130px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <a href='https://www.github.com/mostafasaleh1' className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">View on</span>
                    </p>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </a>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Github</span>
                </p>
            </div>
        </div>
    )
}

export default ViewOnGithub;
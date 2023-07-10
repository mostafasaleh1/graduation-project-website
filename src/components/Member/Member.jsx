import React from 'react';
import styles from "../../styles";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Member = ({ link, facebookLink, linkedinLink, githubLink, job }) => {
    return (
        <div className='flex flex-col items-center  border-2 border-[#e24c10]'>
            <div className='w-[200px] h-[200px] rounded-3xl overflow-hidden'>
                <img src={link} alt="image" />
            </div>
            <p className={`${styles.paragraph} w-[100%] text-center mt-5`}>{job}</p>
            <div className='flex text-dimWhite gap-x-2 text-3xl justify-center mt-2 p-[20px]'>
                <div><a href={facebookLink}><FaFacebookSquare /></a></div>
                <div><a href={linkedinLink}><FaLinkedin /></a></div>
                <div><a href={githubLink}><FaGithubSquare /></a></div>
            </div>
        </div>
    )
}

export default Member;
import React from 'react';
import styles from "../../styles";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useState } from 'react';
import "./member.css";

const MemberCirlce = ({ link, link2, facebookLink, linkedinLink, githubLink, job, name, teamLeader }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleImageLinkOn = () => {
        setIsHovering(!isHovering);
    }

    return (
        <div className={`${isHovering ? 'member text-dimWhite text-[1.2rem]' : "member2 text-dimWhite text-[1.2rem]"}`} onClick={handleImageLinkOn}>
            <div className='member-image-container'>
                <img className={`${isHovering ? "member-image-hover" : "member-image member-image2"}`} src={isHovering ? link : link2} alt="image" />
            </div>
            <div className='member-content-container'>
                <div>
                    <h2>{name}</h2>
                    <p className={`${isHovering ? 'member-p' : 'member-p hidden'} pr-5 pl-5`}>{job}</p>
                </div>
                <div className={`${isHovering ? 'member-social-media text-[1.8rem]' : 'member-social-media text-[1.8rem] hidden'}`}>
                    <div className={`${facebookLink === "" ? 'member-social-media hidden' : 'member-social-media'}`}><a href={facebookLink}><FaFacebookSquare /></a></div>
                    <div className={`${linkedinLink === "" ? 'member-social-media hidden' : 'member-social-media'}`}><a href={linkedinLink}><FaLinkedin /></a></div>
                    <div className={`${githubLink === "" ? 'member-social-media hidden' : 'member-social-media '}`}><a href={githubLink}><FaGithubSquare /></a></div>
                </div>
            </div>
        </div>
    )
}

export default MemberCirlce;
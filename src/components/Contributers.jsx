import React from 'react';
import styles, { layout } from "../styles";
import Footer from './Footer';
import Button from './Button';
import { ourTeam } from '../assets';
import Member from './Member/Member';
import { ahmed, ammar, taher, ana, esam, dina, amroosy, aliaa, alaa, hassan, mohamed, morsh } from "../assets/index";

const Contributers = () => {
    return (
        <React.Fragment>
            <section id="features" className="flex gap-[7rem] flex-wrap justify-center pt-10 pb-10">
                <Member link={ana} job="sdfsdafs" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={morsh} job="adsfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={amroosy} job="adfasf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={esam} job="adfasdfasas" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={taher} job="asdfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={hassan} job="dasfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={alaa} job="asdfadsf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={ammar} job="adsfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={ahmed} job="adfsasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={mohamed} job="adsfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={dina} job="asdfasdf" facebookLink="" linkedinLink="" githubLink="" />
                <Member link={aliaa} job="asdfasdfasdfdas" facebookLink="" linkedinLink="" githubLink="" />
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Contributers;
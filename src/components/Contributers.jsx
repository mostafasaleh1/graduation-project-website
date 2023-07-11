import React from 'react';
import Footer from './Footer';
import MemberCircle from './Member/MemberCircle';
import { ahmed1, ammar1, taher1, ana1, esam1, dina1, amroosy1, aliaa1, alaa1, hassan1, mohamed1, morsh1, hend1, nada1, ahmed2, ammar2, taher2, ana2, esam2, dina2, amroosy2, aliaa2, alaa2, hassan2, mohamed2, morsh2, hend2, nada2 } from "../assets/index";

const Contributers = () => {
    return (
        <React.Fragment>
            <section id="features" className="flex gap-x-[2rem] gap-y-[8rem] flex-wrap justify-center mt-[10rem] mb-[10rem]">
                <MemberCircle
                    link={morsh1}
                    link2={morsh2}
                    name="Abdulrahman Elmorshedy"
                    job="Junior Robotics Engineer"
                    facebookLink="https://www.facebook.com/TheHero100"
                    linkedinLink="https://www.linkedin.com/in/abdulrahmanelmorshedy/"
                    githubLink="https://github.com/TheHero100"
                />
                <MemberCircle
                    link={ana1}
                    link2={ana2}
                    name="Mostafa Saleh"
                    job="Cloud Networking Engineer"
                    facebookLink="https://facebook.com/saleh2011"
                    linkedinLink="https://linkedin.com/in/mostafasaleh5"
                    githubLink="https://github.com/mostafasaleh1"
                />
                <MemberCircle
                    link={amroosy1}
                    link2={amroosy2}
                    name="Abdelmawla Elamrosy"
                    job="Penetration Tester Engineer & System Admin"
                    facebookLink="http://facebook.com/Abdelmawla.Elamrosy"
                    linkedinLink="http://linkedin.com/in/abdelmawla-elamrosy"
                    githubLink="http://github.com/0xdigimon"
                />

                <MemberCircle
                    link={esam1}
                    link2={esam2}
                    name="Esam Fayed"
                    job="Automation Engineer"
                    facebookLink="https://www.facebook.com/essam.fayed.904"
                    linkedinLink="https://www.linkedin.com/in/esam-fayed-891bb7282"
                    githubLink=""
                />
                <MemberCircle
                    link={taher1}
                    link2={taher2}
                    name="Taher Mohamed"
                    job="Automation engineer"
                    facebookLink="https://www.facebook.com/profile.php?id=100009060042223&mibextid=ZbWKwL"
                    linkedinLink="https://www.linkedin.com/in/taher-mohamed-a5625621a"
                    githubLink=""
                />
                <MemberCircle
                    link={hassan1}
                    link2={hassan2}
                    name="Hasan mohamed abbas"
                    job="Automation Engineer"
                    facebookLink="https://www.facebook.com/profile.php?id=100022787713538&mibextid=ZbWKwL"
                    linkedinLink=""
                    githubLink=""
                />
                <MemberCircle
                    link={alaa1}
                    link2={alaa2}
                    name="Alaa Alghoul"
                    job="Fresh Graduate"
                    facebookLink="https://www.facebook.com/profile.php?id=100034642208232&mibextid=LQQJ4d"
                    linkedinLink=""
                    githubLink=""
                />
                <MemberCircle
                    link={ammar1}
                    link2={ammar2}
                    name="Ammar elgendy"
                    job="Full stack web development && software engineer"
                    facebookLink="https://www.facebook.com/Eng.Ammar.Elgendy"
                    linkedinLink="https://www.linkedin.com/in/ammar-elgendy"
                    githubLink="https://github.com/weedakii"
                />
                <MemberCircle
                    link={ahmed1}
                    link2={ahmed2}
                    name="Ahmed Salman"
                    job="Automation Engineer"
                    facebookLink="https://www.facebook.com/profile.php?id=100009611750493&mibextid=LQQJ4d"
                    linkedinLink=""
                    githubLink=""
                />
                <MemberCircle
                    link={mohamed1}
                    link2={mohamed2}
                    name="Mohamed Saddik"
                    job="Software engineer & Mobile Application Developer"
                    facebookLink="https://www.facebook.com/profile.php?id=100012979328353&mibextid=ZbWKwL"
                    linkedinLink="https://www.linkedin.com/in/muhmed-mustafa-b45ab0244"
                    githubLink="https://github.com/Mohammedsaddik"
                />
                <MemberCircle
                    link={dina1}
                    link2={dina2}
                    name="Dina Moustafa"
                    job="Software engineer & Front end developer & Network engineer"
                    facebookLink="https://www.facebook.com/dina.moustafa.12764"
                    linkedinLink="https://www.linkedin.com/in/dina-moustafa-237772203"
                    githubLink="https://github.com/Dina-Moustafa1"
                />
                <MemberCircle
                    link={aliaa1}
                    link2={aliaa2}
                    name="Aliaa Shaban"
                    job="Front End Developer & Software engineer"
                    facebookLink="https://www.facebook.com/aliaa.shaban.50?mibextid=ZbWKwL"
                    linkedinLink="https://www.linkedin.com/in/aliaa-shaban-2222691b3"
                    githubLink=""
                />
                <MemberCircle
                    link={hend1}
                    link2={hend2}
                    name="Hend Elshanshoury"
                    job="Artificial intelligence"
                    facebookLink="https://www.facebook.com/profile.php?id=100085681322360&mibextid=ZbWKwL"
                    linkedinLink=""
                    githubLink=""
                />
                <MemberCircle
                    link={nada1}
                    link2={nada2}
                    name="Nada Esam"
                    job="Back end & front end & software Engineer"
                    facebookLink="https://www.facebook.com/profile.php?id=100028298872031&mibextid=ZbWKwL"
                    linkedinLink="https://www.linkedin.com/in/nada-essam-565989282"
                    githubLink=""
                />
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Contributers;
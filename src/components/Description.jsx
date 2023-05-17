import styles, { layout } from "../styles";
import React, { useState } from "react";




const FeatureCard = () => {
  const [activeTab, setActiveTab] = useState(false);

  const toggleActiveTab = () => {
    setActiveTab(!activeTab)
  }

  const tabClass = "flex flex-row p-6 rounded-[20px] feature-card mb-5 cursor-pointer";

  return (
    <React.Fragment>
      <div className={activeTab ? `${tabClass}` : `${tabClass} active`} onClick={toggleActiveTab}>
        <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
          Description
        </h2>
      </div>

      <div className={activeTab ? `${tabClass} active` : `${tabClass}`} onClick={toggleActiveTab}>
        <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
          Specifications
        </h2>
      </div>
    </React.Fragment>
  );
}

const Description = () => {
  return (
    <section id="features" className={layout.sectionCol}>
      <div className={`${layout.sectionImg} flex`}>
          <FeatureCard />
      </div>

      <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
        <iframe className="w-[65rem] h-[36.7rem] mb-5" src="https://www.youtube.com/embed/JOCs_yg1wlE" title="project video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Description;

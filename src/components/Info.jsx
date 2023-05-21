import styles, { layout } from "../styles";
import React, { useState } from "react";
import Description from "./infoContent/Description";
import Specifications from "./infoContent/Specifications";


const Info = () => {

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
            Description
          </h2>
        </div>

        <div className={activeTab ? `${tabClass} active-tab` : `${tabClass}`} onClick={toggleActiveTab}>
          <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
            Specifications
          </h2>
        </div>
      </div>

      <div id="Description" className={activeTab ? `hidden ${styles.flexCenter}` : `block ${styles.flexCenter}`}>
        <Description />
      </div>

      <div id="Specifications" className={activeTab ? `block ${styles.flexCenter}` : `hidden ${styles.flexCenter}`}>
        <Specifications />
      </div>

    </section>
  );
}

export default Info;

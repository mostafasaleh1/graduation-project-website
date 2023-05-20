import React from 'react';
import styles, { layout } from "../../styles";

const ProjectInfoElements = ({ header, img1Title, img2Title, imgPath, img2Path, img1Hidden, img2Hidden }) => {
    return (
        <div className={`flex w-[80%] flex-col items-center`}>
            <h2 className={`${styles.heading2} my-[2rem]`}>
                {header}
            </h2>

            <div className={`flex flex-col gap-[2rem] w-full`}>
                <img src={imgPath} alt="projectComponents" title={img1Title} className={`w-[100%] ${img1Hidden}`} />
                <img src={img2Path} alt="projectComponents" title={img2Title} className={`w-[100%] ${img2Hidden}`} />
            </div>
        </div>
    )
}

export default ProjectInfoElements;
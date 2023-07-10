import { layout } from "../styles";
import ProjectInfoElements from "./projectInfoElements/ProjectInfoElements";
import {
    projectComponents,
    camera,
    cameraDimentions,
    arm,
    armDimentions
} from "../assets";

const ProjectInformation = () => (
    <section id="product" className={`${layout.sectionCol} items-center text-center w-[100%]`}>
        <ProjectInfoElements
            header="Project Structure"
            img1Title="Project Structure"
            imgPath={projectComponents}
            img1Hidden=""
            img2Hidden="hidden"
        />
        <ProjectInfoElements
            header="Camera"
            img1Title="Camera"
            imgPath={camera}
            img2Title="Camera Dimentions"
            img2Path={cameraDimentions}
            img1Hidden=""
            img2Hidden=""
        />
        <ProjectInfoElements
            header="Arm"
            img1Title="Arm"
            imgPath={arm}
            img2Title="Arm Dimentions"
            img2Path={armDimentions}
            img1Hidden=""
            img2Hidden=""
        />
    </section>
);

export default ProjectInformation;
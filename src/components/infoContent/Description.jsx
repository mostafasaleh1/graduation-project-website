import React from 'react';
import styles from '../../styles';
import { technologies } from '../../assets';
import { fullInfo } from '../../assets';

export const Description = () => (
    <div className={`flex w-[80%] flex-col items-center md:w-min`}>
        <iframe className={styles.iframe} src="https://www.youtube.com/embed/Kp6QpPA_usM" title="Intelligent Mobile Robot, Higher Institute of engineering and technology KFS graduation project 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2 className={`${styles.heading2} text-center p-[1rem] sm:p-[2rem]`}>Project Description</h2>
        <p className={`${styles.paragraph}`}>Our graduation project is a mobile arm robot equipped with a Kinect camera for mapping its surroundings. Using advanced computer vision techniques, the Kinect camera captures depth information and RGB images to perceive the environment. The robot's mobile base enables it to navigate autonomously, while the arm manipulator allows for object interaction.</p>
        <p className={`${styles.paragraph} pt-3 pb-10`}> By combining the sensor data with simultaneous localization and mapping (SLAM) algorithms, the robot creates a detailed and accurate map of its surroundings. This project showcases the fusion of robotics, computer vision, and mapping technologies, offering a versatile and intelligent solution for various applications, including industrial automation, surveillance, and assistive robotics.</p>
        <img src={technologies} alt="Technologies" />
        <h2 className={`${styles.heading2} text-center p-[1rem] sm:p-[2rem]`}>Jetson Nano Control System</h2>
        <p className={`${styles.paragraph} pt-3 pb-10`}>NVIDIA Jetson Nano is able to run mainstream deep learning frameworks, such as TensorFlow, PyTorch, Caffe/ Caffe2, Keras, MXNet. Provide powerful computing power for massive AI projects. Powered by Jetson Nano, JetAuto Pro can implement image recognition, object detection and positioning, pose estimation, semantics segmentation, intelligent analysis and other almighty functions.</p>
        <img src={fullInfo} alt="full info" />
    </div>
)

export default Description;
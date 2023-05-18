import React from 'react';
import styles from '../../styles';
import { technologies } from '../../assets';
import { fullInfo } from '../../assets';

export const Description = () => (
    <div className={`flex w-[80%] flex-col items-center md:w-min`}>
        <iframe className={styles.iframe} src="https://www.youtube.com/embed/JOCs_yg1wlE" title="project video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2 className={`${styles.heading2} text-center p-[1rem] sm:p-[2rem]`}>Product Description</h2>
        <p className={`${styles.paragraph}`}>JetAuto Pro is a comprehensive 2 in 1 ROS robot tailored for ROS learning. It is loaded with NVIDIA Jetson Nano, AI vision robotic arm, high-performance encoder motor, Lidar, 3D depth camera and 7-inch screen, which open up more functionalities. Robot motion control, mapping and navigation, path planning, tracking and obstacle avoidance, autonomous driving, intelligent picking, MoveIt simulation, somatosensory interaction and voice interaction all can be achieved!</p>
        <p className={`${styles.paragraph} pt-3 pb-10`}>Diverse combination of the hardware makes JetAuto Pro an ideal platform where you can learn and verify robotic SLAM function, as well as get the solution to ROS development. Massive ROS learning materials and tutorials are provided to help you get started quickly!</p>
        <img src={technologies} alt="Technologies" />
        <h2 className={`${styles.heading2} text-center p-[1rem] sm:p-[2rem]`}>Jetson Nano Control System</h2>
        <p className={`${styles.paragraph} pt-3 pb-10`}>NVIDIA Jetson Nano is able to run mainstream deep learning frameworks, such as TensorFlow, PyTorch, Caffe/ Caffe2, Keras, MXNet. Provide powerful computing power for massive AI projects. Powered by Jetson Nano, JetAuto Pro can implement image recognition, object detection and positioning, pose estimation, semantics segmentation, intelligent analysis and other almighty functions.</p>
        <img src={fullInfo} alt="full info" />
    </div>
)

export default Description;
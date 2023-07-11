import React from 'react';
import styles from '../../styles';
import { technologies } from '../../assets';

export const Description = () => (
    <div className={`flex w-[80%] flex-col items-center md:w-min`}>
        <iframe className={`${styles.iframe}`} src="https://www.youtube.com/embed/riImir4z0CU" title="Intelligent Mobile Robot, Higher Institute of engineering and technology KFS graduation project 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2 className={`${styles.heading2} text-center p-[1rem] sm:p-[2rem]`}>Project Description</h2>
        <p className={`${styles.paragraph}`}>This project introduces an autonomous mobile robot with an arm to assist it we called our Robot Intelligent Mobile Robot (IMR) designed to be used for indoor navigation. It can be operated either autonomously or controlled by a man remotely over the network or wired. Odometry information is used to estimate the robot's position relative to its origin. To achieve robust odometry, the robot uses two sources of odometry, the linear velocities from the encoders and the angular velocity from the IMU. A Kinect v2 mounted on the robot creates a SLAM map with the help of edge detection and computer vision.</p>
        <p className={`${styles.paragraph} pt-3 pb-10`}>The robot can navigate autonomously through the predefined map using AMCL. A robot arm is mounted to pick and place objects. The project is based on Robots Operating System (ROS) which makes its functionality reusable in other projects. Modularity and readable codes are considered in the design and implementation of software nodes. About future work, there is a wide field of updates like object detection, On-line Mapping of new Environments and Voice commands, gesture control for a variety of tasks.</p>
        <img src={technologies} alt="Technologies" />
    </div>
)

export default Description;
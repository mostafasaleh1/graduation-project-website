import React from 'react';
import styles from '../../styles';

export const Description = () => (
        <div className={`${styles.flexCenter} w-[100%]`}>
            <iframe className={styles.iframe} src="https://www.youtube.com/embed/JOCs_yg1wlE" title="project video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
)

export default Description;
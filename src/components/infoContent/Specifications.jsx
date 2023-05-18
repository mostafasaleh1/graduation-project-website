import React from 'react';
import styles from '../../styles';
import { tableTrElements } from '../../constants/index.jsx';

const Specifications = () => (
    <div className={`${styles.flexCenter} ${styles.paragraph} w-[100%]`}>
        <table className='w-[95%] text-[.9rem] sm:text-[1.1rem] md:w-[70%]'>
            <tbody>
                {tableTrElements.map(element => (
                    <tr className=" border-zinc-500">
                        {element.td1}
                        {element.td2}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default Specifications;
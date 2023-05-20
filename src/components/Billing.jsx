import styles, { layout } from "../styles";

const Billing = () => (
    <section id="product" className={`${layout.sectionCol} items-center text-center`}>
            <h2 className={`${styles.heading2}`}>
                Project Structure
            </h2>

        <div className={layout.sectionImgReverse}>
            <img src="" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </div>
    </section>
);

export default Billing;
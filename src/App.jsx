// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (


    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Info />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>


  )
}

export default App
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import ProjectInformation from "./components/ProjectInformation";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contributers from "./components/Contributers";
import ShareScreen from './components/ShareScreen';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/graduation-project-website/" exact Component={Home} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route exact path="/graduation-project-website/"
                element={
                  <React.Fragment>
                    <Info />
                    <ProjectInformation />
                    <Testimonials />
                    <Footer />
                  </React.Fragment>
                }
              />
              <Route path="/graduation-project-website/about" Component={About} />
              <Route path="/graduation-project-website/contributers" Component={Contributers} />
              <Route path="/graduation-project-website/sharescreen" Component={ShareScreen} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
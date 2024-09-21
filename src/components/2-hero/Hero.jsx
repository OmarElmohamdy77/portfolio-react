import Lottie from "lottie-react";
// link 

import "./hero.css";
import devAnimation from '../../../src/animation/developer.json'
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const lottieRef =useRef();
    return (
    <section className="hero flex">
        <div className="left-section">
            <div className="parent-avatar flex">
                <motion.img 
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1.1)" }}
                transition={{ duration: 2, type: "spring", stiffness: "100" }}
                src="/public/omar.png" className="avatar" alt="" />
                <div className="icon-verified"></div>
            </div>
            <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2}}
            className="title"> I am a creative frontend developer</motion.h1>
            
            <p className="subtitle"></p>
            <div className="all-icons flex">
                
                <a className="icon icon-twitter"href="https://www.facebook.com/omaremara3194/" ></a>
                <a className="icon icon-instagram" href="https://www.instagram.com/omaremara3194/"></a>
                <a className="icon icon-github" href="https://github.com/OmarElmohamdy77/"></a>
                <a className="icon icon-linkedin-square" href="https://www.linkedin.com/in/omar-elmohamdy-emara"></a>
            </div>
        </div>

        <div className="right-section animation">
        <Lottie 
        lottieRef={lottieRef}
        onLoadedImages={() => {
            // @ts-ignore
            // https://Lottiereact.com/
            lottieRef.current.setSpeed(0.5);
        }}
        animationData={devAnimation} />
        </div>
    </section>
    );
};
export default Hero;

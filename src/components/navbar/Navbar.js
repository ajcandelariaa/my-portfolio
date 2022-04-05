import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import style from "./Navbar.module.css";
import logo from "../../images/navbar/logo.jpg";
import { motion } from "framer-motion";

function Navbar({navbar}) {
  const fade = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 1, y: 0},
  };
  return (
    <nav className={`${style.container} ${navbar ? style.container_active : style.container}`}>
      <div className={style.wrapper}>
        <div className={style.links}>
          <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: 1, delay: .1 }} >
            <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
          </motion.div>

          
          <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: 1, delay: .2 }} >
          <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>Projects</Link>
          </motion.div>
          
          <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: 1, delay: .3 }} >
            <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>
              <img src={logo} alt="logo" className={style.image_logo} />
            </Link>
          </motion.div>

          
          <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: 1, delay: .4 }} >
            <Link to="achievements" spy={true} smooth={true} offset={-90} duration={500}>Achievements</Link>
          </motion.div>

          <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: 1, delay: .5 }} >
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
          </motion.div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
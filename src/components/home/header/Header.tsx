import './header.css'
import HomePageText from "../../../assets/HomePageText.png"
import HomePageGraphic from "../../../assets/HomePageGraphic.png"
import EvolveText from "../../../assets//EvolveText.png"
import SponsorRedBull from "../../../assets/SponsorRedBull.png"
import SponsorFortune from "../../../assets/SponsorFortune.png"
import SponsorForbes from "../../../assets/SponsorForbes.png"
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header id='home'>
      <div className="header container flexBetween">
        <img src={EvolveText} alt="EvolveText" className='header-background' />
        <div className="header-content">
          <motion.div className="image-text"
            initial={{x: "-2rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2.5,
              type: "spring"
            }}
          >
            <img src={HomePageText} alt="HomePageText" />
          </motion.div>

          <motion.p
            initial={{x: "2rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2.5,
              type: "spring"
            }}
          >
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of..
            Get Your Dream Body Now.
          </motion.p>

          <div className="header-links">
            <a href='#contact-us' className="btn">Join Now</a>
          </div>
        </div>

        <div className="image-graphic">
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </div>
      </div>

        <div className="header-sponser">
          <img src={SponsorRedBull} alt="SponsorRedBull" />
          <img src={SponsorFortune} alt="SponsorFortune" />
          <img src={SponsorForbes} alt="SponsorForbes" />
        </div>
    </header>
  )
}

export default Header
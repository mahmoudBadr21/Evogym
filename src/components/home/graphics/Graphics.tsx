import './graphics.css'
import BenefitsPageGraphic from "../../../assets/BenefitsPageGraphic.png";
import { motion } from 'framer-motion'

const Graphics = () => {
  return (
    <section className="graphics flexBetween">
      <motion.div className="graphics-image"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.02, duration: 0.8}}
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: {opacity: 1, x: 0}
        }}
      >
        <img src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
      </motion.div>

      <motion.div className="graphics-text"
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.5}}
        transition={{delay: 0.02, duration: 0.8}}
        variants={{
          hidden: {opacity: 0, x: 50},
          visible: {opacity: 1, x: 0}
        }}
      >
        <h2 className="graphics-title main-title">
          millons of happay members gettig{" "}
          <span className="spcial-color">fit</span>.
        </h2>

        <div className="graphics-desc">
          <p>
            Nascetur aenean massa auctor tincidunt. laculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim Pulvinar fames vitae
            vitae quis Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Uillamcorper arcu id
            pretium sapien proin integer nist Felis orci diam odio.
          </p>
          <br />
          <p>
            Fringilla a sed at suspendisse ut enim volutpat Rhoncus vel est
            sellus quam porttitor Mauris veit eusmod elementum apon reque facisi
            Armet semper torsor facilisis metus ninbh. Rhoncus sit enim mattis odio in
            risus nunc.
          </p>
        </div>

        <a href='#contact-us' className="btn">Join Now</a>
      </motion.div>
    </section>
  );
}

export default Graphics

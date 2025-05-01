import { classesData } from "./classesData";
import "./ourClasses.css"
import Class from "./Class";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { sliderSettings } from './classesData'
import { motion } from 'framer-motion'

const OurClasses = () => {
  return (
    <section id="our-classes">
      <div className="our-classes container">
        <motion.div className="classes-text"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
          transition={{delay: 0.02, duration: 0.8}}
          variants={{
            hidden: {opacity: 0, x: 50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <h2 className="classes-title main-title">our classes</h2>
          <p className="classes-desc">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>

        <motion.div className="classes-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.8}}
          variants={{
            hidden: {opacity: 0, x: 50},
            visible: {opacity: 1, x: 0}
          }}
        >
        <Swiper  {...sliderSettings}>
          <SliderButtons />
            {classesData.map((item) => (
              <SwiperSlide>
                <Class
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default OurClasses

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiper-btn">
        <button className="btn" onClick={() => swiper.slidePrev()}>&lt;</button>
        <button className="btn" onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </>
  )
}
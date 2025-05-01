import './benefits.css';
import { benefitsData } from './benData';
import { motion } from 'framer-motion'
import Graphics from '../graphics/Graphics';

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="benefits container">
        <h2 className='ben-mian-title main-title'>More Than Just a Gym</h2>
        <p className='ben-mian-desc'>
          We provide world-class fitness equipment, trainers, and classes to help you reach your ultimate fitness goals with ease. We truly care about each and every member.
        </p>

        <div className="cards flexBetween">
          {benefitsData.map((benefit) => (
            <motion.div className="card" key={benefit.id} 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.8}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
            >
              <i className={benefit.icon}></i>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <Graphics />
      </div>
    </section>
  );
};

export default Benefits;

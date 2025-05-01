import "./footer.css";
import logo from "../../assets/Logo.png";
import { motion } from 'framer-motion';

type Props = {
  activeNav: string,
  SetActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const Footer = ({activeNav, SetActiveNav} :Props) => {
  return (
    <footer>
      <div className="footer container flexBetween">
        <motion.div
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.02, duration: 0.8}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            odit aperiam officia eligendi deserunt cumque qui ab natus
            repellendus explicabo.
          </p>
          <p>&copy; Evogym All Right Reserved</p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.7}}
          transition={{delay: 0.02, duration: 1}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <h4>Links</h4>
          <ul>
              <li>
                <a
                  href="#home"
                  className={activeNav === "#" ? "activeNav" : ""}
                  onClick={() => SetActiveNav("#")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className={activeNav === "#benefits" ? "activeNav" : ""}
                  onClick={() => SetActiveNav("#benefits")}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#our-classes"
                  className={activeNav === "#our-classes" ? "activeNav" : ""}
                  onClick={() => SetActiveNav("#our-classes")}
                >
                  Our Classes
                </a>
              </li>
            </ul>
        </motion.div>

        <motion.div
          className="footer-contact"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.9}}
          transition={{delay: 0.02, duration: 1.2}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <h4>Contact Us</h4>
          <p>Got questions? We're here to help!</p>
          <p>Call us: (333) 234-4232</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

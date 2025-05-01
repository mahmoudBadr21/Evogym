import './navbar.css'
import { useState } from 'react'
import Logo from '../../assets/Logo.png'

type Props = {
  isTopOfPage: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  activeNav: string;
  SetActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({isTopOfPage, setShowLogin, activeNav, SetActiveNav} :Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const getMenuStyle = (menuOpen: boolean) => {
    if (document.documentElement.clientWidth <= 905) {
      return menuOpen ? { right: "-100%" } : undefined;
    }
  }

  return (
    <nav className={isTopOfPage ? "" : "spcBackground"}>
      <div className="navbar container">
        <div className="nav-content flexBetween">
          <div className="nav-content-left">
            <img src={Logo} alt="logo" />
          </div>

          <i
            className="fas fa-bars icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          ></i>

          <div
            className="nav-content-right flexBetween"
            style={getMenuStyle(menuOpen)}
          >
            <ul className="flexBetween">
              <i className="fas fa-angle-right" onClick={() => setMenuOpen((prev) => !prev)}></i>
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
              <li>
                <a
                  href="#contact-us"
                  className={activeNav === "#contact-us" ? "activeNav" : ""}
                  onClick={() => SetActiveNav("#contact-us")}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="other flexBetween">
              <li onClick={() => setShowLogin(true)}>Sign In</li>
              <button className='btn'>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
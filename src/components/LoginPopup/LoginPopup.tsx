import { useState } from 'react'
import './loginPopup.css'
import cross_icon from '../../assets/cross_icon.png'

type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup = ({setShowLogin}: Props) => {

  const [currState, setCurrState] = useState<string>('Login')

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt=''/>
        </div>

        <div className="login-popup-inputs">
          {currState === 'Login' ? <></> :
            <input type="text" placeholder='Your name' required />
          }
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Your password' required />
        </div>
        
        <button>
          {currState === 'Sing Up' ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condtion">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === 'Login'
          ? <p>Create a new account? <span onClick={() => setCurrState("Sing Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup

import React, {useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [singIn, setSingIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img src="https://1000marche.net/wp-content/uploads/2020/03/Netflix-logo.png" alt="netflix" 
                className='loginScreen__logo'/>
            <button className='loginScreen__button' onClick={() => setSingIn(true)}>
                Sign In
            </button>

            <div className="loginScreen__gradient" />
        </div>

        <div className="loginScreen__body">
            {singIn ? ( 
                <SignUpScreen />
            ): (
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen__input">
                    <form>
                        <input type='email' placeholder='Email address' />
                        <button className='loginScreen__getStarted' onClick={() => setSingIn(true)}>Get Started </button>
                    </form>
                </div>
                </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen
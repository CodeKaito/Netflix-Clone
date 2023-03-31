import './Navbar.css'
import React, { useState, useEffect } from 'react'
import { createBrowserHistory } from "history"

const NavBar = () => {

    const [show, handleShow] = useState(false);
    const history = createBrowserHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavbar);
      return () => window.removeEventListener('scroll', transitionNavbar);
    }, [])
    

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img onClick={() => history.push("/")} className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix' />
            <img onClick={() => history.push("/profile")} className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' /> 
        
        </div>
        

        
    </div>
  )
}

export default NavBar
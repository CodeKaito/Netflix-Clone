import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import NavBar from '../Navbar'
import './ProfileScreen.css'

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <NavBar />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
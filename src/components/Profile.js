import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './auth'

function Profile() {
  const contextAuth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout =()=>{
    contextAuth.logout()
    navigate("/home")
  }
  return (
    <div>
     <h2> Profile Page </h2>
      <br />
      <br />
      Welcome {contextAuth.user}
      <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile

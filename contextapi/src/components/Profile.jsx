import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user}=useContext(UserContext);
  if (!user) {
    return <div>Please Login YourSelf</div>
    
  }
  return (
    <div>
      <h1>Username:{user.username}</h1>
      <h1>Email:{user.email}</h1>

    </div>
  )
}

export default Profile
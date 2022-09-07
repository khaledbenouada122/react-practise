import React from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const ghoHome=()=>{
        if(false)
        navigate("/")
        else
        navigate("/contact")
    }
  return (
    <div>Profile
    <Link to="setting">Update profile</Link>
    <button onClick={ghoHome}>hommes</button>
    <Outlet/>
    </div>
  )

}

export default Profile
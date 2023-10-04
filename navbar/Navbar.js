import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar' >
      <div className="logo">
      <span class="material-symbols-outlined">
menu
</span>
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt="" />
      </div>
      <div className="input">
        <input type="text" placeholder='Search..' />
        <span class="material-symbols-outlined">
search
</span>
      </div>
      <div className="profile">
      <span class="material-symbols-outlined">
video_call
</span>
<span class="material-symbols-outlined">
apps
</span>
<span class="material-symbols-outlined">
notifications
</span>
<img src="https://i.pinimg.com/736x/d5/59/bd/d559bd5ffda47d35f8d5ce8de8d6f325.jpg" alt="" />

      </div>
    </div>
  )
}

export default Navbar

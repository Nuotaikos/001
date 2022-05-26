import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src="https://cdn.svgporn.com/logos/terser.svg" alt="" />
      </div>
      <div className="menu-wrapper">
        <ul>
          {/* <li><a href="#"></a></li> */}
        </ul>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>
    </div>
  )
}
export default Header
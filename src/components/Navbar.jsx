import React from 'react'
import logo from '../assets/MPLlogo.svg'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const nav = useNavigate();

  function handleNavClick(e, path){
    nav(path); 
  }

  return (
    <div id="navBar" className='flex row space-between'>
      <img src={logo} id='mplLogo' alt="MPL Logo"/>
      <div id="menuBox" className='flex row centerVH'>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/home')}>Home</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/leaderboard')}>Leaderboard</p>
        <p className='menuItem selectedMenuItem' onClick={(e) => handleNavClick(e, '/treasure-hunt')}>Treasure Hunt</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/jeopardy')}>Jeopardy</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/admin')}>Admin</p>
        <button className='btn accentShade' onClick={(e) => handleNavClick(e, '/teams')}>Teams</button>
      </div>
    </div>
  );
}

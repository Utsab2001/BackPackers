import React from 'react'
import './navbar.scss'
import 'material-icons/iconfont/material-icons.css';

export default function Navbar({menuOpen,setMenuOpen}) {
  return (
    <>
    <div className={'navbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'><span>Back</span>Packers</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{
            setMenuOpen(!menuOpen)
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

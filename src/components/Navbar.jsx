import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <img src={logo} alt='logo book' />
          <Link to='/'>
            <h2>BookLib</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

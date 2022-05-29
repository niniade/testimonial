import React from 'react'
import './header.css'
import './header-mobile.css'
import logo from '../Vasiti-Logo-black 1.png';


export const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-content'>
                <div className='image-div'>
                    <img src={logo} alt='vasiti-img' />
                </div>

                <div className='navigation-div'>
                    <ul>
                      <li>About us</li>
                      <li>Stores</li>
                      <li>Contact</li>
                      <li>Log in</li>
                      <li><button className='button-style'>SIGN UP</button></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* sub nav bar */}
        <div className='sub-nav-bar'>
          <div>
          <ul className='subnav-list'>
              <li>Market Place</li>
              <li>Wholesale center</li>
              <li>Selller Center</li>
              <li>Services</li>
              <li>Internships</li>
              <li>Events</li>
          </ul>
          </div>
        </div>
    </>
  )
}

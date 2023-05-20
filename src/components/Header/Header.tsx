import React from 'react'
import './Header.css'
import { Tlogo } from '../../assests'

function Header() {
  return (
    <header className="header">
        <div className="header__metadata">
          <img src={Tlogo} alt="Anime Logo" className="header__metadata_logo" />
          <h5 className="header__metadata_title">Anime Suggest</h5>
        </div>
        <form action="submit" method='get' className="header__search">
          <input type="text" className="header__search_input" placeholder='Search' />
        </form>
        <nav className="header__nav_bar">
          <ul className='header__nav_bar__list'>
            <li className="header__nav_bar__list_item">Tv Series</li>
            <li className="header__nav_bar__list_item">Movies</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
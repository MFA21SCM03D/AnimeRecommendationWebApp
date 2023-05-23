import React, { useState } from 'react'
import './Header.css'
import { Tlogo } from '../../assests'
import { useNavigate } from 'react-router-dom'


function Header() {
  const [animeSearch, setAnimeSearch] = useState<string>('')
  const navigate = useNavigate()

  function handleOnInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setAnimeSearch(e.target.value)
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(animeSearch)
    navigate(`/anime`, {state: {animeSearch}})
  }

  return (
    <header className="header">
        <div className="header__metadata">
          <img src={Tlogo} alt="Anime Logo" className="header__metadata_logo" />
          <h5 className="header__metadata_title">Anime Suggest</h5>
        </div>
        <form className="header__search" onSubmit={handleOnSubmit}>
          <input 
            name = "title" 
            type="text" 
            className="header__search_input" 
            placeholder='Search' 
            value={animeSearch} 
            onChange={handleOnInputChange}
          />
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
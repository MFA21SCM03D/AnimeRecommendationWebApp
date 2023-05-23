import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AnimeData } from '../../models/anime';
import Card from '../Card/Card';
import './Description.css'

function Description() {
  const APIURL = process.env.REACT_APP_API
  const location = useLocation()
  const props = location.state.title || location.state.animeSearch
  const [animeDescription, setAnimeDescription] = useState<AnimeData[]>()
  console.log("Description page", props)

  async function getAnimeDescription(){
    try {
      await axios.get(`${APIURL}anime`, {params: { title : props}}).then( response => setAnimeDescription(response.data.payload))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAnimeDescription()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="description">
      {
        animeDescription ? 
        (
            animeDescription.map((anime) => <Card key={anime.title} {...anime} className='description__'/>
        )):
        (
            <div>Loading...</div>    
        )
      }
        {/* <div className="description__anime_gt">
            <p className="description__anime_gt__g">Genre</p>
            <p className="description__anime_gt__t">Title</p>
        </div>
        <div className="description__anime_desc">
            <p>Description</p>
        </div>
        <section className="hero">
            <img src="" alt="Anime" />
        </section> */}
    </div>
  )
}

export default Description
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AnimeData } from '../../models/anime';
import Card from '../Card/Card';

function Description() {
  const APIURL = process.env.REACT_APP_API
  const location = useLocation()
  const props = location.state.props
  const [animeDescription, setAnimeDescription] = useState<AnimeData[]>()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAnimeDescription(){
    try {
      await axios.get(`${APIURL}anime/${props.title}`).then( response => setAnimeDescription(response.data.payload))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAnimeDescription()
  }, [getAnimeDescription])
  
  return (
    <div className="description">
      {
        animeDescription ? 
        (
            animeDescription.map((anime) => <Card key={anime.title} {...anime}/>
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
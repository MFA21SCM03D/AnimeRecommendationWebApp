import React from 'react'
import { AnimeData } from '../../models/anime'
import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card(props:AnimeData) {

  const navigate = useNavigate()
  async function getAnimeDescription() {
    navigate(`anime/${props.title}`, { state: {props} })
  }
  
    return (
    <section className="card">
        <img src={props.image} alt={props.title} className="card__thumbnail_image" />
        <div className="card__details">
          <p className="card__details__title">{props.title}</p>
          <p className="card__details__anime_type">{props.anime_type}</p>
          <p className="card__details__released">{props.released}</p>
          <p className="card__details__status">{props.status}</p>
          <button className="card__details__description" onClick={() => getAnimeDescription()}>See Description</button>
        </div>
        
    </section>
  )
}

export default Card
import React from 'react'
import { AnimeData } from '../../models/anime'
import './Card.css'
import axios from 'axios';

function Card(props:AnimeData) {
  const APIURL = "http://127.0.0.1:8000/"
  async function getAnimeDescription(title: string) {
    // await axios.get(APIURL).then(response => {console.log(response.data.payload)})
    try {
        await axios.get(`${APIURL}anime/${title}`).then( response => console.log(response.data.payload))
    } catch (error) {
        console.error(error);
    }
  }
  
    return (
    <section className="card">
        <img src={props.image} alt={props.title} className="card__thumbnail_image" />
        <div className="card__details">
          <p className="card__details__title">{props.title}</p>
          <p className="card__details__anime_type">{props.anime_type}</p>
          <p className="card__details__released">{props.released}</p>
          <p className="card__details__status">{props.status}</p>
          <button className="card__details__description" onClick={() => getAnimeDescription(props.title)}>See Description</button>
        </div>
        
    </section>
  )
}

export default Card
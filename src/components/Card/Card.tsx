import React from 'react'
import {CardProps } from '../../models/anime'
import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card(props:CardProps) {

  const navigate = useNavigate()
  async function getAnimeDescription() {
    const title = props.title
    console.log('Card page', title)
    navigate(`/anime`, { state: {title} })
  }
  const cardClassName = `${props.className || 'card'}`
  console.log(cardClassName)
    return (
    <section className={cardClassName + "card"}>
        <img src={props.image} alt={props.title} className= {cardClassName + "card__thumbnail_image"} />
        <div className={cardClassName + "card__details"}>
          <div className={cardClassName + "card__details__genre_title"}>
            <p className={cardClassName + "card__details__genre"}>{props.genre + " "}</p>
            <p className={cardClassName + "card__details__title"}>{props.title}</p>
          </div>
          <div className={cardClassName + "card__details__summary_othernames"}>
            <p className={cardClassName + "card__details__plot_summary"}>{props.plot_summary}</p>
            {/* <p className={cardClassName + "card__details__other_names"}>{props.other_names}</p> */}
          </div>
          {/* <p className={cardClassName + "card__details__anime_type"}>{props.anime_type}</p>
          <p className={cardClassName + "card__details__released"}>{props.released}</p>
          <p className={cardClassName + "card__details__status"}>{props.status}</p> */}
          
          <button className={cardClassName + "card__details__description"} onClick={() => getAnimeDescription()}>See Description</button>
        </div>
    </section>
  )
}

export default Card
import React from 'react'
import { AnimeData } from '../../models/anime'
import './Card.css'

function Card(props:AnimeData) {
  
    return (
    <section className="card">
        <img src={props.image} alt={props.title} className="card__thumbnail_image" />
    </section>
  )
}

export default Card
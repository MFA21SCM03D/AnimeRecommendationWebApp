import React from 'react'

function Description(props: { title: string}) {
   
  return (
    <div className="description">
        <div className="description__anime_gt">
            <p className="description__anime_gt__g">Genre</p>
            <p className="description__anime_gt__t">Title</p>
        </div>
        <div className="description__anime_desc">
            <p>Description</p>
        </div>
        <section className="hero">
            <img src="" alt="Anime" />
        </section>
    </div>
  )
}

export default Description
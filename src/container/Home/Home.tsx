import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnimeData } from '../../models/anime';
import './Home.css'
import {Card, Header} from '../../components';

function Home() {
    const APIURL = process.env.REACT_APP_API
    const [animeData, setAnimeData] = useState<AnimeData[]>()

    
    async function getAnimeData() {
        try {
            await axios.get(`${APIURL}`).then( response => setAnimeData(response.data.payload))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAnimeData() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="home">
        <Header/>
        <div className="home__card__grid">
            {
            animeData ? 
            (
                animeData.map((anime) => <Card key={anime.title} {...anime} className= 'home__'/>
            )):
            (
                <div>Loading...</div>    
            )
        }
        </div> 
    </div>
  )
}

export default Home
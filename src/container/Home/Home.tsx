import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnimeData } from '../../models/anime';
import './Home.css'
import {Card, Header} from '../../components';

function Home() {
    const APIURL = "http://127.0.0.1:8000/"
    const [animeData, setAnimeData] = useState<AnimeData[]>()

    async function getAnimeData() {
        // await axios.get(APIURL).then(response => {console.log(response.data.payload)})
        try {
            await axios.get(APIURL).then( response => setAnimeData(response.data.payload))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAnimeData()
    }, [])

  return (
    <div className="home">
        <Header/>
        <div className="home__card">
            {
            animeData ? 
            (
                animeData.map((anime) => <Card key={anime.title} {...anime}/>
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
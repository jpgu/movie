import React, {useEffect, useState} from 'react'
import {Row} from 'antd'
import GridCards from './GridCards.js'

const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const API_KEY = 'f88c3ea325f8f97cd9904e5736f56d08';

function MovieList(){

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            setMovies([...Movies, ...response.results])            
        })
    }

    const sortFunction = (a, b) => { 
        if(a.id > b.id) {return -1; }
        if(a.id < b.id) {return 1; }
        return 0
    }
   
    Movies.sort(sortFunction);


    return (

        <div style = {{width: '85%', margin:'0'}}>
            <h2> Movie list</h2>

            <Row gutter={[32,32]}>
                {Movies && Movies.map((movie, index) => (

                    <React.Fragment key={index}>
                        <GridCards
                            landingPage
                            image= { movie.poster_path ?
                            `${IMAGE_BASE_URL}/w500${movie.poster_path}` : null}
                            movieId={movie.id}
                            movieName={movie.original_title}
                            adult = {movie.adult}
                        />
                    </React.Fragment>
                ))}            
            </Row>
        </div>
    )
}
export default MovieList
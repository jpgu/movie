import React, {useEffect, useState} from 'react';
import {Descriptions} from 'antd'


function MovieDetail(props) {

    const API_URL = 'https://api.themoviedb.org/3';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
    const API_KEY = 'f88c3ea325f8f97cd9904e5736f56d08';

    const [Movie, setMovie] = useState();

    useEffect(() => {

        const endpoint = `${API_URL}/movie/${props.match.params.movieId}?api_key=${API_KEY}`; 
        fetchMovieDetail(endpoint)

    }, [])

    const fetchMovieDetail = (endpoint) => {

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovie(response)
        })
    }

    return (

        <div>
            <h2> Movie Detail </h2>
            {Movie &&
            
            <Descriptions title="Movie Info" bordered>
                <Descriptions.Item label="Title">{Movie.original_title}</Descriptions.Item>
                <Descriptions.Item label="release_date">{Movie.original_title}</Descriptions.Item>
                <Descriptions.Item label="revenue">{Movie.revenue}</Descriptions.Item>
                <Descriptions.Item label="runtime">{Movie.runtime}</Descriptions.Item>
                <Descriptions.Item label="vote_average" span={2}>{Movie.vote_average}</Descriptions.Item>
                <Descriptions.Item label="vote_count">{Movie.vote_count}</Descriptions.Item>
                <Descriptions.Item label="status">{Movie.status}</Descriptions.Item>
                <Descriptions.Item label="popularity">{Movie.popularity}</Descriptions.Item>
            </Descriptions>
            }
        </div>

    )
}

export default MovieDetail;
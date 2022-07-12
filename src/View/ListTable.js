import React, {useEffect, useState} from 'react'
import { Checkbox } from 'antd';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f88c3ea325f8f97cd9904e5736f56d08';

function ListTable(){

    const [Movies, setMovies] = useState([])
    let originMovies = [];
    const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    useEffect(() => {
        
        fetchMovies(endpoint)
        console.log('useEffect');
        originMovies = [...Movies];

        console.log('movies in effect ', Movies)

    }, [])

    const fetchMovies = (endpoint) => {

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            setMovies([...Movies, ...response.results])
        })
        
        console.log('movies in fetch ', Movies)
        console.log('origin in fetch ', originMovies)        
    }

    const genreList = [
        {label:'Single', value:1},
        {label:'Double', value:2},
        {label:'Triple', value:3},
        {label:'Four', value:4},
        {label:'Five', value:5}
    ];

    const onChange = (checkedValues) => {        

        console.log('checkedValues ', checkedValues);
        console.log('Movies ', Movies)
        originMovies = [...Movies];

        console.log('oringin in onChange', originMovies)
        
        setMovies(originMovies);

        if(checkedValues.length != 0){
            const newMovies = Movies.filter(movie => checkedValues.includes(movie.genre_ids.length))
            console.log('newMovies ', newMovies);
            setMovies(newMovies);

            console.log('oringin in onChange 2', originMovies)
        }
    }

    return (
        <div>

            <Checkbox.Group options={genreList} onChange={onChange} />
    

            <table border="1">
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>

                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <td>{movie.original_title}</td>
                            {movie.vote_average > 7.5?
                                <>                                    
                                    <td>{movie.release_date}</td>
                                    <td>{movie.vote_average}</td>
                                </>
                                :    
                                <td colSpan='2'>{movie.release_date}</td>   
                            }
                        </tr>
                    </React.Fragment>
                ))}    
                </tbody> 
            </table>

        </div>
    )
}

export default ListTable;
import React from 'react';


function Movie(props) {

    const movieId = props.id

    return (
        <li className="movie">
            <h2>{props.title}</h2>
            <img className="img" alt="movie-cover" src={props.image}></img>
            <p>Description: {props.description}</p>
            <button className='delete-movie' type='button' onClick={() => {props.deleteMovie(movieId)}}>Delete Movie</button> 
        </li>
    )
}

export default Movie;
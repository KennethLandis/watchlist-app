import React from 'react';


function Item(props) {
    
    const newMovie = {
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        client_id: props.client.id
    }

    return (
        <li className="movie">
            <h2>{props.title}</h2>
            <img className="img" alt="movie-cover" src={props.image}></img>
            <p>Description: {props.description}</p>
            <button className='add-movie' type='button' onClick={() => {props.addMovie(newMovie)}}>Add Movie</button> 
        </li>
    )
}

export default Item;
import React from 'react';
import Movie from './Movie';

function Userlist(props) {
    return (
        <ul className='results'>
            {props.list.map(item => {
                return (
                    <Movie
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        deleteMovie={props.deleteMovie}
                    />
                )
            })}
        </ul>
    )
}

export default Userlist
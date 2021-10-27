import React from 'react';
import Movie from './Movie';

function Userlist(props) {
    console.log(props.list)
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
                        addMovie={props.addMovie}
                    />
                )
            })}
        </ul>
    )
}

export default Userlist
import React from 'react';
import Item from './Item';

function Results(props) {
    console.log(props.list)
    return (
        <ul className='results'>
            {props.list.map(item => {
                return (
                    <Item
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

export default Results
import React from 'react';
import Item from './Item';

function Results(props) {
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
                        client={props.client}
                    />
                )
            })}
        </ul>
    )
}

export default Results
import React from 'react';

function Searchbar(props) {
        return (
            <div className="main">
                <form onSubmit={e => props.handleSubmit(e)}>
                    <input type='text' id='search' onChange={e => props.setSearch(e.target.value)}></input>
                    <input type="submit" value="search"></input>
                </form>
            </div>
        )
    }

export default Searchbar;
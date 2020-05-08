import React from 'react'

function Search(props) {
    return (
        <div>
            <div>
                <h3>Filter By</h3>
                <button onClick = {props.male}>Males</button>
                <button onClick = {props.female}>Females</button>
                <button onClick = {props.all}>All</button>
            </div>
            <div>
                <h3>Sort By</h3>
                <button onClick= {props.age}>Age</button>
            </div>
        </div>
    )
}

export default Search;

import React from 'react'
import Aux from '../hoc/hoc';

const searchBar = (props) =>{
    return(
        <Aux>
            <input type='search' id={props.id} name={props.name} placeholder={props.placeholder} />
            <button>{props.query}</button>
        </Aux>
    )
}

export default searchBar;
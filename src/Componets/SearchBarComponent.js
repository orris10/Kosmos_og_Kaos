import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './css/searchBar.css';


const SearchBarComponent = ({handleInput}) =>{
    return (
        <div>
            < BsSearch />
            <input 
                className="inputstyle"
                placeholder="Leitar orð"
                onChange={(e) =>{handleInput(e.target.value);}}
            />
        </div>
    )
}
export default SearchBarComponent;
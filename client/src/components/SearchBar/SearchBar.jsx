import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";

const SearchBar = () => {

    const [name, setName] = useState()
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setName(e.target.value)
    }   

    const handleClick = (e) => {
        console.log(name)
        dispatch(getPokemonByName(name))
    }

    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default SearchBar;
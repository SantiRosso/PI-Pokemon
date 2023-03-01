import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom"

const SearchBar = () => {

    const [name, setName] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setName(e.target.value)
    }   

    const handleClick = (e) => {
        dispatch(getPokemonByName(name.toLowerCase()))
        navigate("/pokemons")
    }

    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default SearchBar;
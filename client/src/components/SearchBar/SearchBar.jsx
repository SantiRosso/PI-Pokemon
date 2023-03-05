import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom"
//styles
import s from "./SearchBar.module.css"

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
        <div className={s.searchBar}>
            <input type="text" placeholder="Search pokemon..." className={s.input} onChange={handleChange}/>
            <button className={s.button} onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default SearchBar;
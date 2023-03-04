import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
//styles
import s from "./Pokemons.module.css"
//components
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card"
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar"

const Pokemons = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!pokemons.length)
        dispatch(getAllPokemons())
    },[dispatch])

    const handleClickBack = () => {
        navigate("/home");
    }

    return(
        <div>
            <NavBar/>

            <button onClick={handleClickBack}>Back</button>
            <SearchBar/>
            <div className={s.title}>
                <h1>Pokemons</h1>
            </div>
            <div className={s.pokemonsContainer}>
                {
                    pokemons?.map((e, i) => {
                        return(
                            <Card key={i} id={e.id} name={e.name} types={e.types} image={e.image?.front_default || "https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"}/>
                        )
                    })
                }  
            </div>
            <Footer/>
        </div>
    )
}
//filtros - lazyloading o paginado
export default Pokemons;
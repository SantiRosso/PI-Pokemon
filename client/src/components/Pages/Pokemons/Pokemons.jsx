import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, resetFilters } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
//styles
import s from "./Pokemons.module.css"
//components
import NavBar from "../../NavBar/NavBar";
import Card from "../../Card/Card"
import Footer from "../../Footer/Footer";
import SearchBar from "../../SearchBar/SearchBar"
import Button from "../../Button/Button";
import Loader from "../../Loader/Loader"
import Filters from "../../Filters/Filters";
import Pagination from "../../Pagination/Pagination";
//images
import pokedex from "../../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"

const Pokemons = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.filtered)
    const navigate = useNavigate()

    //Pagination 
        const [input, setInput] = useState(1);
        const [page, setPage] = useState(1);
        const [perPage] = useState(18);
        let max = Math.ceil(pokemons.length / perPage);

    useEffect(()=>{
        if(!pokemons.length)
        dispatch(getAllPokemons())
    },[dispatch])

    const handleClickBack = () => {
        navigate("/home");
    }

    const handleClickReset = () => {
        dispatch(resetFilters())
    }

    //Order by...
    const [order, setOrder] = useState(false)

    return(
        <div>
            <NavBar/>
            <div className={s.buttonsDiv}>
                <Button name="Back" icon={<RiArrowGoBackFill/>} click={handleClickBack}/>
                <Button name="Reset Filters" click={handleClickReset}/>
            </div>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <SearchBar/>
            <div className={s.filters}>
                <Filters order={order} setOrder={setOrder}/>
            </div>
            <div className={s.pokemonsContainer}>
                {
                    pokemons?.length ? pokemons?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((e, i) => {
                        return(
                            <Card key={i} id={e.id} name={e.name} types={e.types} image={e.image?.front_default || "https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"}/>
                        )
                    })
                    : <Loader/>
                }  
            </div>
            <div className={s.pagination}>
                <Pagination page={page} setPage={setPage} input={input} setInput={setInput} max={max}/>
            </div>
                <Footer/> 
        </div>
    )
}
//filtros - lazyloading o paginado
export default Pokemons;
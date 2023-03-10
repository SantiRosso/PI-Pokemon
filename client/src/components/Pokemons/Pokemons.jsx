import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, resetFilters } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
//styles
import s from "./Pokemons.module.css"
//components
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card"
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar"
import Button from "../Button/Button";
import Loader from "../Loader/Loader"
//images
import pokedex from "../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"

const Pokemons = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.filtered)
    const navigate = useNavigate()

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
            <div className={s.pokemonsContainer}>
                {
                    pokemons?.length ? pokemons?.map((e, i) => {
                        return(
                            <Card key={i} id={e.id} name={e.name} types={e.types} image={e.image?.front_default || "https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"}/>
                        )
                    })
                    : <Loader/>
                }  
            </div>
                <Footer/> 
        </div>
    )
}
//filtros - lazyloading o paginado
export default Pokemons;
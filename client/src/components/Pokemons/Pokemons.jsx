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
import BasicDrawer from "../BasicDreawer/BasicDrawer"
//images
import pokedex from "../Home/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
//chakra
// import { useDisclosure } from "@chakra-ui/react";

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

    // const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div>
            <NavBar/>
            <button onClick={handleClickBack}>Back</button>
            {/* <button onClick={()=> onOpen()}>Filters</button> */}
            {/* <BasicDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> */}
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <SearchBar/>
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
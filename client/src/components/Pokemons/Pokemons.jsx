import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
//components
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card"
import Footer from "../Footer/Footer";

const Pokemons = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)

    useEffect(()=>{
        if(!pokemons.length)
        dispatch(getAllPokemons())
    },[dispatch])

    return(
        <div>
            <NavBar/>
            <h1>Pokemons</h1>
            {
                pokemons?.map((e, i) => {
                    return(
                        <Card key={i} id={e.id} name={e.name} types={e.types} image={e.image?.front_default || "https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"}/>
                    )
                })
            }
            <Footer/>
        </div>
    )
}
//filtros - lazyloading o paginado
export default Pokemons;
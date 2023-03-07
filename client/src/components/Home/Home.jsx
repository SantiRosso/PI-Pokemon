import { useModal } from "../../Hooks/useModal";
import { useState } from "react";
//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CreatePokemonModal from "../Modals/CreatePokemonModal"
import SearchBar from "../SearchBar/SearchBar"
import HomeCard from "../HomeCard/HomeCard"
//styles
import s from "./Home.module.css"
//images
import pokedex from "./images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import pokedex2 from "./images/pokedex2.png"
import pikachu from "./images/pikachu.jpg"
import pokeball from "./images/pokeball.png"
import charmander from "./images/charmander.jpg"
import pokemons from "./images/pokemons.jpg"
import foro from "./images/foro.png"
import logout1 from "./images/logout.png"
import Button from "../Button/Button";


const Home = () => {

    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    const logout = () => {
        console("logout")
    }

    const functionalities = [
        {name:"Login/Register", image:pokedex2, route:"/"},
        {name:"Profile", image:pikachu, route:"/profile"},
        {name:"Pokemons", image:pokemons, route:"/pokemons"}, 
        {name:"Foro", image:foro, route:"/foro"},
        {name:"Create Pokemon", image:pokeball, onClick:{OpenModal1}},
        {name:"About", image:charmander, route:"/about"},
        {name:"Logout", image:logout1, onClick:{logout}},
        // {name:"Create Pokemon", image:pokeball, route:"create-pokemon"},
    ]

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(4);
    let max = Math.ceil(functionalities.length / perPage)

    const nextPage = () => {
        setPage (page +1)
    }

    const previousPage = () => {
        setPage (page -1)
    }

    return(
        <div className={s.home}>
            <NavBar/>
            {/* NAME OF PAGE */}
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            {/* CARDS */}
            <SearchBar/>
            <div className={s.carrousel}>
                <Button name={"<"} click={previousPage} disabled={page === 1}/>
                {
                    functionalities.slice((page -1) * perPage, (page -1) * perPage + perPage).map((e) => {
                        return(
                            <HomeCard name={e.name} image={e.image} route={e.route} onClick={e.onClick}/>
                        )
                    })
                }
                <Button name={">"} click={nextPage} disabled={page === max}/>
            </div>
            <CreatePokemonModal isOpen={isOpenModal1} closeModal={closeModal1}/>
            <Footer/>
        </div>
    )
}

export default Home;
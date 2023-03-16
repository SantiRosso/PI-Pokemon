import { useModal } from "../../Hooks/useModal";
import { useState } from "react";
import { useAuth } from "../context/authContext.js";

//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CreatePokemonModal from "../Modals/CreatePokemonModal"
import SearchBar from "../SearchBar/SearchBar"
import HomeCard from "../HomeCard/HomeCard"
import Button from "../Button/Button";
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
import soon from "./images/soon.jpeg";
//react-Icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"


const Home = () => {
    const {
        logout
    } = useAuth();

    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    const handleLogout = async () => {
        await logout();
        window.localStorage.removeItem("token");
    }

    const functionalities = [
        {name:"Login", image:pokedex2, route:"/"},
        {name:"Profile", image:pikachu, route:"/profile"},
        {name:"Pokemons", image:pokemons, route:"/pokemons"}, 
        {name:"Foro", image:foro, route:"/foro"},
        {name:"Create Pokemon", image:pokeball, onClick:OpenModal1},
        {name:"About", image:charmander, route:"/about"},
        {name:"Logout", image:logout1, onClick:handleLogout},
        {name:"Favourites", image:soon},
        {name:"Donations", image:soon },
        {name:"Settings", image:soon },
        {name:"Social", image:soon },
        {name:"Statistics", image:soon },
        // {name:"Create Pokemon", image:pokeball, route:"create-pokemon"},
    ]

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(4);
    let max = Math.ceil(functionalities.length - perPage + 1 / perPage)

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
                <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1} /* hidden={page === 1} *//>
                {
                    functionalities.slice(page - 1, (page - 1) + perPage).map((e) => {
                        return(
                            <HomeCard name={e.name} image={e.image} route={e.route} onClick={e.onClick}/>
                        )
                    })
                }
                <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max} /* hidden={page === max} *//>
            </div>
            <CreatePokemonModal isOpen={isOpenModal1} closeModal={closeModal1}/>
            <Footer/>
        </div>
    )
}

export default Home;
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

import { useModal } from "../../Hooks/useModal";

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
                {
                    functionalities.map((e) => {
                        return(
                            <HomeCard name={e.name} image={e.image} route={e.route} onClick={e.onClick}/>
                        )
                    })
                }
            </div>
            <CreatePokemonModal isOpen={isOpenModal1} closeModal={closeModal1}/>
            <Footer/>
        </div>
    )
}

export default Home;
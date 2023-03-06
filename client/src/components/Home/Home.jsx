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

const Home = () => {

    const logout = () => {
        console("logout")
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
                <HomeCard name="Pokemons" image={pokemons} route="/pokemons" />
                <HomeCard name="Profile" image={pikachu} route="/profile" />
                <HomeCard name="Foro" image={foro} route="/foro" />
                <HomeCard name="About" image={charmander} route="/about" />
                <HomeCard name="Login/Register" image={pokedex2} route="/" />
                <HomeCard name="Logout" image={logout1} route="" onClick={logout}/>
                {/* <HomeCard name="Create Pokemon" image="#" route="create-pokemon" /> */}
                <div className={s.createCard}>
                    <img src={pokeball} alt="Create Pokemon" className={s.createImage}/>
                    <CreatePokemonModal/>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Home;
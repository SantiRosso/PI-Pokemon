//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CreatePokemonModal from "../Modals/CreatePokemonModal"
import SearchBar from "../SearchBar/SearchBar"
import HomeCard from "../HomeCard/HomeCard"
//styles
import s from "./Home.module.css"
//images
import pokedex from "./pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import pokedex2 from "./pokedex2.png"
import pikachu from "./pikachu.jpg"
import pokeball from "./pokeball.png"
import charmander from "./charmander.jpg"
import pokemons from "./pokemons.jpg"
import foro from "./foro.png"
import logout1 from "./logout.png"

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
            <HomeCard name="Pokemons" image={pokemons} route="/pokemons" />
            <HomeCard name="Profile" image={pikachu} route="/profile" />
            <HomeCard name="Foro" image={foro} route="/foro" />
            <HomeCard name="About" image={charmander} route="/about" />
            <HomeCard name="Login/Register" image={pokedex2} route="/" />
            <HomeCard name="Logout" image={logout1} route="" onClick={logout}/>
            {/* <HomeCard name="Create Pokemon" image="#" route="create-pokemon" /> */}
            <div>
                <img src={pokeball} alt="Create Pokemon" />
                <CreatePokemonModal/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
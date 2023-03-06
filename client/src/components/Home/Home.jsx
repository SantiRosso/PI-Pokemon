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
            <HomeCard name="Pokemons" image="#" route="/pokemons" />
            <HomeCard name="Profile" image="#" route="/profile" />
            <HomeCard name="Foro" image="#" route="/foro" />
            <HomeCard name="About" image="#" route="/about" />
            <HomeCard name="Login/Register" image="#" route="/" />
            <HomeCard name="Logout" image="#" route="" onClick={logout}/>
            {/* <HomeCard name="Create Pokemon" image="#" route="create-pokemon" /> */}
            <div>
                <img src="#" alt="Create Pokemon" />
                <CreatePokemonModal/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
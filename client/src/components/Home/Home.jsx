import {useNavigate} from "react-router-dom"
//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CreatePokemonModal from "../Modals/CreatePokemonModal"

const Home = () => {
    const navigate = useNavigate()
    return(
        <div>
            <NavBar/>
            {/* NAME OF PAGE */}
            <div>
                POKEDEX 
            </div>
            {/* CARDS */}
            <div>
                <button onClick={()=> navigate("/pokemons")}>Pokemons</button>
            </div>
            <div>
                <button onClick={()=> navigate("/profile")}>Profile</button>
            </div>
            <div>
                <button onClick={()=> navigate("/foro")}>Foro</button>
            </div>
            <div>
                <button onClick={()=> navigate("/about")}>About</button>
            </div>
            <div>
                {/* <button onClick={()=> navigate("/create-pokemon")}>Create Pokemon</button> */}
            </div>
            <div>
                <CreatePokemonModal/>
            </div>
            <div>
                <button onClick={()=> navigate("/")}>Login/Register</button>
            </div>
            <div>
                <button>Logout</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
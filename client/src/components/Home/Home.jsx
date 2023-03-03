import {Link, useNavigate} from "react-router-dom"
//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CreatePokemonModal from "../Modals/CreatePokemonModal"

const Home = () => {
    const navigate = useNavigate()
    return(
        <div>
            <NavBar/>
                Home
                <button onClick={()=> navigate("/pokemons")}>Pokemons</button>
                <button onClick={navigate("/profile")}>Profile</button>
                <button onClick={()=> navigate("/foro")}>Foro</button>
                <button onClick={()=> navigate("/about")}>About</button>
                <button onClick={()=> navigate("/create-pokemon")}>Create Pokemon</button>
                <CreatePokemonModal/>
                <button onClick={()=> navigate("/")}>Login/Register</button>
                <button>Logout</button>
            <Footer/>
        </div>
    )
}

export default Home;
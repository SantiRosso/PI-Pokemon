import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div>
            <NavBar/>
            <h1>Home</h1>
            <Link to="/pokemons">
                <h1>Pokemons</h1>
            </Link>
            <Link to="/profile">
                <h1>Profile</h1>
            </Link>
            <Link to="/foro">
                <h1>Foro</h1>
            </Link>
            <Link to="/about">
                <h1>About</h1>
            </Link>
            <Link to="/create-pokemon">
                <h1>Create Pokemon</h1>
            </Link>
        </div>
        //filtros
        //Cards
        // <Footer/>
    )
}

export default Home;
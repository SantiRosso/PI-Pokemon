import { Link } from "react-router-dom";
//images
import pokedex from "./pokedex.png"
//styles
import s from "./NavBar.module.css";
//components
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <Link to="/home">
                {/* <h1>Pokedex</h1> */}
                <img src={pokedex} alt="pokedex" className={s.image}/>
            </Link>
            {/* <SearchBar/> */}
            <div>
                <button>Desplegable</button>
            </div>
            
        </div>
    )
}

export default NavBar;
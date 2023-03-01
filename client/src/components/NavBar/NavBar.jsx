import { Link } from "react-router-dom";
//styles
import s from "./NavBar.module.css";
//components
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <Link to="/home">
                <h1>Pokedex</h1>
            </Link>
            <SearchBar/>
            <h1>Desplegable</h1>
        </div>
    )
}

export default NavBar;
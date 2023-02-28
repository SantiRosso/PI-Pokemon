import s from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <Link to="/home">
                <h1>Pokedex</h1>
            </Link>
            <h1>SearchBar</h1>
            <h1>Desplegable</h1>
        </div>
        // <SearchBar/>
    )
}

export default NavBar;
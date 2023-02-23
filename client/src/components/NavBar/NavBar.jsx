import s from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <h1>Pokedex</h1>
            <h1>SearchBar</h1>
            <h1>Desplegable</h1>
        </div>
        // <SearchBar/>
    )
}

export default NavBar;
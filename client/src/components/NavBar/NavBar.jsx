import { Link } from "react-router-dom";
//images
import pokedex from "./pokedex.png"
// import logo from "../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
//styles
import s from "./NavBar.module.css";
//components
import Button from "../Button/Button";
import SideBar from "../SideBar/SideBar";
//react icons
import {TfiMenu} from "react-icons/tfi"
import { useState } from "react";

const NavBar = () => {

    const [sideBar, setSideBar] = useState(false)

    const sidebar = () => {
        setSideBar(!sideBar)
    }

    return(
        <div className={s.navBar}>
            <Link to="/home">
                {/* <h1>Pokedex</h1> */}
                <img src={pokedex} alt="pokedex" className={s.image}/>
            </Link>
            {/* <img src={logo} alt="logo" /> */}
            {/* <SearchBar/> */}
            <div>
                <Button name={"Menu"} icon={<TfiMenu/>} click={sidebar}/>
            </div>
            {sideBar && <SideBar/>}
        </div>
    )
}

export default NavBar;
import {useNavigate } from "react-router-dom"
//components
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar"
import Button from "../Button/Button";
//styles
import s from "./Foro.module.css"
//images
import pokedex from "../Home/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const Foro = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <Button name="Back" click={handleClickBack}/>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <h1>Foro</h1>
            <Footer/>
        </div>
    )
}
export default Foro;
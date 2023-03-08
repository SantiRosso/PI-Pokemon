import { useNavigate } from "react-router-dom"
//components
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Button from "../Button/Button"
//styles
import s from "./About.module.css"
//images
import pokedex from "../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import soon from "../Home/images/soon.jpeg" 
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"

const About = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <Button name="Back" icon={<RiArrowGoBackFill/>} click={handleClickBack}/>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <h1>About</h1>
            <img src={soon} alt="Pokedex" />
            <Footer/>
        </div>
    )
}

export default About;
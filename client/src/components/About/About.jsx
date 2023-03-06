import { useNavigate } from "react-router-dom"
//components
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Button from "../Button/Button"
//styles
import s from "./About.module.css"
//images
import pokedex from "../Home/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const About = () => {
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
            <h1>About</h1>
            <Footer/>
        </div>
    )
}

export default About;
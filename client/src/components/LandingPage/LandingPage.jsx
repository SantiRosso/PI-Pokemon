import {Link, useNavigate} from "react-router-dom"
//components
import Footer from "../Footer/Footer";
import Button from "../Button/Button"
//styles
import s from "./LandingPage.module.css";
//images
import pokedex from "../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import soon from "../Home/images/soon.jpeg" 

const LandingPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/LoginRegister")
    }

    return(
        <div>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <Button name={"LoginRegister"} click={handleClick}></Button>
            <img src={soon} alt="Pokedex" />
            <Link to="/home">
                <h1>Home</h1>
            </Link>
            <Footer/>
        </div>
    )
}
export default LandingPage;
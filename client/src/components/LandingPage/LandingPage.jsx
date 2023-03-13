import {Link, useNavigate} from "react-router-dom"
//components
import Footer from "../Footer/Footer";
import Button from "../Button/Button"
//styles
import s from "./LandingPage.module.css";
//images
import pokedex from "../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const LandingPage = () => {
    const navigate = useNavigate()

    const handleClick = (name) => {
        navigate(name)
    }

    return(
        <div className={s.container}>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <div className={s.content}>
               <Button name={"Home"} click={()=> handleClick("/home")}/>
               <Button name={"Login"} click={() => handleClick("/Login")}/>
               <Button name={"Register"} click={() => handleClick("/Register")}/>
            </div>
            <Footer/>
        </div>
    )
}
export default LandingPage;
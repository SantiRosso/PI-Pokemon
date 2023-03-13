import { useNavigate } from "react-router-dom";
//components
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Button from "../../Button/Button";
//images
import soon from "../../Home/images/soon.jpeg" 
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"

const CreatePokemon = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <Button name="Back" icon={<RiArrowGoBackFill/>} click={handleClickBack}/>
            <h1>Create Pokemon</h1>
            <img src={soon} alt="Pokedex" />
            <Footer/>
        </div>
    )
}
export default CreatePokemon;
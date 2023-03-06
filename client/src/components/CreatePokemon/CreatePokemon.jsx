import { useNavigate } from "react-router-dom";
//components
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";

const CreatePokemon = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <Button name="Back" click={handleClickBack}/>
            <h1>Create Pokemon</h1>
            <Footer/>
        </div>
    )
}
export default CreatePokemon;
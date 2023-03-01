import { useNavigate } from "react-router-dom";
//components
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const CreatePokemon = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <button onClick={handleClickBack}>Back</button>
            <h1>Create Pokemon</h1>
            <Footer/>
        </div>
    )
}
export default CreatePokemon;
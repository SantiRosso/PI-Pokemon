import { useNavigate } from "react-router-dom";
//components
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
//styles
import s from "./Profile.module.css"
//images
import pokedex from "../Home/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const Profile = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <button onClick={handleClickBack}>Back</button>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <h1>Profile</h1>
            <Footer/>
        </div>
    )
}
export default Profile;
import {Link} from "react-router-dom"
//components
import Footer from "../Footer/Footer";
//styles
import s from "./LoginRegister.module.css"
//images
import pokedex from "../Home/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const LoginRegister = () => {
    return(
        <div>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <h1>LoginRegister</h1>
            <Link to="/home">
                <h1>Home</h1>
            </Link>
            <Footer/>
        </div>
    )
}
export default LoginRegister;
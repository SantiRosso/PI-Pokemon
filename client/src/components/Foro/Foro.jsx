import {useNavigate } from "react-router-dom"
//components
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar"

const Foro = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <button onClick={handleClickBack}>Back</button>
            <h1>Foro</h1>
            <Footer/>
        </div>
    )
}
export default Foro;
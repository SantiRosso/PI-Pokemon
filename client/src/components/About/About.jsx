import { useNavigate } from "react-router-dom"
//components
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const About = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }
    
    return(
        <div>
            <NavBar/>
            <button onClick={handleClickBack}>Back</button>
            <h1>About</h1>
            <Footer/>
        </div>
    )
}

export default About;
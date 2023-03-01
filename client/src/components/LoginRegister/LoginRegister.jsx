import {Link} from "react-router-dom"
//components
import Footer from "../Footer/Footer";

const LoginRegister = () => {
    return(
        <div>
            <h1>LoginRegister</h1>
            <Link to="/home">
                <h1>Home</h1>
            </Link>
            <Footer/>
        </div>
    )
}
export default LoginRegister;
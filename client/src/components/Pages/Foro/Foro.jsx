import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"
//components
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar"
import Button from "../../Button/Button";
//styles
import s from "./Foro.module.css"
//images
import pokedex from "../../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import soon from "../../Home/images/soon.jpeg"
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"

const Foro = () => {
    const navigate = useNavigate() 

    const handleClickBack = () => {
        navigate("/home")
    }

    const [comments, setComments] = useState({comments:""})

    const getComments = async () => {
        setComments(comments.comments = await axios.get("/comments"))
    }

    useEffect(() => {
        if(!comments){
            getComments()
        }
    })
    
    return(
        <div>
            <NavBar/>
            <Button name="Back" icon={<RiArrowGoBackFill/>} click={handleClickBack}/>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <div className={s.container}>
                <h1>Foro</h1>
                <div className={s.chat}>
                    <h1>asdasd</h1>
                </div>
            </div>
            {/* <img src={soon} alt="Pokedex" />  */}
            <Footer/>
        </div>
    )
}
export default Foro;
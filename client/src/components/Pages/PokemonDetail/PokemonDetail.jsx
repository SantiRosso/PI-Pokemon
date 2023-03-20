import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import s from "./PokemonDetail.module.css"
//components
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Button from "../../Button/Button";
//react icons
import {RiArrowGoBackFill} from "react-icons/ri"
//images
import pokedex from "../../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const PokemonDetail = () => {
    const id = useParams()
    const navigate = useNavigate()
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemons/${id.id}`)
        .then(response => setDetail(response.data))
    },[id])

    const handleClickBack = () => {
        navigate("/pokemons")
    }

    return(
        <div>
            <NavBar/>
            <Button name="Back" icon={<RiArrowGoBackFill/>} click={handleClickBack}/>
            <div className={s.title}>
                <img src={pokedex} alt="Pokedex" /> 
            </div>
            <div className={s.container}>
                <h1>{detail?.name}</h1>
                <div className={s.info}>
                    <img src={detail?.image.front_default} alt={detail?.name} />
                    <div>
                        <h1>TYPES: {detail?.types}</h1>
                        <h1>HP: {detail?.hp}</h1>
                    </div>
                    <div>
                        <h1>ATTACK: {detail?.attack}</h1>
                        <h1>DEFENSE: {detail?.defense}</h1>
                        <h1>SPEED: {detail?.speed}</h1>
                        <h1>HEIGHT: {detail?.height}</h1>
                        <h1>WEIGHT:{detail?.weight}</h1>
                    </div>
                </div> 
            </div>
            <Footer/>
        </div>
    )
}
export default PokemonDetail;
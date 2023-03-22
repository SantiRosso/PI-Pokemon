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
        axios.get(`/pokemons/${id.id}`)
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
                <h1 className={s.name}>{detail?.name.toUpperCase()}</h1>
                <div className={s.info}>
                    <img src={detail?.image.front_default} alt={detail?.name} />
                    <div className={s.grid}>
                        <div>
                            <h1 className={s.h1}>TYPES:</h1>
                            {
                                detail?.types.map((e) => {
                                    return(
                                         <h3 className={s.gridItem}>{e.toUpperCase()}</h3>
                                    )
                                })
                            }
                            <h1 className={s.h1}>HP:</h1>
                            <h3 className={s.gridItem}>{detail?.hp}</h3>
                            <h1 className={s.h1}>ATTACK:</h1>
                            <h3 className={s.gridItem}>{detail?.attack}</h3>
                        </div>
                        <div>
                            <h1 className={s.h1}>DEFENSE:</h1>
                            <h3 className={s.gridItem}>{detail?.defense}</h3>
                            <h1 className={s.h1}>SPEED:</h1>
                            <h3 className={s.gridItem}>{detail?.speed}</h3>
                            <h1 className={s.h1}>HEIGHT:</h1>
                            <h3 className={s.gridItem}>{detail?.height}</h3>
                            <h1 className={s.h1}>WEIGHT:</h1>
                            <h3 className={s.gridItem}>{detail?.weight}</h3>
                        </div>
                    </div>
                </div> 
            </div>
            <Footer/>
        </div>
    )
}
export default PokemonDetail;
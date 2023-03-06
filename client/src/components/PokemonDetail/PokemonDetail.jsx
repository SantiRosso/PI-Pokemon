import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

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

    console.log(detail)
    return(
        <div>
            <NavBar/>
            <Button name="Back" click={handleClickBack}/>
            <h1>{detail?.name}</h1>
            <h1>TYPES: {detail?.types}</h1>
            <img src={detail?.image.front_default} alt={detail?.name} />
            <h1>HP: {detail?.hp}</h1>
            <h1>ATTACK: {detail?.attack}</h1>
            <h1>DEFENSE: {detail?.defense}</h1>
            <h1>SPEED: {detail?.speed}</h1>
            <h1>HEIGHT: {detail?.height}</h1>
            <h1>WEIGHT: {detail?.weight}</h1>
            <Footer/>
        </div>
    )
}
export default PokemonDetail;
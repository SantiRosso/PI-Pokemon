import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

const PokemonDetail = () => {
    const id = useParams()
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemons/${id.id}`)
        .then(response => setDetail(response.data))
    },[id])


    console.log(detail)
    return(
        <div>
            <NavBar/>
            <h1>{detail?.name}</h1>
            <h1>TYPES: {detail?.types}</h1>
            <img src={detail?.image.front_default} alt={detail?.name} />
            <h1>HP: {detail?.hp}</h1>
            <h1>ATTACK: {detail?.attack}</h1>
            <h1>DEFENSE: {detail?.defense}</h1>
            <h1>SPEED: {detail?.speed}</h1>
            <h1>HEIGHT: {detail?.height}</h1>
            <h1>WEIGHT: {detail?.weight}</h1>
        </div>
    )
}

export default PokemonDetail;
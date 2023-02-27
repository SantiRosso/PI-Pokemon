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

    return(
        <div>
            <NavBar/>
            <h1>{detail?.name}</h1>
            <h1>{detail?.types}</h1>
            <img src={detail?.image.front_default} alt={detail?.name} />
            {/* faltan datos */}
        </div>
    )
}

export default PokemonDetail;
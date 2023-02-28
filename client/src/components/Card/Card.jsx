import { Link } from "react-router-dom"

const Card = ({name, types, image, id}) => {
    return(
        <div>
            <img src={image} alt={name}/>
            <Link to={`/pokemon-detail/${id}`}>
                <h1>{name}</h1>
            </Link>
            <h1>{types}</h1>
        </div>
    )
}
export default Card;
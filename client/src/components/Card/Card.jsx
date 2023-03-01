import { Link } from "react-router-dom"
//styles
import s from "./Card.module.css"

const Card = ({name, types, image, id}) => {
    return(
        <div className={s.card}>
            <img src={image} alt={name} className={s.image}/>
            <Link to={`/pokemon-detail/${id}`}>
                <h1>{name}</h1>
            </Link>
            <h1>{types}</h1>
        </div>
    )
}
export default Card;
import { Link } from "react-router-dom"
//styles
import s from "./Card.module.css"

const Card = ({name, types, image, id}) => {

    return(
        <div className={s.card}>
            <img src={image} alt={name} className={s.image}/>
            <Link to={`/pokemon-detail/${id}`}>
                <h4>{name}</h4>
            </Link>
            {
                types?.map((e) => {
                    return(
                        <span>{e}</span>
                    )
                })
            }
        </div>
    )
}
export default Card;
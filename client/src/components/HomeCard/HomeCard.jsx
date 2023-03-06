import {useNavigate} from "react-router-dom"
//components
import Button from "../Button/Button"
//styles
import s from "./HomeCard.module.css"


const HomeCard = ({name, image, route, onClick}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if(route) {
            navigate(route)
        } else {
            onClick()
        }
    }

    return(
        <div className={s.container}>
            <img src={image} alt={name} className={s.image}/>
            <Button name={name} click={handleClick}/>
        </div>
    )
}

export default HomeCard;
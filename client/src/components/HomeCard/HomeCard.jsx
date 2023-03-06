import {useNavigate} from "react-router-dom"
//components
import Button from "../Button/Button"

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
        <div>
            <img src={image} alt={name} />
            <Button name={name} click={handleClick}/>
        </div>
    )
}

export default HomeCard;
import {useNavigate} from "react-router-dom"

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
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}

export default HomeCard;
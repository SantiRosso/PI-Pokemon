const Card = ({name, types, image}) => {
    return(
        <div>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h1>{types}</h1>
        </div>
    )
}

export default Card;
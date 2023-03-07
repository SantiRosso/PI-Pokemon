import s from "./Button.module.css"

const Button = ({name, click, disabled/* , hidden */}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button onClick={handleClick} className={s.button} disabled={disabled} /* hidden={hidden} */>{name} </button>
    )
}

export default Button;
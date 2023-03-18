import s from "./Button.module.css"

const Button = ({name, click, disabled, icon, type}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button type={type} onClick={handleClick} className={s.button} disabled={disabled} /* hidden={hidden} */>{icon}{name}</button>
    )
}

export default Button;
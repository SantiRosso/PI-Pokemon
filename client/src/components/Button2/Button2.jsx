import s from "./Button2.module.css"

const Button2 = ({name, click, disabled, icon, type}) => {

    const handleClick = () => {
        click()
    }

    return(
        <span type={type} onClick={handleClick} className={s.button} disabled={disabled}>{icon}{name}</span>
    )
}

export default Button2;
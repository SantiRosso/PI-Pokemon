import s from "./Button2.module.css"

const Button2 = ({name, click, disabled, icon, type}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button type={type} onClick={handleClick} className={s.button} disabled={disabled}>{icon}{name}</button>
    )
}

export default Button2;
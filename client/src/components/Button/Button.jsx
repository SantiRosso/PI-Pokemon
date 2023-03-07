import s from "./Button.module.css"

const Button = ({name, click, disabled}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button onClick={handleClick} className={s.button} disabled={disabled}>{name} </button>
    )
}

export default Button;
import s from "./Button.module.css"

const Button = ({name, click}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button onClick={handleClick} className={s.button}>{name}</button>
    )
}

export default Button;
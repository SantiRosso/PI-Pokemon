import s from "./Button.module.css"

const Button = ({name, click, disabled, icon/* , hidden */}) => {

    const handleClick = () => {
        click()
    }

    return(
        <button onClick={handleClick} className={s.button} disabled={disabled} /* hidden={hidden} */>{icon}{name}</button>
    )
}

export default Button;
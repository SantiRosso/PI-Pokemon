import s from "./Input.module.css"

const Input = ({name, change, placeholder, type}) => {

    const handleChange = () => {
        change()
    }

    return(
        <input className={s.input} name={name} type={type} onClick={handleChange} placeholder={placeholder} required/>
    )
}

export default Input;
import { useModal } from "../../Hooks/useModal";
//styles
import s from "./SideBar.module.css"
//components
import Button from "../Button/Button";
import CreatePokemonModal from "../Modals/CreatePokemonModal"

const SideBar = () => {

    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    return(
        <div className={s.container}>
            <div className={s.buttons}>
                <Button className={s.button} name="Login" route="/login"/>
            </div>
            <div className={s.buttons}>
                <Button name="Profile" route="/profile"/>   
            </div>
            <div className={s.buttons}>
                <Button name="Pokemons" route="/pokemons"/> 
            </div>
            <div className={s.buttons}>
                <Button name="Foro" route="/foro"/>
            </div>
            <div className={s.buttons}>
                <Button name="Create Pokemon" click={OpenModal1}/>    
            </div>
            <div className={s.buttons}>
                <Button name="About" route="/about"/>
            </div>
            <div className={s.buttons}>
                <Button name="Favourites" />
            </div>
            <div className={s.buttons}>
                <Button name="Donations" /> 
            </div>
            <div className={s.buttons}>
                <Button name="Settings" />
            </div>
            <div className={s.buttons}>
                <Button name="Social" />
            </div>
            <div className={s.buttons}>
                <Button name="Statistics" />
            </div>
            <div className={s.buttons}>
                <Button name="Logout" />
            </div>
            <CreatePokemonModal isOpen={isOpenModal1} closeModal={closeModal1}/>
        </div>
    )
}

export default SideBar;
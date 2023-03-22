import { useModal } from "../../Hooks/useModal";
import { useNavigate } from "react-router-dom";
//styles
import s from "./SideBar.module.css"
//components
import Button from "../Button/Button";
import CreatePokemonModal from "../Modals/CreatePokemonModal"

const SideBar = () => {

    const navigate = useNavigate()
    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    const click = ({onClick, route}) => {
        if(route){
            navigate(route)
        } else {
            onClick()
        }
    }

    return(
        <div className={s.container}>
            <div onClick={() => click({route:"/login"})} className={s.buttons}>
                {/* <Button className={s.button} name="Login" route="/login"/> */}
                <h4 className={s.h4}>Login</h4>
            </div>
            <div onClick={() => click({route: "/profile"})} className={s.buttons}>
                {/* <Button name="Profile" route="/profile"/> */}
                <h4 className={s.h4}>Profile</h4>
            </div>
            <div onClick={() => click({route: "/pokemons"})} className={s.buttons}>
                {/* <Button name="Pokemons" route="/pokemons"/> */}
                <h4 className={s.h4}>Pokemons</h4>
            </div>
            <div onClick={() => click({route: "/foro"})} className={s.buttons}>
                {/* <Button name="Foro" route="/foro"/> */}
                <h4 className={s.h4}>Foro</h4>
            </div>
            <div onClick={() => click({onClick: OpenModal1})} className={s.buttons}>
                {/* <Button name="Create Pokemon" click={OpenModal1}/> */}
                <h4 className={s.h4}>Create Pokemon</h4>
            </div>
            <div onClick={() => click({route: "/about"})} className={s.buttons}>
                {/* <Button name="About" route="/about"/> */}
                <h4 className={s.h4}>About</h4>
            </div>
            <div onClick={() => click({route: "/favourites"})} className={s.buttons}>
                {/* <Button name="Favourites" /> */}
                <h4 className={s.h4}>Favourites</h4>
            </div>
            <div onClick={() => click({route: "/donations"})} className={s.buttons}>
                {/* <Button name="Donations" />  */}
                <h4 className={s.h4}>Donations</h4>
            </div>
            <div onClick={() => click({route: "/settings"})} className={s.buttons}>
                {/* <Button name="Settings" /> */}
                <h4 className={s.h4}>Settings</h4>
            </div>
            <div onClick={() => click({route: "/social"})} className={s.buttons}>
                {/* <Button name="Social" /> */}
                <h4 className={s.h4}>Social</h4>
            </div>
            <div onClick={() => click({route: "/statistics"})} className={s.buttons}>
                {/* <Button name="Statistics" /> */}
                <h4 className={s.h4}>Statistics</h4>
            </div>
            <div /* onClick={() => click({onClick: logout})} */ className={s.buttons}>
                {/* <Button name="Logout" /> */}
                <h4 className={s.h4}>Logout</h4>
            </div>
            <CreatePokemonModal isOpen={isOpenModal1} closeModal={closeModal1}/>
        </div>
    )
}

export default SideBar;
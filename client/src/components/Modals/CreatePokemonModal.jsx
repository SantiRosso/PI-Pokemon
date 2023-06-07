//components
import { useState } from "react";
import Modal from "./Modal"

const CreatePokemonModal = ({isOpen, closeModal}) => {

    const [newPokemon, setNewPokemon] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        imgUrl: "",
        types: "",
    })

    const handleChange = (e) => {
        setNewPokemon(
            ...state,
            [e.target.name]: e.target.value
        )
    }

    return(
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="modal-content">
                    <h1>Create Pokemon</h1>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                    <label htmlFor="">HP</label>
                    <input type="text" />
                    <label htmlFor="">Attack</label>
                    <input type="text" />
                    <label htmlFor="">Defense</label>
                    <input type="text" />
                    <label htmlFor="">Speed</label>
                    <input type="text" />
                    <label htmlFor="">Height</label>
                    <input type="text" />
                    <label htmlFor="">Weight</label>
                    <input type="text" />
                    <label htmlFor="">imgUrl</label>
                    <input type="text" />
                    <label htmlFor="">Types</label>
                    <input type="text" />
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;
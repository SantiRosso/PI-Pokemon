import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
//components
import { useEffect, useState } from "react";
import Modal from "./Modal"

const CreatePokemonModal = ({isOpen, closeModal}) => {

    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();

    useEffect(()=> {
        if(!types){
            dispatch(getTypes())
        }
    }, [types])

    const [newPokemon, setNewPokemon] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        imgUrl: "",
        types: [],
    })

    const handleChange = (e) => {
        if(e.target.name === "types") {
            setNewPokemon({
                ...newPokemon,
                types: [...newPokemon.types, e.target.value]
            })
        } else {
            setNewPokemon({
                ...newPokemon,
                [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.prevetDefault();
        await axios.post("/pokemons", newPokemon)
    }

    return(
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="modal-content">
                    <h1>Create Pokemon</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Name:</label>
                        <input type="text" name="name" onChange={handleChange}/>
                        <label htmlFor="">HP</label>
                        <input type="text" name="hp" onChange={handleChange}/>
                        <label htmlFor="">Attack</label>
                        <input type="text" name="attack" onChange={handleChange}/>
                        <label htmlFor="">Defense</label>
                        <input type="text" name="defense" onChange={handleChange}/>
                        <label htmlFor="">Speed</label>
                        <input type="text" name="speed" onChange={handleChange}/>
                        <label htmlFor="">Height</label>
                        <input type="text" name="height" onChange={handleChange}/>
                        <label htmlFor="">Weight</label>
                        <input type="text" name="witght" onChange={handleChange}/>
                        <label htmlFor="">imgUrl</label>
                        <input type="text" name="imgurl" onChange={handleChange}/>
                        <label htmlFor="">Types</label>
                        <select name="types" onChange={handleChange}>
                            <option value="types" id="types">TYPES</option>
                            {
                                types?.map((e) => {
                                    return(
                                        <option key={e.id} value={e.name}>{e.name}</option>
                                    )
                                })
                            }
                        </select>
                        <button type="submit">Crear</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;
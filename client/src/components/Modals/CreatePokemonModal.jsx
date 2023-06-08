import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
//components
import { useEffect, useState } from "react";
import Modal from "./Modal"
//styles
import s from "./CreatePokemon.module.css";

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
                    {/* <div className={s.container}> */}
                        <h1>Create Pokemon</h1>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" className={s.input} onChange={handleChange}/>
                        <label htmlFor="hp">HP</label>
                        <input type="text" name="hp" id="hp" className={s.input} onChange={handleChange}/>
                        <label htmlFor="attack" >Attack</label>
                        <input type="text" name="attack" id="attack" className={s.input} onChange={handleChange}/>
                        <label htmlFor="defense">Defense</label>
                        <input type="text" name="defense" id="defense" className={s.input} onChange={handleChange}/>
                        <label htmlFor="speed">Speed</label>
                        <input type="text" name="speed" id="speed" className={s.input} onChange={handleChange}/>
                        <label htmlFor="height">Height</label>
                        <input type="text" name="height" id="height" className={s.input} onChange={handleChange}/>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" name="witght" id="weight" className={s.input} onChange={handleChange}/>
                        <label htmlFor="imgurl">imgUrl</label>
                        <input type="text" name="imgurl" id="imgurl" className={s.input} onChange={handleChange}/>
                        <label htmlFor="types">Types</label>
                        <select name="types" id="types" onChange={handleChange}>
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
                    {/* </div> */}
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;
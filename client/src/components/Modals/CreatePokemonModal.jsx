import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import { useEffect, useState } from "react";
//components
import Modal from "./Modal"
import Button from "../Button/Button"
//styles
import s from "./CreatePokemon.module.css";

const CreatePokemonModal = ({isOpen, closeModal}) => {

    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();

    useEffect(()=> {
        if(!types.length){
            dispatch(getTypes())
        }
    }, [types])

    console.log(types)

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
            if(e.target.value !== "types" && !newPokemon.types.includes(e.target.value))
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
        e.preventDefault();
        await axios.post("/pokemons", newPokemon)
    }

    const handleClickX = (e) => {
        setNewPokemon({
            ...newPokemon,
            types: newPokemon.types.filter((type) => type !== e.target.value)
        })
    }

    return(
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="modal-content">
                    {/* <div className={s.container}> */}
                        <h1 className={s.title}>Create Pokemon</h1>
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
                        <input type="text" name="weight" id="weight" className={s.input} onChange={handleChange}/>
                        <label htmlFor="imgUrl">imgUrl</label>
                        <input type="text" name="imgUrl" id="imgUrl" className={s.input} onChange={handleChange}/>
                        <label htmlFor="types">Types</label>
                        <select name="types" id="types" onChange={handleChange} className={s.select}>
                            <option value="types" id="types">TYPES</option>
                            {
                                types?.map((e) => {
                                    return(
                                        <option key={e.id} value={e.name}>{e.name}</option>
                                    )
                                })
                            }
                        </select>
                        <div className={s.types}>
                            {
                                newPokemon.types?.map((e) => {
                                    return(
                                       <p className={s.p}>{e}<button value={e} className={s.x} onClick={(e)=>handleClickX(e)}>X</button></p>
                                    )
                                })
                            }
                        </div>
                        <Button type="submit" name="Crear"/>
                    </form>
                    {/* </div> */}
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getFilters, getOrderAlphabet, getOrderAttack } from "../../redux/actions.js"
//styles
import s from "./Filters.module.css";

const Filters = ({order, setOrder}) => {

    const types = useSelector((state) => state.types);
    const dispatch = useDispatch()

    const [filters, setFilters] = useState({
        types: "",
    });

    useEffect(()=> {
        if(!types.length) dispatch(getTypes())
        dispatch(getFilters(filters)) //Así o hacer los filtros desde el back
    }, [types, filters, dispatch])

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        })
    }

    const handleOrderAlphabet = (e) => {
        dispatch(getOrderAlphabet(e.target.value))
        setOrder(!order)
    }

    const handleOrderAttack = (e) => {
        dispatch(getOrderAttack(e.target.value))
        setOrder(!order)
    }

    return(
        <div className={s.container}>
            <div>
                <h4>Filters</h4>
            </div>
            <div>
                <div className={s.subdiv}>
                    <p>Types</p>
                    <select className={s.select} name="types" id="1" onChange={handleChange}>
                        <option value="TYPES">TYPES</option>
                        {
                            types?.map((type, i) => {
                                return(
                                    <option key={i} value={type.name}>{type.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div> 
            <div>
                <h4>Order by:</h4>
            </div>
            <div className={s.subdiv}> 
                <p>Alphabet</p>
                <select className={s.select} name="alphabet" id="2" onChange={handleOrderAlphabet}>
                    <option value="...">...</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div className={s.subdiv}>
                <p>Attack</p>
                <select className={s.select} name="attack" id="3" onChange={handleOrderAttack}>
                    <option value="...">...</option>
                    <option value="men">{"<"}</option>
                    <option value="may">{">"}</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;
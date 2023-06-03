import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getFilters, getOrderAlphabet, getOrderAttack } from "../../redux/actions.js"

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
        <div>
            <h4>Filters</h4>
            <p>Types</p>
            <select name="types" id="1" onChange={handleChange}>
                <option value="TYPES">TYPES</option>
                {
                    types?.map((type, i) => {
                        return(
                            <option key={i} value={type.name}>{type.name}</option>
                        )
                    })
                }
            </select>
            <h4>Order by:</h4>
            <p>Alphabet</p>
            <select name="alphabet" id="2" onChange={handleOrderAlphabet}>
                <option value="...">...</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <p>Attack</p>
            <select name="attack" id="3" onChange={handleOrderAttack}>
                <option value="...">...</option>
                <option value="men">{"<"}</option>
                <option value="may">{">"}</option>
            </select>
        </div>
    )
}

export default Filters;
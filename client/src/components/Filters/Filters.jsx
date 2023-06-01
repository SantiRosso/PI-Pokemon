import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getFilters } from "../../redux/actions.js"

const Filters = () => {

    const types = useSelector((state) => state.types);
    const dispatch = useDispatch()

    const [filters, setFilters] = useState({
        types: "",
        alphabet: "",
    });

    useEffect(()=> {
        if(!types) dispatch(getTypes())
        dispatch(getFilters(filters)) //Así o hacer los filtros desde el back
    })

    const handleChange = (e) => {
        setFilters({
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <h4>Filters</h4>
            <p>Types</p>
            <select name="types" id="1" onClick={handleChange}>
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
            <select name="alphabet" id="2" onClick={handleChange}>
                <option value="...">...</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <p>Attack</p>
            <select name="" id="3"></select>
        </div>
    )
}

export default Filters;
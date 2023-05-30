import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getFilters } from "../../redux/actions.js"

const Filters = () => {

    const types = useSelector((state) => state.types);
    const dispatch = useDispatch()

    const [filters, setFilters] = useState({
        types: ""
    });

    useEffect(()=> {
        if(!types) dispatch(getTypes())
        dispatch(getFilters(filters))
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
            <select name="" id="2"></select>
            <p>Attack</p>
            <select name="" id="3"></select>
        </div>
    )
}

export default Filters;
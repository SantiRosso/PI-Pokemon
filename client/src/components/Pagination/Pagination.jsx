import s from "./Pagination.module.css"

const Pagination = ({input, setInput, page, setPage, max}) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const previousPage = () => {
        setInput (input -1)
        setPage (page -1)
    }

    const nextPage = () => {
        setInput(input +1)
        setPage (page +1)
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            setPage(parseInt(e.target.value))
            if(parseInt(e.target.value) < 1 || parseInt(e.target.value) > max || isNaN(parseInt(e.target.value))){
                setPage(1)
                setInput(1)
            } else {
                setPage(parseInt(e.target.value))
            }
        }
    }

    return(
        <div>
            <div className={s.container}>
                <span className={s.button} disabled={page === 1} onClick={previousPage}>{"<"}</span>
                <input className={s.input} onChange={(e) => handleChange(e)} onKeyDown={(e)=> onKeyDown(e)} type="text" name="page" autoComplete="off" value={input}/>
                <p className={s.p}>of {max}</p>
                <span className={s.button} disabled={page === max} onClick={nextPage}>{">"}</span>
            </div>
        </div>
    )
}

export default Pagination;
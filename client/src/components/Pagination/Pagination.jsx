const Pagination = ({input, setInput, page, setPage, max}) => {

    const handleChange = (e) => {
        console.log("hableChange")
    }

    const previousPage = () => {
        console.log("previousPage")
    }

    const nextPage = () => {
        console.log("nextPage")
    }

    const onKeyDown = (e) => {
        console.log("onKeyDown")
    }

    return(
        <div>
            <div>
                <button disabled={page === 1} onClick={previousPage}>{"<"}</button>
                <input onChange={(e) => handleChange(e)} onKeyDown={(e)=> onKeyDown(e)} type="text" name="page" autoComplete="off" value={input}/>
                <p>of {max}</p>
                <button disabled={page === max} onClick={nextPage}>{">"}</button>
            </div>
        </div>
    )
}

export default Pagination;